import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

const accessData = [
    {
      "name": "April",
      "Mobile": 4000,
      "Desktop": 2400
    },
    {
      "name": "May",
      "Mobile": 3000,
      "Desktop": 1398
    },
    {
      "name": "June",
      "Mobile": 2000,
      "Desktop": 9800
    },
    {
      "name": "July",
      "Mobile": 2780,
      "Desktop": 3908
    },
    {
      "name": "August",
      "Mobile": 1890,
      "Desktop": 4800
    },
    {
      "name": "September",
      "Mobile": 2390,
      "Desktop": 3800
    },
    {
      "name": "October",
      "Mobile": 3490,
      "Desktop": 4300
    }
  ]
export default function VisitedDevices() {
    return (

        <div className="container">
            <motion.div className='bg-white px-4 py-7 flex-col justify-center text-center items-center md:m-12 m-3 rounded-md shadow-md' initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}>
                <h1 className=' mb-6 text-2xl'>Access Devices Over the Last 5 Months</h1>
                <div className='flex justify-center'>
                    <ResponsiveContainer width="100%" height={300}>
                    <BarChart width={730} height={250} data={accessData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mobile" fill="#8884d8" />
                    <Bar dataKey="Desktop" fill="#82ca9d" />
                </BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>



    );
}
