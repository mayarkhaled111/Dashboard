import React from 'react'
import { PureComponent } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'week 1',
        Incoming: 40,
        Outgoing: 24,

    },
    {
        name: 'week 2',
        Incoming: 30,
        Outgoing: 18,
    },
    {
        name: 'week 3',
        Incoming: 60,
        Outgoing: 50,

    },
    {
        name: 'week 4',
        Incoming: 20,
        Outgoing: 38,
    },
    {
        name: 'week 5',
        Incoming: 10,
        Outgoing: 41,
    },
    {
        name: 'week 6',
        Incoming: 30,
        Outgoing: 25,
    },
    {
        name: 'week 7',
        Incoming: 30,
        Outgoing: 40,
    },
];

export default function OutgoingWeek() {
    return (
        <div className="container p-6 ">
            <motion.div className='bg-white p-5 h-[400px] rounded-md shadow-md' initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}>
                <h1 className='mb-5 text-2xl'>Outgoing vs Incoming Calls by Month</h1>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={100}
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
                    <Bar dataKey="Outgoing" fill="#3B82F6" activeBar={<Rectangle fill="pink" stroke="blue"/>} />
                    <Bar dataKey="Incoming" fill="#F97315" activeBar={<Rectangle fill="gold" stroke="purple"/>} />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
        </div>
    );
}
