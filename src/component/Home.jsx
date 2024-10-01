import React from 'react'
import SideBar from './SideBar'
import OverView from './HomePage/OverView'
import SalesChart from './HomePage/SalesChart'
import VisitedDevices from './HomePage/VisitedDevices'

export default function Home() {
  return (
    
    <div className='container'>
      <h1 className='text-3xl my-6 ms-5 text-blue-600'>OverView</h1>
      <hr />
      <div className='container'>
      <OverView></OverView>
      <SalesChart></SalesChart>
      </div>
      <VisitedDevices></VisitedDevices>
    </div>
  )
}
