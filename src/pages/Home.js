import React, { Component } from 'react'
import {AiOutlineUser, BiSearchAlt, BiTrophy} from 'react-icons/all'
import companyLogo from '../assets/companyLogo.jpg'
import Subscription from '../components/Subscription'
import { connect } from 'react-redux'
import { getMembership } from '../redux/actions/membership'

class Home extends Component {
  
  componentDidMount = () => {
    this.props.getMembership()
  }
  
  render() {
    const {dataMembership} = this.props.membership
    return (
      <div>
        <section className="bg-home flex flex-col">
          <section className="flex flex-col justify-center gap-10 px-14 mt-36">
            <div className="text-white font-semibold text-3xl lg:text-5xl">Home Cinema</div>
            <h4 className=" text-gray-400 text-sm w-5/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                metus effici turac fringilla lorem facilisis, consectetur adipiscing elit ellentesque dignissim quam et, consectetur adipiscing elit ellentesque dignissim quam et</h4>
            <a href="#how-it-work" className=" bg-red-500 w-1/6 justify-center text-sm  py-2 rounded-lg flex text-white font-semibold">Let's start</a>
          </section>
        </section>
        <section id="how-it-work" className="flex flex-col justify-center items-center py-24 mx-8 md:mx-16 pb-8">
            <div className="flex flex-col gap-3 pb-12 items-center text-center max-w-2xl">
              <h5 className="text-4xl font-semibold text-gray-800 tracking-wider">How It Works?</h5>
              <h5 className=" text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                metus effici turac fringilla lorem facilisis.</h5>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <div className="flex flex-col items-center gap-3 max-w-xs text-center">
                <AiOutlineUser size={45} className=" text-red-500"/>
                <p className=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                metus effici turac fringilla lorem facilisis.</p>
              </div>
              <div className="flex flex-col items-center gap-3 max-w-xs text-center">
                <BiSearchAlt size={45} className=" text-red-500"/>
                <p className=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                metus effici turac fringilla lorem facilisis.</p>
              </div>
              <div className="flex flex-col items-center gap-3 max-w-xs text-center">
                <BiTrophy size={45} className=" text-red-500"/>
                <p className=" text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et
                metus effici turac fringilla lorem facilisis.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center py-24">
            <div className="flex flex-col gap-3 pb-12 text-center">
              <h5 className="text-4xl font-semibold text-gray-800 tracking-wider">Join Our Subscription</h5>
              <h5 className=" text-gray-400">thousand benefit inside membership!</h5>
            </div>
            <div className="flex flex-row justify-center  w-8/12">
              <div className="flex flex-row gap-14 lg:gap-14">
                {dataMembership.map(member => (
                  <Subscription 
                    key={member.id}
                    title={member.title}
                    price={member.price}
                    feature1={member.feature1}
                    feature2={member.feature2}
                    feature3={member.feature3}
                    feature4={member.feature4}
                  />
                ))}
              </div>
              
            </div>
          </section>

          {/* section patner */}
          <section className=" bg-white grid md:grid-cols-2 grid-cols-1 px-8 md:px-16 py-24 gap-8 justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl font-bold text-gray-700 text-center md:text-left">We Are Trusted by Popular Company</h4>
              <h5 className="text-3xl font-bold text-red-500 md:flex hidden">800+ Company</h5>
              <p className="text-gray-500 text-justify leading-10 lg:flex hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore tempor incididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={companyLogo}  alt="company logo" className=" w-10/12"/>
            </div>
          </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  membership: state.membership
 })
 
 const mapDispatchToProps = { getMembership }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home)