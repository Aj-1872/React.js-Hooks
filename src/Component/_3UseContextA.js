import React from 'react'
import _3UseContextB from './_3UseContextB'
export const userContext = React.createContext();
export const channelContext = React.createContext();

function _3UseContextA() {
  return (
    <div>
    <userContext.Provider value={'ajay'}>
    <channelContext.Provider value={'yo'}>
    <_3UseContextB/>
    </channelContext.Provider>
    </userContext.Provider>
    </div>
  )
}

export default _3UseContextA