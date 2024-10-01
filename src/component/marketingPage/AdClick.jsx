import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'; 

const data = [
    {
        name: 'Jun',
        Spend: 40,
        Coast: 24,

    },
    {
        name: 'Feb',
        Spend: 30,
        Coast: 18,
    },
    {
        name: 'Mar',
        Spend: 60,
        Coast: 50,

    },
    {
        name: 'Apr',
        Spend: 20,
        Coast: 38,
    },
    {
        name: 'May',
        Spend: 10,
        Coast: 41,
    },
    {
        name: 'Jun',
        Spend: 30,
        Coast: 25,
    },
    {
        name: 'Jul',
        Spend: 30,
        Coast: 40,
    },
    {
        name: 'Aug',
        Spend: 30,
        Coast: 40,
    },
    {
        name: 'Sep',
        Spend: 30,
        Coast: 40,
    },
];
export default function AdClick() {
    return (
        <div className='container p-6'>
            <motion.div className='h-[400px] bg-white p-4 rounded-md shadow-md' 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}>
            <h1 className='mb-5 text-2xl'>Ad Click</h1>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Spend" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Coast" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            </motion.div>
        </div>
    )
}
