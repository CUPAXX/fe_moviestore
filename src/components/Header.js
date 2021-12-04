import React from 'react'

export default function Header() {
    return (
        <div>
          <header className=" bg-purple-900 flex justify-between items-center py-5 px-14">
            <div>
              <h5 className=" text-lg md:text-xl font-bold text-white">My Movie</h5>
            </div>
            <nav className="flex flex-row gap-8 items-center">
              <div to="/" className=" text-md  text-gray-300 hover:text-yellow-600 cursor-pointer font-semibold ">Home</div>
              <div to="/list-job" className=" text-md  text-gray-300 hover:text-yellow-600 cursor-pointer font-semibold ">Movie List</div>
              <div to="/list-job" className=" text-md  text-gray-300 hover:text-yellow-600 cursor-pointer font-semibold ">Membership</div>
              <div to="/list-job" className=" text-md  text-gray-300 hover:text-yellow-600 cursor-pointer font-semibold ">Your Chart</div>
              <div to="/list-job" className=" text-md  text-gray-300 hover:text-yellow-600 cursor-pointer font-semibold ">History</div>
            </nav>
            <nav>
              <div className="text-md bg-red-500 text-white font-semibold py-1 px-5 rounded-md">Login</div>
            </nav>
          </header>
        </div>
    )
}
