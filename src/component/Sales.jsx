import React from 'react'
import Calls from './salesPage/Calls'
import OutgoingWeek from './salesPage/OutgoingWeek'
import OutgoingMonth from './salesPage/OutgoingMonth'

export default function Sales() {
  return (
    <div className='w-full'>
        <Calls></Calls>
        <OutgoingWeek></OutgoingWeek>
        <OutgoingMonth></OutgoingMonth>
    </div>
  )
}
