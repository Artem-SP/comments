import {createStore, combineReducers, applyMiddleware} from 'redux'
// import { cashReducer } from './cashReducer.js'
import { commentsReducer } from './commentsReduser.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  // cash: cashReducer, 
  comments: commentsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export const store = createStore(rootReducer)