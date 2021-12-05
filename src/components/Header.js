import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/all'
import { connect } from 'react-redux'
import {authLogout} from '../redux/actions/auth'

function Header(props) {
  const { token } = props.auth
  const [toggleLogout, setToggleLogout] = useState(false)

  const ToggleLogout = () => {
    if(toggleLogout !== true) {
      setToggleLogout(true)
    } else {
      setToggleLogout(false)
    }
  }

  const onLogout = () => {
    props.authLogout()
    setToggleLogout(false)
  }
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
            {token === null ? (
              <nav>
                <Link to="/login" className="text-md bg-red-500 text-white font-semibold py-2 px-8 rounded-md">Login</Link>
              </nav>
            ) : (
              <nav>
                <BsPersonCircle className="cursor-pointer text-white hover:text-red-500" onClick={ToggleLogout} size={30} />
                {toggleLogout !== false ? (
                  <button onClick={e => onLogout(e)} className="bg-purple-900 px-8 py-3 absolute right-0 top-16 text-white font-semibold hover:text-red-500">Logout</button>
                ) : (
                  <div></div>
                )}
              </nav>
            )}
          </header>
        </div>
    )
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {authLogout}

export default connect(mapStateToProps, mapDispatchToProps)(Header)