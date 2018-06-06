import { combineReducers } from 'redux'
import ExempleReducer from './exemple/exempleReducer'

export const Reducers = combineReducers({
    exemple: ExempleReducer
})