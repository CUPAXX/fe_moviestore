import React, { Component } from 'react'
import avenger from '../assets/avenger.jpg'
import { connect } from 'react-redux'
import { getDetailMovie } from '../redux/actions/movie'
const { REACT_APP_BACKEND_URL: URL } = process.env

class DetailMovie extends Component {
  componentDidMount = () => {
    this.props.getDetailMovie(this.props.match.params.id)
  }
  render() {
    const {dataDetailMovie} = this.props.movie
    console.log(dataDetailMovie)
    return (
      <div className="bg-gray-200 px-14 py-16 flex flex-col gap-8">
        <div className="flex flex-row gap-16">
          <div className="flex justify-center">
            <img src={`${URL}${dataDetailMovie.picture}`} className=" max-w-sm max-h-96 rounded-md shadow-xl" alt="poster detail" />
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
          <div className="text-center text-white bg-red-500 px-14 py-3 font-semibold rounded-md">Add To Chart</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movie
})

const mapDispatchToProps = { getDetailMovie }

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)