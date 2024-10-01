import React from 'react'

export default function Coasts() {
  return (
    <div className='container'>
        <h1 className='text-3xl my-6 ms-5 text-blue-600'>Marketing</h1>
        <hr></hr>
        <div className='my-6 flex justify-between flex-wrap w-full p-4'>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-white rounded-md shadow-md '>
                    <p className='text-gray-400 text-sm'>Ad Spend</p>
                    <p className='text-4xl mt-3 font-bold'>65.37$</p>
                    <span style={{color: '#1aea63'}}><i className="fa-solid fa-arrow-down" style={{color: '#1aea63'}}/> 170%</span>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-white rounded-md shadow-md '>
                    <p className='text-gray-400 text-sm'>Coast Per Thousand</p>
                    <p className='text-4xl mt-3 font-bold'>3.94$</p>
                    <span style={{color: '#1aea63'}}><i className="fa-solid fa-arrow-down" style={{color: '#1aea63'}}/> $0.45</span>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-white rounded-md shadow-md '>
                    <p className='text-gray-400 text-sm'>Coast Per Click</p>
                    <p className='text-4xl mt-3 font-bold'>0.15$</p>
                    <span style={{color: '#1aea63'}}><i className="fa-solid fa-arrow-down" style={{color: '#1aea63'}}/> $0.02</span>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-white rounded-md shadow-md '>
                    <p className='text-gray-400 text-sm'>Click-Through Rate</p>
                    <p className='text-4xl mt-3 font-bold'>2.89$</p>
                    <span style={{color: '#1aea63'}}><i className="fa-solid fa-arrow-up" style={{color: '#1aea63'}}/> 7%</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}
