import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getMembership = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/membership`)
      dispatch({
        type: 'GET_MEMBERSHIP',
        payload: data.results
      })
    } catch (err) {
      dispatch({
        type: 'GET_MEMBERSHIP_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({type: 'MEMBERSHIP_RESET'});
      }, 3000);
    }
    
  }
}