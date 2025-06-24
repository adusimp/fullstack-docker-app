// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomePage() {
  const [counter, setCounter] = useState<number | null>(null)

  useEffect(() => {
    axios.get('http://localhost:3000/api/counter')
      .then(res => setCounter(res.data.counter))
      .catch(console.error)
  }, [])

  return (
    <main style={{ padding: 20 }}>
      <h1>Số lượt truy cập: {counter ?? 'Đang tải...'}</h1>
    </main>
  )
}
