import React from 'react'
import { motion } from 'framer-motion'
import { PieChart } from '@mui/x-charts/PieChart';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";

const revenueData = [
  {"month":"Jan", "revenue":5000 , "target":1800 },
  {"month":"Feb", "revenue":3000 , "target":8200 },
  {"month":"Mar", "revenue":3000 , "target": 7500},
  {"month":"Apr", "revenue":4500 , "target": 4200},
  {"month":"May", "revenue":9000 , "target": 5500},
  {"month":"Jun", "revenue":4500 , "target": 2800},
  {"month":"Jul", "revenue":1000 , "target": 8500}
]

const categoriesData = [
  { "id": 0, "value": 10, "label": "Phones" ,"color":"#2865EB"},
  { "id": 1, "value": 30, "label": "Clothes", "color":"#C68FE6"},
  { "id": 2, "value": 20, "label": "Laptops", "color":"#FFF7F7"},
  { "id": 3, "value": 20, "label": "Beauty" , "color":"#6C48C5"},
  { "id": 4, "value": 20, "label": "Home" , "color":"#C96868"},
  { "id": 5, "value": 20, "label": "Books" , "color":"#1230AE"}
]

export default function SalesChart() {

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
