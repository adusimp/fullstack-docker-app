// app/redis-admin/page.tsx
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function RedisPage() {
  const [keys, setKeys] = useState<string[]>([])
  const [selectedKey, setSelectedKey] = useState('')
  const [value, setValue] = useState('')
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')

  const fetchKeys = () => {
    axios.get('http://localhost:3000/api/redis/keys').then(res => setKeys(res.data))
  }

  useEffect(() => {
    fetchKeys()
  }, [])

  const fetchValue = (key: string) => {
    axios.get(`http://localhost:3000/api/redis/keys/${key}`).then(res => {
      setSelectedKey(key)
      setValue(res.data.value)
    })
  }

  const createKey = () => {
    axios.post('http://localhost:3000/api/redis', { key: newKey, value: newValue }).then(() => {
      setNewKey('')
      setNewValue('')
      fetchKeys()
    })
  }

  const deleteKey = (key: string) => {
    axios.delete(`http://localhost:3000/api/redis/keys/${key}`).then(fetchKeys)
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Redis Admin</h1>

      <h2>Thêm Key</h2>
      <input placeholder="Key" value={newKey} onChange={e => setNewKey(e.target.value)} />
      <input placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} />
      <button onClick={createKey}>Tạo</button>

      <h2>Danh sách Keys</h2>
      <ul>
        {keys.map(key => (
          <li key={key}>
            {key}
            <button onClick={() => fetchValue(key)}>🔍</button>
            <button onClick={() => deleteKey(key)}>🗑️</button>
          </li>
        ))}
      </ul>

      {selectedKey && (
        <div>
          <h3>Giá trị của {selectedKey}:</h3>
          <pre>{value}</pre>
        </div>
      )}
    </main>
  )
}
