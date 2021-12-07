import React from 'react'

export default function CategoryItems(props) {
  return (
    <div onClick={props.click} className="bg-white border-b-2 cursor-pointer border-gray-300 hover:bg-red-400 px-5 py-3">
      <h4 className=" font-semibold">{props.name}</h4>
    </div>
  )
}
