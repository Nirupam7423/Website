// app.js
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send({
    message: "Hello from the Node.js server!, CI/CD is working fine",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
