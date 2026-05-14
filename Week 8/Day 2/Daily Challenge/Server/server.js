const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// GET ROUTE
app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

// POST ROUTE
app.post("/api/world", (req, res) => {

  console.log(req.body);

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});