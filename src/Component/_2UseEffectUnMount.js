import React from 'react'
import { useState } from 'react'
import _2UseEffectMouse from './_2UseEffectMouse';

function _2UseEffectUnMount() {

    const [display,setDisplay] = useState(true);



  return (
    <div>
    <button onClick={()=>{setDisplay(!display)}}>toggle</button>
    {display && <_2UseEffectMouse/>}
    </div>
  )
}

export default _2UseEffectUnMount