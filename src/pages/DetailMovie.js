/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailMovie } from '../redux/actions/movie'
import { addItems } from '../redux/actions/carts'
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env

const DetailMovie = (props) => {
  const {dataDetailMovie} = useSelector(state => state.movie)
  const {token} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailMovie(props.match.params.id))
  }, [])

  const addItem = () => {
    const data = {
      id: dataDetailMovie.id,
      title: dataDetailMovie.title,
      price: dataDetailMovie.price
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
      <div className="bg-gray-200 px-14 py-16 flex flex-col gap-8">
        <div className="flex flex-row gap-16">
          <div className="flex justify-center">
            <img src={`${URL}${dataDetailMovie.picture}`} className=" max-w-sm max-h-96 rounded-md shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140" alt="poster detail" />
          </div>
          <div className="bg-white flex flex-col items-center py-8 px-8 gap-10 rounded-md">
            <h3 className="font-semibold text-3xl text-red-500 ">Sinopsis</h3>
            <div>
              <h4 className="text-justify text-sm text-gray-700 break-words">{dataDetailMovie.description}</h4>
              </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-2xl font-bold text-red-500">{dataDetailMovie.title}</h3>
          <h3 className="text-2xl font-bold text-green-600">Price: {dataDetailMovie.price} IDR</h3>
          <div onClick={addItem} className=" cursor-pointer text-center text-white bg-red-500 px-14 py-3 font-semibold rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140">Add To Chart</div>
        </div>
      </div>
    )
}

export default DetailMovie