import React from 'react'

export default function CartItems(props) {
  return (
    <div className="flex flex-row justify-between border-b border-gray-800 py-2 gap-14">
      <h4 className="font-semibold text-sm">{props.title}</h4>
      <h4 className="font-semibold text-sm">IDR. {props.price}</h4>
    </div>
  )
}
