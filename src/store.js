import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { modalReducer } from 'modules/modal'
import * as reducers from 'reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const history = createBrowserHistory()
const store = createStore(combineReducers(
  {
    ...reducers,
    modal: modalReducer,
    router: connectRouter(history),
  }),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
  )
)
export default store