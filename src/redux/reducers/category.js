const initialState = {
  dataCategory: {},
  dataMovieByCategory: {},
  errMsg: '',
  succMsg: ''
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY': {
      return {
        ...state,
        dataCategory: action.payload,
        errMsg: ''
      }
    }
    case 'GET_CATEGORY_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataCategory: {}
      }
    }
    case 'GET_MOVIE_CATEGORY': {
      return {
        ...state,
        dataMovieByCategory: action.payload,
        errMsg: ''
      }
    }
    case 'GET_MOVIE_CATEGORY_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataMovieByCategory: {}
      }
    }
    case 'CATEGORY_RESET': {
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

export default category
