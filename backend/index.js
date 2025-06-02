const express = require("express");
const path = require("path");
const { client, connectRedis } = require("./redisClient");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Redis (optional)
connectRedis()
  .then(() => console.log("Connected to Redis"))
  .catch(console.error);

// Serve static files from frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Serve React app for all routes (client-side routing support)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Backend server serving React app on port ${PORT}`);
});
