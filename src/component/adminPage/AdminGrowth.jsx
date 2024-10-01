import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CartesianGrid, ResponsiveContainer, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { motion } from 'framer-motion';
 import { PieChart } from '@mui/x-charts/PieChart';


export default function AdminGrowth() {

  const [data, setData] = useState([]);
  const [ClassificationData, setClassificationData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get('src/data/adminGrowth.json');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function getClassification() {
    try {
      const response = await axios.get('src/data/adminsClassification.json');
      setClassificationData(response.data);
      console.log(ClassificationData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
    getClassification()
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
        <LineChart width={400} height={250} data={data}
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
