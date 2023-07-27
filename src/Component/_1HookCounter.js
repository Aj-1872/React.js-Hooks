import React from 'react'
import { useState } from 'react'

function _1HookCounter() {
    
    const [count,setCount] = useState(0);
    
    const incrementCount = ()=>{
        setCount((prevCount)=> prevCount +1)
    }
  return (
    <div>
    <button onClick={incrementCount}>count {count}</button>
    </div>
  )
}

export default _1HookCounter