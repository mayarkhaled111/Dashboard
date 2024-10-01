import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

export default function Layout() {
  return (
    <div className='flex'>
      <div className='max-w-60'><SideBar></SideBar></div>
      <Outlet></Outlet>
    </div>
  )
}
