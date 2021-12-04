import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="bg-gray-200 flex justify-center px-14 py-20">
        <div className="flex flex-col bg-white w-96 px-10 py-10 gap-16 rounded-md">
          <h3 className="font-bold text-3xl text-center">Welcome Back</h3>
          <form className="flex flex-col gap-4">
            <h3 className="font-semibold text-purple-900">Email : </h3>
            <input className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="email" placeholder="example@mail.com" />
            <h3 className="font-semibold text-purple-900" >Password : </h3>
            <input className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="password" placeholder="your password" />
            <NavLink to="/forgot" className="text-right text-sm cursor-pointer hover:text-red-500 font-semibold -mt-5">Forgot Your Password ?</NavLink>
            <button className=" bg-red-500 hover:bg-red-700 mt-4 py-2 rounded-lg text-white font-semibold" type="submit">Login</button>
          </form>
          <span className="text-center text-sm font-semibold">Not Have Account ?, <NavLink to="/register" className="text-sm text-red-500 hover:text-red-700">Create Here</NavLink></span>
        </div>
      </div>
    )
  }
}
