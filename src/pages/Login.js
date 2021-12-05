import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authLogin } from '../redux/actions/auth'
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
class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onLogin = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.authLogin(email, password).then(() => {
      Toast.fire({
        icon: 'success',
        title: 'Login successfully'
      })
    })
    
  }

  componentDidUpdate = () => {
    const { token } = this.props.auth;
    if (token !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="bg-gray-200 flex justify-center px-14 py-20">
        <div className="flex flex-col bg-white w-96 px-10 py-10 gap-16 rounded-md">
          <h3 className="font-bold text-3xl text-center">Welcome Back</h3>
          <form onSubmit={this.onLogin} className="flex flex-col gap-4">
            <h3 className="font-semibold text-purple-900">Email : </h3>
            <input onChange={e => this.setState({ email: e.target.value })} className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="email" placeholder="example@mail.com" />
            <h3 className="font-semibold text-purple-900" >Password : </h3>
            <input onChange={e => this.setState({ password: e.target.value })} className="bg-gray-50  mb-5 px-5 py-2 rounded-lg border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparen text-purple-900" type="password" placeholder="your password" />
            <NavLink to="/forgot" className="text-right text-sm cursor-pointer hover:text-red-500 font-semibold -mt-5">Forgot Your Password ?</NavLink>
            <button className=" bg-red-500 hover:bg-red-700 mt-4 py-2 rounded-lg text-white font-semibold" type="submit">Login</button>
          </form>
          <span className="text-center text-sm font-semibold">Not Have Account ?, <NavLink to="/register" className="text-sm text-red-500 hover:text-red-700">Create Here</NavLink></span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { authLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Login)