import React, { Component } from 'react'
import HistoryItems from '../components/HistoryItems'
import { connect } from 'react-redux'
import { getHistory, getDetailHistory } from '../redux/actions/transaction'
import {RiCloseCircleFill} from 'react-icons/all'
class History extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  onLoad = () => {
    const {token} = this.props.auth
    this.props.getHistory(token)
  }

  componentDidMount = () => {
    this.onLoad()
  }
  onDetail = (id) => {
    const finalData = {
      id: id,
      token: this.props.auth.token
    }
    this.props.getDetailHistory(finalData).then(() => {
      this.showModal()
    })
  }
    render() {
      const {dataHistory} = this.props.transaction
      const {dataDetailHistory} = this.props.transaction
        return (
            <>
              <div className="bg-gray-200 px-14 py-20">
                <div className="grid grid-cols-3 items-center gap-8">
                  {dataHistory.map(history => (
                    <HistoryItems key={history.id} code={history.refNo} tanggal={history.createdAt.slice(0, 10)} click={() => this.onDetail(history.id)} />
                  ))}
                </div>
              </div>
              {dataDetailHistory !== null ? (
                <Modal 
                  outsideHide={this.hideModal}
                  show={this.state.show}
                  close={this.hideModal}
                  code={dataDetailHistory.refNo}
                  date={dataDetailHistory.createdAt.slice(0, 10)}
                  items={dataDetailHistory.item}
                  total={dataDetailHistory.total}
                />
              ) : (
                <div></div>
              )}
            </>
        )
    }
}

const Modal = ({show, outsideHide, date, code, items, total, close}) => {
  const showClass = show ? 'block' : 'hidden'
  return (
    <div onClick={outsideHide} className={` bg-black flex justify-center items-center bg-opacity-40 top-0 h-screen w-screen absolute ${showClass}`}>
      <div className="bg-white flex flex-col p-8 rounded-md relative">
        <h3 className="text-3xl font-bold tracking-wider text-gray-800 text-center">History</h3>
        <div className="flex flex-row justify-between gap-10 mt-8 mb-6">
          <h4 className="font-semibold text-red-500 text-lg">Code: {code}</h4>
          <h4 className="font-semibold text-green-500 text-lg">Date: {date}</h4>
        </div>
        <h3 className="font-semibold text-lg mb-3">Items : </h3>
        <p className="font-semibold text-gray-700 text-sm border border-gray-800 p-2">{items}</p>
        <h3 className="font-semibold text-lg mt-5 mb-3">Total Price : </h3>
        <p className="font-semibold text-gray-700 text-sm border border-gray-800 p-2">IDR. {total}</p>
        <RiCloseCircleFill onClick={close} size={40} className=" text-white cursor-pointer bg-red-500 rounded-full -top-4 -right-4 absolute"/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth,
})

const mapDispatchToProps = { getHistory, getDetailHistory }

export default connect(mapStateToProps, mapDispatchToProps)(History)