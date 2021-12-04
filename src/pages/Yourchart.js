import React from 'react'

export default function Yourchart() {
  return (
    <div className="bg-gray-200 flex flex-col items-center py-20 px-14">
      <div className="flex flex-col gap-8">
        <div className="bg-white flex flex-col shadow-xl rounded-md py-10 px-10 text-center gap-14">
          <h3 className="font-bold text-4xl text-red-500">Your Chart</h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between border-b border-gray-800 py-2 gap-14">
              <h4 className="font-semibold text-sm">Avenger End Game</h4>
              <h4 className="font-semibold text-sm">IDR. 25000</h4>
            </div>
            <div className="flex flex-row justify-between border-b border-gray-800 py-2 gap-14">
              <h4 className="font-semibold text-sm">Avenger</h4>
              <h4 className="font-semibold text-sm">IDR. 25000</h4>
            </div>
            <div className="flex flex-row justify-between border-b border-gray-800 py-2 gap-14">
              <h4 className="font-semibold text-sm">Avenger</h4>
              <h4 className="font-semibold text-sm">IDR. 25000</h4>
            </div>
          </div>
          <div className="flex flex-row gap-14 justify-between items-center">
            <h3 className="font-semibold text-2xl text-green-500">Total Price</h3>
            <h3 className="font-semibold text-xl text-green-500">IDR. 100000</h3>
          </div>
        </div>
        <div className="bg-red-500 px-10 py-2 text-center text-white font-semibold rounded-md">Pay Now</div>
      </div>
    </div>
  )
}
