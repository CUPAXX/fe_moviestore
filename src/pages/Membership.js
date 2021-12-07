import React, { Component } from 'react'
import Subscription from '../components/Subscription'
import { connect } from 'react-redux'
import { getMembership } from '../redux/actions/membership'
import { addItems } from '../redux/actions/carts'
import Swal from 'sweetalert2'

class Membership extends Component {
  state = {
    load: []
  }
  componentDidMount = () => {
    this.loadData()
  }

  loadData = () => {
    this.props.getMembership().then(() => {
      this.setState({
        load: this.props.membership.dataMembership
      })
    })
  }

  addItem = (index) => {
    const price = this.state.load.map((i) => {
      return i.price
    })
    const id = this.state.load.map((i) => {
      return i.id
    })
    const title = this.state.load.map((i) => {
      return i.title
    })
    const data = {
      id: id[index],
      title: `Membership: ${title[index]}`,
      price: price[index]
    }
    Swal.fire({
      title: 'Add This Item to Your Cart?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.addItems(data)
        Swal.fire(
          'Added!',
          'Item Added to Your Cart!',
          'success'
        )
      }
    })
  }

  render() {
    const {dataMembership} = this.props.membership
    return (
      <div className=" bg-gray-200 justify-center items-center flex flex-row px-14 gap-10 py-20">
        {dataMembership.map((member, index) => (
          <Subscription 
            key={member.id}
            title={member.title}
            price={member.price}
            feature1={member.feature1}
            feature2={member.feature2}
            feature3={member.feature3}
            feature4={member.feature4}
            click={() => this.addItem(index)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
 membership: state.membership
})

const mapDispatchToProps = { getMembership, addItems }

export default connect(mapStateToProps, mapDispatchToProps)(Membership)
