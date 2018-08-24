var express = require("express");

var data = null; // Global variable stores the data from POST

var app = express();
// Middleware to parse request body
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json objects
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
  res.end();
});

app.post("/data", (req, res) => {
  data = req.body.data;
  res.status(200).json({ data });
  res.end();
});

app.get("/data", (req, res) => {
  if (data != undefined || data != null) {
    res.status(200).json({ data });
  } else {
    res.sendStatus(404);    // Send 404, if data is not present
  }
  res.end();
});

const PORT = 8000;
app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log("Server started on " + PORT);
});

