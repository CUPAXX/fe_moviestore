import React from 'react'
import {BsCheck} from 'react-icons/all'

export default function Subscription(props) {
  return (
      <div className=" bg-white transition duration-500 ease-in-out transform border-2 hover:border-purple-900 hover:-translate-y-1 hover:scale-140 py-8 px-8 flex flex-col items-center gap-10 rounded-2xl">
        <h2 className="font-bold text-2xl text-gray-900 tracking-wider">{props.title}</h2>
        <h3 className="text-3xl -mt-5 font-semibold text-green-500">IDR. {props.price}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between gap-5">
            <h4 className=" text-sm font-semibold text-gray-800">Lorem ipsum dit ma  : </h4>
            <h4 className="font-semibold text-gray-800 text-sm">{props.feature1}</h4>
          </div>
          <div className="flex flex-row items-center justify-between gap-5">
            <h4 className=" text-sm font-semibold text-gray-800">Lorem ipsum  : </h4>
            <h4 className="font-semibold text-gray-800 text-sm">{props.feature2}</h4>
          </div>
          <div className="flex flex-row items-center justify-between gap-5">
            <h4 className=" text-sm font-semibold text-gray-800">Lorem ipsum dit maet : </h4>
            <h4 className="font-semibold text-gray-800 text-sm">{props.feature3}</h4>
          </div>
          <div className="flex flex-row items-center justify-between gap-5">
            <h4 className=" text-sm font-semibold text-gray-800">Lorem ipsum dit maet dolor sit : </h4>
            <h4 className="font-semibold text-gray-800 text-sm">{props.feature4}</h4>
          </div>
        </div>
        <div onClick={props.click} className="bg-red-500 text-white font-semibold py-2 px-8 text-sm text-center rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140">Buy Now</div>
      </div>
  )
}
