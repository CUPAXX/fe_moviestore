import React, { Component } from 'react'
import Subscription from '../components/Subscription'
import { connect } from 'react-redux'
import { getMembership } from '../redux/actions/membership'

class Membership extends Component {
  componentDidMount = () => {
    this.props.getMembership()
  }
  render() {
    const {dataMembership} = this.props.membership
    return (
      <div className=" bg-gray-200 justify-center items-center flex flex-row px-14 gap-10 py-20">
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
    )
  }
}

const mapStateToProps = state => ({
 membership: state.membership
})

const mapDispatchToProps = { getMembership }

export default connect(mapStateToProps, mapDispatchToProps)(Membership)
