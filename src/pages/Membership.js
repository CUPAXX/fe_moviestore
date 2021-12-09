/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Subscription from '../components/Subscription'
import { useDispatch, useSelector } from 'react-redux'
import { getMembership } from '../redux/actions/membership'
import { addItems } from '../redux/actions/carts'
import Swal from 'sweetalert2'

const Membership = (props) => {
  const {dataMembership} = useSelector(state => state.membership)
  const {token} = useSelector(state => state.auth)
  const [load, setLoad] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    if(dispatch(getMembership())){
      setLoad(dataMembership)
    }
  }

  const addItem = (index) => {
    const price = load.map((i) => {
      return i.price
    })
    const id = load.map((i) => {
      return i.id
    })
    const title = load.map((i) => {
      return i.title
    })
    const data = {
      id: id[index],
      title: `Membership: ${title[index]}`,
      price: price[index]
    }
    Swal.fire({
      title: 'Add This Item to Your Cart?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if(token === null){
        Swal.fire(
          'Error!',
          'You Need To Login First!',
          'error'
        )
      } else {
        if (result.isConfirmed) {
          dispatch(addItems(data))
          Swal.fire(
            'Added!',
            'Item Added to Your Cart!',
            'success'
          )
        }
      }
    })
  }
    return (
      <div className=" bg-gray-200 justify-center items-center flex flex-row px-14 gap-10 py-20">
        {dataMembership.map((member, index) => (
          <Subscription 
            key={member.id}
            title={member.title}
            price={member.price}
            feature1={member.feature1}
            feature2={member.feature2}
            feature3={member.feature3}
            feature4={member.feature4}
            click={() => addItem(index)}
          />
        ))}
      </div>
    )
}

export default Membership
