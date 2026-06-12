# JWT Authentication in Node.js with Express

## 1. Introduction to JSON Web Tokens (JWT)

### What is JWT?

A JSON Web Token (JWT) is a compact, URL-safe token used to securely transmit information between parties as a JSON object.

A JWT consists of three parts:

```text
Header.Payload.Signature
```

Example:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiam9obiJ9
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### JWT Components

#### Header

Contains token type and signing algorithm.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

Contains user information and claims.

```json
{
  "userId": 1,
  "username": "john"
}
```

#### Signature

Generated using:

```text
Header + Payload + Secret Key
```

### Common JWT Use Cases

* User Authentication
* Authorization
* Single Sign-On (SSO)
* API Security
* Microservices Communication

---

# 2. Setting Up a Node.js and Express Application

## Step 1: Create Project

```bash
mkdir jwt-auth-app
cd jwt-auth-app
```

## Step 2: Initialize Project

```bash
npm init -y
```

## Step 3: Install Express

```bash
npm install express --save
```

## Step 4: Create Project Structure

```text
jwt-auth-app/
│
├── app.js
├── routes/
│   └── auth.js
│
├── middleware/
│   └── authMiddleware.js
│
├── database/
│   └── users.js
│
└── package.json
```

## Step 5: Create app.js

```javascript
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run:

```bash
node app.js
```

---

# 3. Installing Dependencies

Install required packages:

```bash
npm install jsonwebtoken bcrypt body-parser cookie-parser
```

### Purpose of Each Package

| Package       | Purpose                         |
| ------------- | ------------------------------- |
| express       | Web server                      |
| jsonwebtoken  | JWT generation and verification |
| bcrypt        | Password hashing                |
| body-parser   | Request parsing                 |
| cookie-parser | Cookie handling                 |

### Configure Middleware

```javascript
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(cookieParser());
```

---

# 4. Creating User Authentication Endpoints

## Create Users Data Store

database/users.js

```javascript
const users = [];

module.exports = users;
```

---

## Create Authentication Router

routes/auth.js

```javascript
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = require("../database/users");

const JWT_SECRET = "supersecretkey";
```

---

## Registration Endpoint

```javascript
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required",
    });
  }

  const existingUser = users.find(
    (user) => user.username === username
  );

  if (existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = {
    id: Date.now(),
    username,
    password: hashedPassword,
  };

  users.push(user);

  const token = jwt.sign(
    {
      id: user.id,
      username,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({
    token,
  });
});
```

---

## Login Endpoint

```javascript
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({ token });
});
```

---

# 5. Generating JWTs

Generate Access Token

```javascript
const token = jwt.sign(
  {
    id: user.id,
    username: user.username,
  },
  JWT_SECRET,
  {
    expiresIn: "1h",
  }
);
```

### Best Practices

* Use strong secret keys
* Store secrets in environment variables
* Set expiration times
* Never expose secrets publicly

Example:

```env
JWT_SECRET=VeryStrongSecretKey123
```

---

# 6. Implementing Middleware for Authentication

middleware/authMiddleware.js

```javascript
const jwt = require("jsonwebtoken");

const JWT_SECRET = "supersecretkey";

module.exports = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
};
```

---

# 7. Securing Routes with JWT Authentication

## Protected Route

```javascript
const authMiddleware =
  require("./middleware/authMiddleware");

app.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected profile",
      user: req.user,
    });
  }
);
```

### Authentication Route Response Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 409  | Conflict     |

---

# 8. Using HTTP Cookies for JWT Storage

Store JWT in Cookies

```javascript
res.cookie("token", token, {
  httpOnly: true,
  secure: false,
  maxAge: 3600000,
});
```

Benefits:

* Protected from JavaScript access
* Reduced XSS risk
* Easier session management

---

## Logout Endpoint

```javascript
router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.json({
    message: "Logged out",
  });
});
```

---

# 9. Implementing Token Refresh

## Generate Refresh Token

```javascript
const refreshToken = jwt.sign(
  {
    id: user.id,
  },
  REFRESH_SECRET,
  {
    expiresIn: "7d",
  }
);
```

---

## Store Refresh Token

```javascript
res.cookie(
  "refreshToken",
  refreshToken,
  {
    httpOnly: true,
    maxAge:
      7 * 24 * 60 * 60 * 1000,
  }
);
```

---

## Refresh Endpoint

```javascript
router.post("/refresh", (req, res) => {
  const refreshToken =
    req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token missing",
    });
  }

  try {
    const payload =
      jwt.verify(
        refreshToken,
        REFRESH_SECRET
      );

    const accessToken =
      jwt.sign(
        {
          id: payload.id,
        },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

    res.json({
      accessToken,
    });
  } catch {
    res.status(403).json({
      message:
        "Invalid refresh token",
    });
  }
});
```

---

# 10. Exercises to Reinforce Knowledge

## Registration Validation

Enforce:

* Minimum username length
* Minimum password length
* Special characters
* Email validation

---

## Update Profile

Create:

```http
PUT /profile
```

Allow authenticated users to:

* Update username
* Update email
* Update password

---

## Logout Improvements

Invalidate refresh tokens.

Example:

```javascript
const revokedTokens = [];
```

Add token to revoked list during logout.

---

## Token Revocation

Maintain:

```javascript
const revokedTokens = [];
```

Check revoked tokens during refresh operations.

---

## Database Integration

Replace:

```javascript
const users = [];
```

With:

* MongoDB
* PostgreSQL
* MySQL

---

## Email Confirmation

Generate verification token:

```javascript
const verificationToken =
  crypto.randomUUID();
```

Send email containing:

```text
https://example.com/verify/{token}
```

---

## Rate Limiting

Install:

```bash
npm install express-rate-limit
```

Example:

```javascript
const rateLimit =
  require("express-rate-limit");

const loginLimiter =
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
  });

app.use(
  "/login",
  loginLimiter
);
```

---

# 11. Conclusion

## Key Takeaways

* JWT provides stateless authentication.
* Passwords should always be hashed with bcrypt.
* JWTs should have expiration times.
* Protected routes should verify tokens using middleware.
* Refresh tokens improve user experience while maintaining security.
* HTTP-only cookies provide safer token storage.
* Rate limiting and token revocation improve security.

## Security Best Practices

* Store secrets in environment variables.
* Use HTTPS in production.
* Enable HTTP-only cookies.
* Implement refresh token rotation.
* Use strong password policies.
* Add rate limiting.
* Validate all user input.
* Monitor authentication logs.

JWT authentication remains one of the most widely used authentication strategies in modern web applications because it is scalable, stateless, secure when implemented correctly, and works effectively with APIs, SPAs, mobile applications, and microservice architectures.
