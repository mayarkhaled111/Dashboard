import React from 'react'
import { PureComponent } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Month 1',
        Incoming: 40,
        Outgoing: 24,

    },
    {
        name: 'Month 2',
        Incoming: 30,
        Outgoing: 18,
    },
    {
        name: 'Month 3',
        Incoming: 60,
        Outgoing: 50,

    },
    {
        name: 'Month 4',
        Incoming: 20,
        Outgoing: 38,
    },
    {
        name: 'Month 5',
        Incoming: 10,
        Outgoing: 41,
    },
    {
        name: 'Month 6',
        Incoming: 30,
        Outgoing: 25,
    },
    {
        name: 'Month 7',
        Incoming: 30,
        Outgoing: 40,
    },
];

export default function OutgoingMonth() {
    return (
        <div className="container p-6">
            <motion.div className='bg-white p-5 h-[400px] rounded-md shadow-md' initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}>
                <h1 className='mb-5 text-2xl'>Outgoing vs Incoming Calls by week</h1>
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
                    <Bar dataKey="Outgoing" fill="#EF4444" activeBar={<Rectangle fill="pink" stroke="blue"/>} />
                    <Bar dataKey="Incoming" fill="#35C55E" activeBar={<Rectangle fill="gold" stroke="purple"/>} />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
        </div>
    );
}
