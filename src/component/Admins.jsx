import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import AdminGrowth from './adminPage/AdminGrowth'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'


const admins =[
  {
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "2024-09-20T14:30:00Z"
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "role": "Viewer",
    "status": "Suspended",
    "lastLogin": "2024-09-19T09:15:00Z"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "role": "Editor",
    "status": "Active",
    "lastLogin": "2024-09-18T11:45:00Z"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "role": "Admin",
    "status": "InActive",
    "lastLogin": "2024-09-17T13:30:00Z"
  },
  {
    "id": 5,
    "name": "Eve Adams",
    "email": "eve.adams@example.com",
    "role": "Moderator",
    "status": "Suspended",
    "lastLogin": "2024-09-16T16:00:00Z"
  },
  {
    "id": 6,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Admin",
    "status": "Active",
    "lastLogin": "2024-09-24T12:34:00"
  },
  {
    "id": 7,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "Editor",
    "status": "InActive",
    "lastLogin": "2024-09-23T10:15:00"
  },
  {
    "id": 8,
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "role": "Viewer",
    "status": "Suspended",
    "lastLogin": "2024-09-22T08:45:00"
  }
]
export default function Admins() {
  let [adminData, setAdminData] = useState(admins)
  let [searchAdmin, setSearchAdmin] = useState(admins)

 
  function deleteAdmin(id) {
    setSearchAdmin(prevAdminData => prevAdminData.filter(admin => admin.id !== id));
    toast.info('Done')
  }
  function search(e) {
    const term = e.target.value.toLowerCase();
    if (term === '') {
      setSearchAdmin(adminData);
    } else {
      setSearchAdmin(searchAdmin.filter((admin) => admin?.name.toLowerCase().includes(term)));
    }
  }

  return (
    <div className='container'>
      <h1 className='text-3xl my-6 ms-5 text-blue-600'>Admins</h1>
      <hr />
      <div className='container w-2/3'>
      <input onChange={search} className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
        <motion.div
        className="relative shadow-md rounded-md overflow-x-scroll"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        >
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  email
                </th>
                <th scope="col" className="px-6 py-3 ">
                  role
                </th>
                <th scope="col" className="px-6 py-3 ">
                  status
                </th>
                <th scope="col" className="px-6 py-3 ">
                  lastLogin
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {searchAdmin?.length > 0 ?
              searchAdmin.map(ele =>
                <tr key={ele?.id} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <td className="px-6 py-4  ">{ele?.name}</td>
                  <td className="px-6 py-4 ">{ele?.email}</td>
                  <td className="px-6 py-4 ">{ele?.role}</td>
                  <td className="px-6 py-4 flex justify-center items-center gap-2"><span>{ele?.status == "Active" ? <p className='w-2 h-2 bg-green-600 rounded-full'></p> : ele?.status == "InActive" ? <p className='w-2 h-2 bg-yellow-600 rounded-full'></p> : <p className='w-2 h-2 bg-red-600 rounded-full'></p>}</span>{ele?.status}</td>
                  <td className="px-6 py-4 ">{moment(ele?.lastLogin).format('LT')}</td>
                  <td className='flex gap-2 justify-center'>
                    <i className="fa-solid fa-gear fa-xl cursor-pointer" style={{ color: '#4074ce' }} onClick={() => { edit(ele?.id) }}/><i className="fa-regular fa-circle-xmark fa-xl cursor-pointer" style={{ color: '#cd3232' }} onClick={() => { deleteAdmin(ele?.id) }} />
                  </td>
                </tr>) : <tr><td  className='text-red-600 text-2xl my-4'> "No results found"</td></tr>}
            </tbody>
          </table>
        </motion.div>
        <AdminGrowth></AdminGrowth>
    </div>
  )
}



