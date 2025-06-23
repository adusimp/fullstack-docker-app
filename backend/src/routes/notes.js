const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/notes', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM notes');
  res.json(rows);
});

router.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  await db.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content]);
  res.status(201).json({ message: 'Note created' });
});

router.put('/notes/:id', async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  await db.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id]);
  res.json({ message: 'Note updated' });
});

router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM notes WHERE id = ?', [id]);
  res.json({ message: 'Note deleted' });
});

module.exports = router;
