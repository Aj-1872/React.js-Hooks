import React from 'react'
import { userContext,channelContext } from './_3UseContextA'
import { useContext } from 'react'

function _3UseContextC() {

    const user = useContext(userContext)
    const channle = useContext(channelContext)
  return (
    <div>
{user} {channle}
    </div>
  )
}

export default _3UseContextC