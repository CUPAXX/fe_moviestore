import React from 'react'
import {BsCheck} from 'react-icons/all'

export default function Subscription() {
  return (
    <div className=" flex flex-col items-center gap-6">
      <div className=" bg-white py-8 px-8 flex flex-col items-center gap-5 rounded-md">
        <h2 className="font-bold text-2xl">Regular</h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-center items-center gap-3">
            <BsCheck size={20} className="text-red-500" />
            <h4 className=" text-sm">Lorem ipsum dit maet</h4>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <BsCheck size={20} className="text-red-500" />
            <h4 className=" text-sm">Lorem ipsum dit maet</h4>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <BsCheck size={20} className="text-red-500" />
            <h4 className=" text-sm">Lorem ipsum dit maet</h4>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <BsCheck size={20} className="text-red-500" />
            <h4 className=" text-sm">Lorem ipsum dit maet</h4>
          </div>
        
        </div>
      </div>
      <div className="bg-red-500 text-white font-semibold py-2 px-8 text-sm text-center rounded-lg">Buy Now</div>
    </div>
  )
}
