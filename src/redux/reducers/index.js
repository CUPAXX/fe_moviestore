import { combineReducers } from 'redux';
import auth from './auth'
import movie from './movie'
import category from './category';
import membership from './membership';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage,
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  movie,
  category,
  membership
})

export default reducer
