import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

function Model() {
  return (
    <div>
        <div className='absolute inset-x-0 top-[15%] text-center'>
            <h1 className='text-4xl font-bold'>
                Model 3
            </h1>
            <p className='p-2 text-sm'>
                Order Online for <span className='underline underline-offset-4'><a href="https://www.tesla.com/model3/design#overview" >Touchless Delivery</a></span>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
            <button className="bg-[#393c41] text-white rounded-md w-96 lg:w-64 lg:mx-4 h-10"><a href="https://www.tesla.com/modely/design" >Custom Order</a></button>
            <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2"><a href="https://www.tesla.com/inventory/new/my">Existing Inventory</a></button>
        </div>
        <div className="flex justify-center animate-bounce inset-x-0 absolute bottom-[3%]">
            <FiChevronDown size={24}/>

        </div>
    </div>
  )
}

export default Model