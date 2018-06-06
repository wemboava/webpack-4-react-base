import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { Reducers } from './reducers'

/* eslint-disable no-underscore-dangle */
export const Store = applyMiddleware(promise, thunk)(createStore)(
    Reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */