// app.js
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/final-check", (req, res) => {
  res.send({
    message: "This will be the final check of env file",
  });
});

app.get("/check", (req, res) => {
  res.send({
    message: "check env file",
  });
});

app.get("/api", (req, res) => {
  res.send({
    message: "Hello from the Node.js server!, CI/CD is working fine",
  });
});

app.get("/findport", (req, res) => {
  res.send({
    message: `Server is running on http://localhost:${PORT}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
