# Collaborative Storytelling App

## Full-Stack Project Blueprint

### Tech Stack

#### Frontend

* React
* TypeScript
* Redux Toolkit
* React Router
* Tailwind CSS + DaisyUI
* Socket.IO Client

#### Backend

* Node.js
* Express
* TypeScript
* PostgreSQL
* JWT Authentication
* bcrypt
* Socket.IO
* Cloudinary

#### Deployment

* Backend: Render Web Service
* Frontend: Render Static Site
* Database: PostgreSQL (Render)

---

# Monorepo Structure

```plaintext
collaborative-storytelling-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── db/
│   │   ├── helpers/
│   │   ├── socket/
│   │   ├── types/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── router/
│   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── stories/
│   │   │   ├── comments/
│   │   │   └── profile/
│   │
│   │   ├── store/
│   │   └── main.tsx
│   │
│   └── package.json
│
├── shared-types/
│   ├── User.ts
│   ├── Story.ts
│   ├── Comment.ts
│   └── Contributor.ts
│
└── README.md
```

---

# Database Design

## Users

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Stories

```sql
CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT REFERENCES users(id),
    comments_enabled BOOLEAN DEFAULT TRUE,
    share_token UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contributors

```sql
CREATE TABLE contributors (
    id SERIAL PRIMARY KEY,
    story_id INT REFERENCES stories(id),
    user_id INT REFERENCES users(id)
);
```

## Comments

```sql
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    story_id INT REFERENCES stories(id),
    user_id INT REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Comment Reactions

```sql
CREATE TABLE comment_reactions (
    id SERIAL PRIMARY KEY,
    comment_id INT REFERENCES comments(id),
    user_id INT REFERENCES users(id),
    reaction VARCHAR(20)
);
```

## Story Versions

```sql
CREATE TABLE story_versions (
    id SERIAL PRIMARY KEY,
    story_id INT REFERENCES stories(id),
    content TEXT NOT NULL,
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Refresh Tokens

```sql
CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    token TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL
);
```

---

# Authentication Flow

## Registration

1. User submits email and password
2. Validate input
3. Hash password with bcrypt
4. Save user
5. Generate access token
6. Generate refresh token
7. Store refresh token
8. Return access token

## Login

1. Verify email
2. Compare passwords using bcrypt
3. Generate JWT access token
4. Generate refresh token
5. Save refresh token
6. Send refresh token as HTTP-only cookie

## Refresh

```text
Access Token Expired
        ↓
Frontend receives 401
        ↓
Call /refresh
        ↓
Backend validates refresh token
        ↓
Issue new access token
        ↓
Retry original request
```

---

# Redux Store Structure

```typescript
{
  auth: {},
  stories: {},
  comments: {},
  profile: {},
  collaboration: {}
}
```

---

# Redux Slices

## Auth Slice

```typescript
{
  accessToken: string | null;
  isAuthenticated: boolean;
  user: User | null;
}
```

Actions:

* login
* logout
* refreshToken
* register

---

## Story Slice

```typescript
{
  stories: Story[];
  currentStory: Story | null;
  loading: boolean;
}
```

Actions:

* fetchStories
* createStory
* updateStory
* deleteStory

---

## Comment Slice

```typescript
{
  comments: Comment[];
}
```

Actions:

* addComment
* editComment
* deleteComment
* reactToComment

---

# Required Backend Endpoints

## Authentication

```http
POST /register
POST /login
POST /refresh
POST /logout
```

---

## Stories

```http
GET /stories
POST /stories
GET /stories/:id
PATCH /stories/:id
DELETE /stories/:id
```

---

## Contributors

```http
POST /contributors
GET /contributors/:storyId
DELETE /contributors/:id
```

---

## Comments

```http
GET /stories/:id/comments
POST /stories/:id/comments
PATCH /comments/:id
DELETE /comments/:id
```

---

## Versions

```http
GET /stories/:id/versions
POST /stories/:id/versions
POST /stories/:id/restore/:versionId
```

---

## Profile

```http
GET /profile
PATCH /profile
POST /profile/avatar
```

---

# Authorization Rules

| Action          | Author | Contributor | Other |
| --------------- | ------ | ----------- | ----- |
| View Story      | ✅      | ✅           | ✅     |
| Edit Story      | ✅      | ✅           | ❌     |
| Delete Story    | ✅      | ❌           | ❌     |
| Add Contributor | ✅      | ❌           | ❌     |
| Restore Version | ✅      | ✅           | ❌     |

---

# Real-Time Collaboration

## Socket.IO Events

### Join Story

```javascript
socket.emit("joinStory", storyId);
```

### Live Editing

```javascript
socket.emit("storyUpdate", {
  storyId,
  content
});
```

### Receive Updates

```javascript
socket.on("storyUpdated", data => {
  updateEditor(data.content);
});
```

### Cursor Tracking

```javascript
socket.emit("cursorMove", {
  userId,
  position
});
```

---

# Frontend Pages

## Homepage

Features:

* List stories
* Search stories
* Filter own stories
* Create story button

---

## Login Page

Features:

* Email field
* Password field
* Login button
* Link to Signup

---

## Signup Page

Features:

* Username
* Email
* Password
* Confirm Password

---

## Story Viewer

Features:

* Story content
* Contributors list
* Comment section
* Version history
* Live collaboration

---

## Profile Page

Features:

* User details
* Avatar upload
* User stories
* Collaborated stories

---

# Cloudinary Avatar Upload

Upload Process:

```text
Select Image
      ↓
Upload to Cloudinary
      ↓
Receive URL
      ↓
Store URL in users.avatar_url
```

---

# Social Sharing

Generate Share Link

```text
https://app.com/story/share/abc123
```

Buttons:

* X (Twitter)
* Facebook
* Copy Link

---

# Testing

## Frontend

* Vitest
* React Testing Library
* Storybook

Test:

* Login
* Signup
* Story Creation
* Comment Creation

---

## Backend

* Jest
* Supertest

Test:

* Authentication
* Authorization
* CRUD Endpoints

---

# Environment Variables

Backend:

```env
PORT=5000

DATABASE_URL=

JWT_SECRET=
REFRESH_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Frontend:

```env
VITE_API_URL=
VITE_SOCKET_URL=
```

---

# Deployment Checklist

## Backend

* Create PostgreSQL Database
* Create Render Web Service
* Add Environment Variables
* Deploy Backend

## Frontend

* Create Render Static Site
* Configure VITE_API_URL
* Deploy Frontend

## Database

* Run migration scripts
* Seed test data

---

# Documentation

README should include:

* Project Overview
* Installation
* Scripts
* Environment Variables
* API Endpoints
* Deployment Instructions
* Testing Instructions

---

# Deliverables

✅ JWT Authentication

✅ Refresh Tokens

✅ PostgreSQL Integration

✅ Redux Toolkit

✅ CRUD Stories

✅ Contributors

✅ Comments

✅ Real-Time Collaboration

✅ Version Control

✅ User Profiles

✅ Social Sharing

✅ Testing

✅ Render Deployment

✅ Responsive UI

✅ Dark Theme Support
