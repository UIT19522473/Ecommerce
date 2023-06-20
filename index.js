const express = require("express");
const app = express();
const dotevn = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`sever is running at PORT http://localhost:${PORT}`);
});
