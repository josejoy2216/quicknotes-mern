const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 80;

// Database connection
db.connect();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Set headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Routes
app.use("/api", router);

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

// Catch-all route to handle SPA
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "/../frontend/build/index.html"));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
