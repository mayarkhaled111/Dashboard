import React, { useState } from 'react';
import {  UsersIcon, ChartBarIcon, BriefcaseIcon, BookOpenIcon} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/dashboard.png'
import { ShoppingBag } from '@mui/icons-material';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-full bg-white p-5 pt-8 ${isOpen ? "w-60" : "w-20"} duration-300 static md:relative`}>
      <div className='relative'>
      <i className={`fa-solid ${isOpen ? 'fa-angle-left' : 'fa-angle-right'} absolute cursor-pointer -right-10 top-0 w-10 border-dark-purple border-2 rounded-full flex justify-center items-center p-2`} onClick={toggleSidebar}></i>
      <ul className="pt-6">
        <Link to={'/'}>
        <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-600 text-sm items-center gap-x-4">
          <img src={logo} className='w-5'></img>
          <span className={`${!isOpen && "hidden"} origin-left duration-200 text-xl`}>Dashboard</span>
        </li>
        </Link>
        <hr className='my-6'></hr>
        <NavLink to={'/admins'}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-sm items-center gap-x-4">
            <UsersIcon className="w-6 h-6" />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>Admins</span>
          </li>
        </NavLink>
        <NavLink to={'/products'}>
        <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-sm items-center gap-x-4">
          <ShoppingBag className="w-6 h-6" />
          <span className={`${!isOpen && "hidden"} origin-left duration-200`}>Products</span>
        </li>
        </NavLink>
        <NavLink to={'/sales'}>
        <li className="flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4">
          <ChartBarIcon className="w-6 h-6" />
          <span className={`${!isOpen && "hidden"} origin-left duration-200`}>Sales Report</span>
        </li>
        </NavLink>
        <NavLink to={'/market'}>
        <li className="flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4">
          <BriefcaseIcon className="w-6 h-6" />
          <span className={`${!isOpen && "hidden"} origin-left duration-200`}>Marketing</span>
        </li>
        </NavLink>
      </ul>
      </div>
    </div>

  );
};

export default SideBar;
