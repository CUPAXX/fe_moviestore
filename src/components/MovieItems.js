import React from 'react'

export default function MovieItems(props) {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-2">
        <img src={props.images} className=" bg-white shadow-2xl p-2 max-h-42 rounded-md" alt="poster" />
        <h4 className="text-xs font-semibold text-gray-600 text-center">{props.title}</h4>
      </div>
    </div>
  )
}
