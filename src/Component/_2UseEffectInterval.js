import { useEffect, useState } from "react"
import React  from 'react'

function _2UseEffectInterval() {
    const [count,setCount] = useState(0);

    const tick = () =>{
        setCount (prveCount=>prveCount+1)
    }

    useEffect (()=>{
        const interval = setInterval(() => {

            tick()
            
        }, 1000);

        return ()=>{
            clearInterval(interval);
        }
    },[])
    
  return (
    <div>{count}</div>
  )
}

export default _2UseEffectInterval