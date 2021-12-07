import React, { Component } from 'react'
import avenger from '../assets/avenger.jpg'
import { connect } from 'react-redux'
import { getDetailMovie } from '../redux/actions/movie'
import { addItems } from '../redux/actions/carts'
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env

class DetailMovie extends Component {
  state = {
    movie: {}
  }
  componentDidMount = () => {
    this.props.getDetailMovie(this.props.match.params.id)
  }

  addItem = () => {
    const data = {
      id: this.props.movie.dataDetailMovie.id,
      title: this.props.movie.dataDetailMovie.title,
      price: this.props.movie.dataDetailMovie.price
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
      if (result.isConfirmed) {
        this.props.addItems(data)
        Swal.fire(
          'Added!',
          'Item Added to Your Cart!',
          'success'
        )
      }
    })
  }
  render() {
    const {dataDetailMovie} = this.props.movie
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
          <div onClick={this.addItem} className=" cursor-pointer text-center text-white bg-red-500 px-14 py-3 font-semibold rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140">Add To Chart</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movie
})

const mapDispatchToProps = { getDetailMovie, addItems }

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)