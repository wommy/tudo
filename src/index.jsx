import React, { useState } from 'react'

export const frontMatter = {
  title: 'tudo',
  layout: 'layout',
  hydrate: 'eager',
}

function ReactDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-1/2">
      <h2>wommy workin</h2>
    </div>
  )
}

export default ReactDemo
