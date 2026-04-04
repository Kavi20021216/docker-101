const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

// MongoDB connect
mongoose.connect("mongodb://mongo:27017/testdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});