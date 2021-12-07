import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getMovie = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/movie`)
      dispatch({
        type: 'GET_MOVIE',
        payload: {
          movie: data.results,
          pageInfo: data.pageInfo
        }
      })
    } catch (err) {
      dispatch({
        type: 'GET_MOVIE_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'MOVIE_RESET'});
      }, 3000);
    }
    
  }
}

export const getDetailMovie = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/movie/${id}`)
      dispatch({
        type: 'GET_DETAIL_MOVIE',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_MOVIE_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'MOVIE_RESET'});
      }, 3000);
    }
    
  }
}