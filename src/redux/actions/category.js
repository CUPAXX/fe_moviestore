import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getCategory = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/category`)
      dispatch({
        type: 'GET_CATEGORY',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_CATEGORY_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'CATEGORY_RESET'});
      }, 3000);
    }
  }
}

export const getMovieByCategory = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/category/${id}`)
      dispatch({
        type: 'GET_MOVIE_CATEGORY',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_MOVIE_CATEGORY_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'CATEGORY_RESET'});
      }, 3000);
    }
  }
}