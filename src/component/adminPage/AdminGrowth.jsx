import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CartesianGrid, ResponsiveContainer, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { motion } from 'framer-motion';
 import { PieChart } from '@mui/x-charts/PieChart';

 const adminGrowth = [
  {"month": "Jul", "admins": 6000},
  {"month": "Aug", "admins": 2000},
  {"month": "Sep", "admins": 8000},
  {"month": "Oct", "admins": 9000},
  {"month": "Nov", "admins": 1000},
  {"month": "Dec", "admins": 11000}
]

const ClassificationData = [
  { "id": 0, "value": 40, "label": "Admin" },
  { "id": 1, "value": 30, "label": "User" },
  { "id": 2, "value": 25, "label": "Moderator" }
]

export default function AdminGrowth() {

  // const [data, setData] = useState([]);
  // const [ClassificationData, setClassificationData] = useState([]);

  // async function getData() {
  //   try {
  //     const response = await axios.get('public/data/adminGrowth.json');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // async function getClassification() {
  //   try {
  //     const response = await axios.get('public/data/adminsClassification.json');
  //     setClassificationData(response.data);
  //     console.log(ClassificationData)
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  useEffect(() => {
    // getClassification()
  }, []);
  return (
    <div className='container flex flex-col md:flex-row flex-wrap justify-center gap-7 my-7'>
      <motion.div
        className='bg-white p-6 rounded-md shadow-md w-fit '
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h1 className='my-6 text-2xl'>Admins Growth</h1>
        <LineChart width={400} height={250} data={adminGrowth}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='admins' stroke="#ff0000" />
        </LineChart>
      </motion.div>
      <motion.div className='bg-white p-6 rounded-md shadow-md '
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}>
          <h1 className='my-6 text-2xl'>Admins Classification</h1>
        <PieChart
  series={[
    {
      data: ClassificationData,
    },
  ]}
  width={400}
  height={250}
/>
      </motion.div>
    </div>
  )
}
