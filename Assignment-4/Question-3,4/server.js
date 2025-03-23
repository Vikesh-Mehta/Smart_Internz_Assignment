const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Express Server is Running!");
});

// Define GET /welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
