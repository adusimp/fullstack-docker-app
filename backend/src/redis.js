const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

client.connect().catch(console.error);
module.exports = client;
