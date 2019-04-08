import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import gameDataReducer from './game-data'

export default (initialState = {}) => {
  const rootReducer = combineReducers({
    gameData: gameDataReducer
  })

  return createStore(rootReducer, initialState, applyMiddleware(reduxThunk))
}
