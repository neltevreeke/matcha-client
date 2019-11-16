import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from 'reducers'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createBrowserHistory()

const configureStore = (initialState = {}) => {
  const middlewareEnhancer = applyMiddleware(thunk)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(createRootReducer(history), initialState, composedEnhancers)
}

export default configureStore
