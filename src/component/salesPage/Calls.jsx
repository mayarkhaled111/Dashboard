import React from 'react'

export default function Calls() {
  return (
    <div className='container'>
        <h1 className='text-3xl my-6 ms-5 text-blue-600'>Sales Report</h1>
        <hr></hr>
        <div className='my-6 flex justify-between flex-wrap w-full p-4'>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-orange-500 text-white text-center rounded-md shadow-md '>
                    <h1 className='text-xl'>Outgoing Calls</h1>
                    <p className='text-3xl my-3 font-bold'>101</p>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-blue-500 text-white text-center rounded-md shadow-md'>
                    <h1 className='text-xl'>Average Outgoing time</h1>
                    <p className='text-3xl my-3 font-bold'>0:00:09</p>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-green-500 text-white text-center rounded-md shadow-md '>
                    <h1 className='text-xl'>Incoming Calls</h1>
                    <p className='text-3xl my-3 font-bold'>4</p>
                </div>
            </div>
            <div className='w-full md:w-1/4 p-2'>
                <div className='p-4 bg-red-500 text-white text-center rounded-md shadow-md '>
                    <h1 className='text-xl'>Average Incoming time</h1>
                    <p className='text-3xl my-3 font-bold'>0:00:25</p>
                </div>
            </div>
        </div>
    </div>
  )
}
