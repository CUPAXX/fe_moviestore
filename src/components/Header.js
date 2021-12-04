import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
          <header className=" bg-purple-900 flex justify-between items-center py-5 px-14">
            <div>
              <h5 className=" text-lg md:text-xl font-bold text-white">My Movie</h5>
            </div>
            <nav className="flex flex-row gap-8 items-center">
              <Link to="/" className=" text-md  text-white hover:text-red-500 font-semibold ">Home</Link>
              <Link to="/movie" className=" text-md  text-white hover:text-red-500 font-semibold ">Movie List</Link>
              <Link to="/membership" className=" text-md  text-white hover:text-red-500 font-semibold ">Membership</Link>
              <Link to="/yourchart" className=" text-md  text-white hover:text-red-500 font-semibold ">Your Chart</Link>
              <Link to="/history" className=" text-md  text-white hover:text-red-500 font-semibold ">History</Link>
            </nav>
            <nav>
              <Link to="/login" className="text-md bg-red-500 text-white font-semibold py-2 px-8 rounded-md">Login</Link>
            </nav>
          </header>
        </div>
    )
}
