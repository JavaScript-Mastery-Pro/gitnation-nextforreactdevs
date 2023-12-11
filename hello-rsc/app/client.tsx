"use client"

import { useState } from "react"

function Client() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h4>Client Component: {count}</h4>
    </div>
  )
}

export default Client
