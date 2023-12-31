import React,{useState} from 'react'
import UseCounter from './UseCounter'

function CounterOne() {
   const [count, increment,decrement, reset] = UseCounter(0,1) 
  return (
    <div>
    <h2>Count - {count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne