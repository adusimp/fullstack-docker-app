const express = require('express');
const router = express.Router();
const redis = require('../redis');

// Get all keys
router.get('/redis/keys', async (req, res) => {
  const keys = await redis.keys('*');
  res.json(keys);
});

// Get key by name
router.get('/redis/keys/:key', async (req, res) => {
  const { key } = req.params;
  const value = await redis.get(key);
  res.json({ key, value });
});

// Create key-value
router.post('/redis', async (req, res) => {
  const { key, value } = req.body;
  await redis.set(key, value);
  res.status(201).json({ message: 'Key created' });
});

// Delete key
router.delete('/redis/keys/:key', async (req, res) => {
  const { key } = req.params;
  await redis.del(key);
  res.json({ message: 'Key deleted' });
});

module.exports = router;
