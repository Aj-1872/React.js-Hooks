import React from 'react'
import { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {

    switch (action) {
        case 'in':
            return state + 1
        case 'de':
            return state - 1
        case 're':
            return initialState
        default:
            return state
    }

}


function _4UseReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <div>count {count}</div>
            <button onClick={()=>dispatch('in')}>in</button>
            <button onClick={()=>dispatch('de')}>de</button>
            <button onClick={()=>dispatch('re')}>re</button>
        </div>
    )
}

export default _4UseReducer