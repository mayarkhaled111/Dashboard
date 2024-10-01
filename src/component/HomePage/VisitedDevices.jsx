import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

export default function VisitedDevices() {
    let [accessData, setAccessData] = useState([])

    async function getAccessData() {
        try {
            const response = await axios.get('src/data/accessData.json');
            setAccessData(response.data);
            console.log(accessData);


        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getAccessData()
    }, [])
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
