import React from 'react'

export default function HistoryItems(props) {
  return (
    <div className="bg-white p-5 flex flex-col gap-6 rounded-md shadow-xl">
      <div className="flex justify-between flex-col">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-red-500 font-semibold text-xl">Code Transaction:</h3>
          <h3 className="text-red-500 font-semibold text-xl">{props.code}</h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-semibold text-green-500 text-lg">Tanggal:</h4>
          <h4 className="font-semibold text-green-500 text-lg">{props.tanggal}</h4>
        </div>
      </div>
      <div onClick={props.click} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120 bg-red-500 px-5 py-2 text-sm text-center text-white font-semibold rounded-md cursor-pointer">Detail</div>
    </div>
  )
}
