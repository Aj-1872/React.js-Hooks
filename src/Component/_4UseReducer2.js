import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstConter : 0,
    secondCounter  : 10

};
const reducer = (state, action) => {

    switch (action.type) {
        case 'in':
            return {...state,firstConter : state.firstConter + action.value}
        case 'de':
            return {...state,firstConter : state.firstConter - action.value}
        case 'in2':
            return {...state,secondCounter : state.secondCounter + action.value}
        case 'de2':
            return {...state,secondCounter : state.secondCounter - action.value}
        case 're':
            return initialState
        default:
            return state
    }

}


function _4UseReducer2() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <div>count {count.firstConter}  secondCount {count.secondCounter}</div>
            <button onClick={()=>dispatch({type:'in', value:1})}>in</button>
            <button onClick={()=>dispatch({type:'de', value:1})}>de</button>
            <button onClick={()=>dispatch({type:'in', value:5})}>in</button>
            <button onClick={()=>dispatch({type:'de', value:5})}>de</button>
            <button onClick={()=>dispatch({type:'re'})}>re</button>
            <button onClick={()=>dispatch({type:'in2', value:5})}>in2</button>
            <button onClick={()=>dispatch({type:'de2', value:5})}>de2</button>
        </div>
    )
}

export default _4UseReducer2