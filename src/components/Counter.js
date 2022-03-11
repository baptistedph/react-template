import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="mt-6 rounded bg-blue-500 py-2 px-4 text-lg text-white hover:bg-blue-400"
    >
      Click to increment {count}
    </button>
  )
}

export default Counter
