import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (initialState = {}) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(rootReducer, initialState, composedEnhancers)
}

export default configureStore
