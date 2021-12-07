import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const createTransaction = (finalData) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('item', finalData.item)
    form.append('total', finalData.total)
    try {
      const { data } = await http(finalData.token).post(`${URL}/transaction`, form.toString())
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: data.message
      })
      setTimeout(() => {
        dispatch({type: 'CARTS_RESET'});
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'CREATE_TRANSACTION_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'TRANSACTION_RESET'});
      }, 3000);
    }
  }
}

export const getHistory = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/transaction`)
      dispatch({
        type: 'GET_HISTORY_TRANSACTION',
        payload: data.results
        
      })
    } catch (err) {
      dispatch({
        type: 'GET_HISTORY_TRANSACTION_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'TRANSACTION_RESET'});
      }, 3000);
    }
    
  }
}

export const getDetailHistory = (finalData) => {
  return async (dispatch) => {
    try {
      const { data } = await http(finalData.token).get(`${URL}/transaction/${finalData.id}`)
      dispatch({
        type: 'GET_DETAIL_HISTORY_TRANSACTION',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_HISTORY_TRANSACTION_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'TRANSACTION_RESET'});
      }, 3000);
    }
    
  }
}