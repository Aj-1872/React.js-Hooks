import React from 'react'

function Count({text, Count}) {
    console.log("renderring" + text );
  return (
    
    <div>{text} - {Count}</div>
  )
}

export default Count