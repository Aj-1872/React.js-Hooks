import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function _2UseEffect() {

    const [count,setCount] = useState(0);
    const [Name,setName] = useState('');

    useEffect(()=>{
        console.log('useffect - Updating document title')
        document.title = `you clicked ${count} times`
    },[count])

  return (
    <div>
    <input type="text" value={Name} onChange={e => setName(e.target.value) }/>
    <button onClick={()=>setCount(count + 1)}>click {count} times</button>
    </div>
  )
}

export default _2UseEffect