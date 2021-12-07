const initialState = {
  dataMembership: [],
  errMsg: '',
  succMsg: ''
}

const membership = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEMBERSHIP': {
      return {
        ...state,
        dataMembership: action.payload,
        errMsg: ''
      }
    }
    case 'GET_MEMBERSHIP_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataMembership: []
      }
    }
    case 'MEMBERSHIP_RESET': {
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

export default membership
