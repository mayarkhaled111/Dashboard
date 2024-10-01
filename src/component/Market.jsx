import React from 'react'
import Coasts from './marketingPage/Coasts'
import AdReach from './marketingPage/AdReach'
import AdClick from './marketingPage/AdClick'

export default function Market() {
  return (
    <div className='w-full'>
        <Coasts></Coasts>
        <AdReach></AdReach>
        <AdClick></AdClick>
    </div>
  )
}
