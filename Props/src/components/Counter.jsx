import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1)
    }

    function decrement() {
        setCount(count-1)
    }

    
  return (
    <div>
      <h2>Count value is: {count}</h2>
      <button onClick={increment}>Increse</button>
      <button onClick={decrement}>Decrese</button>
    </div>
  )
}

export default Counter
