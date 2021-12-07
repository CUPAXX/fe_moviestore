import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/CartItems'
import empty from '../assets/empty.png'
import { createTransaction } from '../redux/actions/transaction'
import Swal from 'sweetalert2'

class Yourchart extends Component  {
  state = {
    total: 0,
    load: []
  }

  componentDidMount = () => {
    if (this.props.carts.items.length > 0) {
      this.loadTotal()
      this.loadData()
    } else {
      this.setState({
        total: 0
      });
    }
  }

  loadData = () => {
    this.setState({
      load: this.props.carts.items
    })
  }

  onPayment = () => {
    const title = this.state.load.map((i) => {
      return i.title
    })
    const finalData = {
      token: this.props.auth.token,
      item: title,
      total: this.state.total
    }
    Swal.fire({
      title: 'Do You Ready to Pay?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Go!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.createTransaction(finalData)
        Swal.fire(
          'Added!',
          'Transaction Successfully!',
          'success'
        )
      }
    })
  }

  loadTotal = () => {
    const reducer = this.props.carts.items.map((e, idx) => e.price).reduce((prev, next) => prev + next)
    this.setState({
      total: reducer
    })
  }

  render() {
    const {items} = this.props.carts
    return (
      <div className="bg-gray-200 flex flex-col items-center py-20 px-14">
        {items.length > 0 ? (
          <div className="flex flex-col gap-8">
            <div className="bg-white flex flex-col shadow-xl rounded-md py-10 px-10 text-center gap-14">
              <h3 className="font-bold text-4xl text-red-500">Your Chart</h3>
              <div className="flex flex-col gap-3">
                {items.map(item => (
                  <CartItems key={item.id} title={item.title} price={item.price} />
                ))}
              </div>
              <div className="flex flex-row gap-14 justify-between items-center">
                <h3 className="font-semibold text-2xl text-green-500">Total Price</h3>
                <h3 className="font-semibold text-xl text-green-500">IDR. {this.state.total}</h3>
              </div>
            </div>
            <div onClick={this.onPayment} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120 bg-red-500 px-10 py-2 text-center text-white font-semibold rounded-md cursor-pointer">Pay Now</div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={empty} className=" max-h-60" alt="empty" />
            <h4 className=" font-semibold tracking-wider text-2xl text-gray-700">You don't Have Any Items In Cart</h4>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carts: state.carts,
  transaction: state.transaction,
  auth: state.auth,
})

const mapDispatchToProps = { createTransaction }

export default connect(mapStateToProps, mapDispatchToProps)(Yourchart)