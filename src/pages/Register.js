import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authRegister} from '../redux/actions/auth'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const Register = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const onRegister = (e) => {
    e.preventDefault()
    if(dispatch(authRegister(name, email, password))){
      Toast.fire({
        icon: 'success',
        title: 'Register successfully'
      })
      props.history.push('/login');
    }
  }
    return (
      <div className="bg-gray-200 flex justify-center px-14 py-20">
        <div className="flex flex-col bg-white w-96 px-10 py-10 gap-16 rounded-md">
          <h3 className="font-bold text-3xl text-center">Register</h3>
          <form onSubmit={onRegister} className="flex flex-col gap-4">
          <h3 className="font-semibold text-purple-900">Name : </h3>
            <input onChange={e => setName(e.target.value )} className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="text" placeholder="input your name" />
            <h3 className="font-semibold text-purple-900">Email : </h3>
            <input onChange={e => setEmail(e.target.value )} className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="email" placeholder="example@mail.com" />
            <h3 className="font-semibold text-purple-900" >Password : </h3>
            <input onChange={e => setPassword(e.target.value )} className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="password" placeholder="your password" />
            <button className=" bg-red-500 hover:bg-red-700 mt-4 py-2 rounded-lg text-white font-semibold" type="submit">Submit</button>
          </form>
          <span className="text-center text-sm font-semibold">Already Have Account ?, <NavLink to="/login" className="text-sm text-red-500 hover:text-red-700">Login Here</NavLink></span>
        </div>
      </div>
    )
}

export default Register