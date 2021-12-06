import React from 'react'

export default function MovieItems(props) {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img src={props.images} className=" bg-white shadow-xl p-2 max-h-44 rounded-md" alt="poster" />
        <h4 className="text-sm font-semibold text-gray-800 text-center">{props.title}</h4>
      </div>
    </div>
  )
}
