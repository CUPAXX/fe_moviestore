/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import HistoryItems from '../components/HistoryItems'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory, getDetailHistory } from '../redux/actions/transaction'
import {RiCloseCircleFill} from 'react-icons/all'

const History = (props) => {
  const [show, setShow] = useState(false)
  const {token} = useSelector(state => state.auth)
  const {dataHistory} = useSelector(state => state.transaction)
  const {dataDetailHistory} = useSelector(state => state.transaction)
  const dispatch = useDispatch()

  const showModal = () => {
    setShow(true)
  };

  const hideModal = () => {
    setShow(false)
  };
  
  const onLoad = () => {
    dispatch(getHistory(token))
  }

  useEffect(() => {
    onLoad()
  }, [])

  const onDetail = (id) => {
    const finalData = {
      id: id,
      token: token
    }
    if(dispatch(getDetailHistory(finalData))){
      showModal()
    }
  }
      
        return (
            <>
              <div className="bg-gray-200 px-14 py-20">
                <div className="grid grid-cols-3 items-center gap-8">
                  {dataHistory.map(history => (
                    <HistoryItems key={history.id} code={history.refNo} tanggal={history.createdAt.slice(0, 10)} click={() => onDetail(history.id)} />
                  ))}
                </div>
              </div>
              {dataDetailHistory !== null ? (
                <Modal 
                  outsideHide={hideModal}
                  show={show}
                  close={hideModal}
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

export default History