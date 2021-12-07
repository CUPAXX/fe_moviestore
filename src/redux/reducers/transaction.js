const initialState = {
  errMsg: '',
  succMsg: '',
  dataHistory: [],
  dataDetailHistory: null
}

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TRANSACTION': {
      return {
        ...state,
        succMsg: action.payload,
        errMsg: ''
      }
    }
    case 'CREATE_TRANSACTION_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'GET_HISTORY_TRANSACTION': {
      return {
        ...state,
        dataHistory: action.payload,
        errMsg: ''
      }
    }
    case 'GET_HISTORY_TRANSACTION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataHistory: []
      }
    }
    case 'GET_DETAIL_HISTORY_TRANSACTION': {
      return {
        ...state,
        dataDetailHistory: action.payload,
        errMsg: ''
      }
    }
    case 'GET_DETAIL_HISTORY_TRANSACTION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataDetailHistory: null
      }
    }
    case 'TRANSACTION_RESET': {
      return {
        ...state,
        errMsg: '',
        succMsg: ''
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default transaction
