// app/notes/page.tsx
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
type Note = {
  id: number;
  title: string;
  content: string;
};
export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const fetchNotes = () => {
    axios.get('http://localhost:3000/api/notes').then(res => setNotes(res.data))
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const createNote = () => {
    axios.post('http://localhost:3000/api/notes', { title, content }).then(() => {
      setTitle('')
      setContent('')
      fetchNotes()
    })
  }

  const deleteNote = (id: number) => {
    axios.delete(`http://localhost:3000/api/notes/${id}`).then(fetchNotes)
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Ghi chú</h1>

      <input placeholder="Tiêu đề" value={title} onChange={e => setTitle(e.target.value)} />
      <br />
      <textarea placeholder="Nội dung" value={content} onChange={e => setContent(e.target.value)} />
      <br />
      <button onClick={createNote}>Thêm ghi chú</button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <b>{note.title}</b>: {note.content}
            <button onClick={() => deleteNote(note.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
