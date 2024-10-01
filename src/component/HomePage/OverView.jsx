import axios from 'axios'
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react'

export default function OverView() {
    const [data, setData] = useState(null);
  
    async function getData() {
      try {
        const response = await axios.get('public/data/overview.json'); // Update the URL based on your setup
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
    return (
    <div className='container mt-7 '>
        <div className='flex gap-6 justify-center flex-wrap'>
        {data?.map(data=>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={data?.id} className='p-3 rounded-md shadow-md bg-white text-center md:w-1/6 w-full'>
                <div><i className={`fa-solid fa-${data?.icon} fa-xl` } style={{color:'#2865EB'}}></i> 
                <h1 className='text-sm text-gray-500 my-3'>{data?.title}</h1></div>
                <p className=' text-3xl'>{data?.number}</p>
            </motion.div>
        )}
        </div>
    </div>
  )
}
