import React, {useState} from 'react'

export default function SpotCheck1() {
 const [count, setCount]=useState(0)

  const decreaseCount = () => setCount(count-1)
    const increaseCount = () => setCount(count + 1)
 
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      </div>
    </div>
  )
}