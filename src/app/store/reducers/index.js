import { combineReducers } from 'redux'
import ExampleReducer from './example/exampleReducer'

export const Reducers = combineReducers({
    example: ExampleReducer
})