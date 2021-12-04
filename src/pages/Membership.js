import React, { Component } from 'react'
import Subscription from '../components/Subscription'

export default class Membership extends Component {
  render() {
    return (
      <div className=" bg-gray-200 grid grid-cols-4 gap-10 px-14 py-20">
        <Subscription />
        <Subscription />
        <Subscription />
        <Subscription />
        <Subscription />
        <Subscription />
      </div>
    )
  }
}
