const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis", // Docker service name
    port: 6379,
  },
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
}

module.exports = { client, connectRedis };
