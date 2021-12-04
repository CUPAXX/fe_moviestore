import React, { Component } from 'react'
import avenger from '../assets/avenger.jpg'

export default class DetailMovie extends Component {
  render() {
    return (
      <div className="bg-gray-200 px-14 py-16 flex flex-col gap-12">
        <div className="flex flex-row gap-16">
          <div className="flex justify-center">
            <img src={avenger} className=" max-w-sm max-h-96 rounded-md shadow-xl" alt="poster detail" />
          </div>
          <div className="bg-white flex flex-col items-center py-8 px-8 gap-10 rounded-md">
            <h3 className="font-semibold text-3xl text-red-500 ">Sinopsis</h3>
            <div>
              <h4 className="text-justify text-sm text-gray-700 break-words">Avengers: Endgame adalah film pahlawan super Amerika 2019 yang didasarkan pada tim superhero Avengers dari Marvel Comics, diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures. Ini adalah sekuel The Avengers 2012, film 2015 Avengers: Age of Ultron dan film 2018 Avengers: Infinity War, dan film kedua puluh dua di Marvel Cinematic Universe (MCU). Film ini disutradarai oleh Anthony dan Joe Russo, yang ditulis oleh Christopher Markus dan Stephen McFeely, dan menampilkan pemeran ansambel termasuk Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, dan Josh Brolin. Dalam film itu, anggota Avengers yang masih hidup dan sekutu mereka berusaha untuk membalikkan kerusakan yang disebabkan oleh Thanos dalam Infinity War.</h4>
              </div>
          </div>
        </div>
        <div className="text-center text-white bg-red-500 px-14 py-3 font-semibold rounded-md">Add To Chart</div>
      </div>
    )
  }
}
