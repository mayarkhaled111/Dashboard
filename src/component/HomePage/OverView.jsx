import axios from 'axios'
import { motion } from "framer-motion"

const overView = [
  {
    "id" : 1,
    "title" : "Total Sales",
    "number" : "$12,195",
    "icon" : "wave-square"
  },
  {
    "id" : 2,
    "title" : "New Users",
    "number" : "1,194",
    "icon" : "user"
  },
  {
    "id" : 3,
    "title" : "Total Products",
    "number" : "600",
    "icon" : "bag-shopping"
  },
  {
    "id" : 4,
    "title" : "Conversion Rate",
    "number" : "15.5%",
    "icon" : "chart-simple"

  },
  {
    "id" : 5,
    "title": "Customer Satisfaction",
    "number": "94%",
    "icon" : "person"
  }
]
export default function OverView() {
    return (
    <div className='container mt-7 '>
        <div className='flex gap-6 justify-center flex-wrap'>
        {overView?.map(data=>
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
