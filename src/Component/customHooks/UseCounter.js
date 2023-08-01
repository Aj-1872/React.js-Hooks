import React,{useState} from 'react'

function UseCounter(initialCount=0,value) {
    const [count, setcount] = useState(initialCount)

    const increment = ()=>{
        setcount(prvecount => prvecount+value)
    }

    const decrement = () =>{
        setcount (prvecount => prvecount -value)
    }

    const reset = ()=>{
        setcount (0)
    }
    return [count , increment , decrement ,reset]
}

export default UseCounter