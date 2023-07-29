import React, { useEffect, useState } from 'react'

function _2UseEffectMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('mouse even');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect (()=>{
        console.log('useeffect called');
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
    Hooks X-{x} y-{y}
    </div>
  ) 
}   

      
export default _2UseEffectMouse