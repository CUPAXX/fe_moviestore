const initialState = {
  dataMovie: [],
  dataDetailMovie: {},
  pageInfo: [],
  errMsg: '',
  succMsg: ''
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE': {
      return {
        ...state,
        dataMovie: action.payload.movie,
        pageInfo: action.payload.pageInfo,
        errMsg: ''
      }
    }
    case 'GET_MOVIE_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataMovie: []
      }
    }
    case 'GET_DETAIL_MOVIE': {
      return {
        ...state,
        dataDetailMovie: action.payload,
        errMsg: ''
      }
    }
    case 'GET_DETAIL_MOVIE_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataDetailMovie: {}
      }
    }
    case 'MOVIE_RESET': {
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

export default movie
