import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteProducts, getProducts } from '../productsData'
import { useEffect } from 'react'
import BasicModal from './BasicModal'
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios'
import WorldMap from './WorldMap'

export default function Products() {
    let { data } = useQuery({ queryKey: ['products'], queryFn: getProducts })
    let [products, setProducts] = useState([])
    let [bestSeller, setBestSeller] = useState([])
    let { mutate: deleteProduct } = useMutation(deleteProducts)

    async function getBestSeller() {
        try {
            const response = await axios.get('src/data/bestSeller.json');
            setBestSeller(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        setProducts(data?.data?.products);
        console.log(products);
        getBestSeller()
    }, [data])
    return (
        <div className='container mb-7'>
            <h1 className='text-3xl my-6 ms-5 text-blue-600'>Products</h1>
            <hr />
            <BasicModal></BasicModal>
            <motion.div
                className="relative shadow-md rounded-md overflow-scroll w-full h-[400px] my-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <table className="relative text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto w-full">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky w-full top-0">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Rate</th>
                            <th scope="col" className="px-6 py-3">Stock</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length > 0 ? (
                            products.map((prod) => (
                                <tr key={prod?.id} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <td className="p-4 flex justify-center items-center">
                                        <img src={prod?.images[0]} alt="" className="w-10 h-10 rounded-full" />
                                    </td>
                                    <td>{prod?.category}</td>
                                    <td>{prod?.title?.slice(0, 20)}...</td>
                                    <td>{prod?.rating} <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} /></td>
                                    <td>{prod?.stock}</td>
                                    <td>{prod?.price}$</td>
                                    <td className='flex gap-2 justify-center'>
                                        <i className="fa-solid fa-gear fa-xl cursor-pointer" style={{ color: '#4074ce' }} /><i className="fa-regular fa-circle-xmark fa-xl cursor-pointer" style={{ color: '#cd3232' }} onClick={() => { deleteProduct(prod?.id) }} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-red-600 text-2xl my-4">No results found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </motion.div>
            <motion.div className='bg-white p-6 rounded-md shadow-md w-full mb-4 '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <h1 className='text-2xl mb-12'>Best Seller</h1>
                <div className=" flex justify-between items-center">
                    <PieChart
                        series={[
                            {
                                data: bestSeller,
                            },
                        ]}
                        width={700}
                        height={200}
                    />
                </div>
            </motion.div>
            <h1 className='text-2xl my-4'>Global Sale By Top Locations</h1>
            <WorldMap></WorldMap>
        </div>
    )
}
