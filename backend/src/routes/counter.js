const express = require('express');
const router = express.Router();
const db = require('../db');
const redis = require('../redis');

router.get('/counter', async (req, res) => {
  try {
    let counter = await redis.get('counter');

    if (!counter) {
      const [rows] = await db.query('SELECT value FROM counters WHERE name = ?', ['main']);
      counter = rows[0]?.value || 0;
    }

    const newValue = parseInt(counter) + 1;

    await db.query(
      'INSERT INTO counters (name, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = ?',
      ['main', newValue, newValue]
    );
    await redis.set('counter', newValue);

    res.json({ counter: newValue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
