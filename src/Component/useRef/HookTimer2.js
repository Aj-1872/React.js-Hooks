import React,{useEffect,useState, useRef} from 'react'

function HookTimer2() {

    const [timer, settimer] = useState(0)
    const intervelRef = useRef()

    useEffect(()=>{

         intervelRef.current = setInterval(()=>{
            settimer(prevtimer => prevtimer + 1 )
        },1000)

        return ()=>{
            clearInterval(intervelRef.current )
        };

    },[])
    
  return (
    <div>
hook timer - {timer}
<button onClick={()=>clearInterval(intervelRef.current )}>clear</button>
    </div>
  )
}

export default HookTimer2