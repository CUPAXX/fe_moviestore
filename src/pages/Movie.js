import React, { Component } from 'react'
import avenger from '../assets/avenger.jpg'
import transformers from '../assets/transformers.jpg'
import MovieItems from '../components/MovieItems'

export default class Movie extends Component {
  render() {
    return (
      <div className="bg-gray-200 flex flex-row gap-10 px-14 py-10 w-full h-full">
        <div className=" flex flex-col gap-5">
          <h3 className="font-semibold text-2xl">Category</h3>
          <div className="bg-white w-60 shadow-xl">
            <div className="bg-white border-b-2 border-gray-300 hover:bg-red-400 px-5 py-3">
              <h4 className=" font-semibold">Horror</h4>
            </div>
            <div className="bg-white border-b-2 border-gray-300 hover:bg-red-400 px-5 py-3">
              <h4 className=" font-semibold">Action</h4>
            </div>
            <div className="bg-white  hover:bg-red-400 px-5 py-3">
              <h4 className=" font-semibold">Thiller</h4>
            </div>
          </div>
        </div>

        <div className=" flex flex-1 flex-col items-center gap-4">
          <div className=" grid grid-cols-6 w-full gap-8 p-10">
            <MovieItems images={avenger} title="Avenger End Game" />
            <MovieItems images={transformers} title="Transformers The Last Stand" />
            <MovieItems images={avenger} title="Avenger End Game" />
            <MovieItems images={transformers} title="Transformers The Last Stand" />
            <MovieItems images={avenger} title="Avenger End Game" />
            <MovieItems images={transformers} title="Transformers The Last Stand" />
            <MovieItems images={avenger} title="Avenger End Game" />
            <MovieItems images={transformers} title="Transformers The Last Stand" />
          </div>
          <div className="flex flex-row gap-4">
            <div className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md">Prev</div>
            <div className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md">Next</div>
          </div>
        </div>
        
      </div>
    )
  }
}
