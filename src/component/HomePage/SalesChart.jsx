import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart } from '@mui/x-charts/PieChart';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";
import axios from 'axios';

export default function SalesChart() {
  const [revenueData, setRevenueData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);


  // function to get data of revenue
  async function getRevenueData() {
    try {
      const response = await axios.get('src/data/revenueData.json');
      setRevenueData(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // function to get data of categories
  async function getCategoriesData() {
    try {
      const response = await axios.get('src/data/categoriesData.json');
      setCategoriesData(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getRevenueData();
    getCategoriesData()
  }, []);

  return (
    <div className="container flex flex-col md:flex-row flex-wrap justify-center gap-7 my-7">
      <motion.div
        className="bg-white p-6 rounded-md shadow-md w-full md:w-[45%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">Revenue Vs Target</h2>
        </div>
        <div className="w-full h-80 flex justify-between items-center">
          <LineChart width={400} height={250} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="target" stroke="#82ca9d" />
          </LineChart>
        </div>
      </motion.div>

      <motion.div className='bg-white p-6 rounded-md shadow-md w-full md:w-[45%]'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}>
        <h1 className='text-2xl mb-12'>Category Distribution</h1>
        <div className=" flex justify-center items-center">
          <PieChart
            series={[
              {
                data: categoriesData,
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </motion.div>
    </div>

  )
}
