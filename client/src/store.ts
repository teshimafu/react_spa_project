import { combineReducers, createStore } from 'redux'
import { homeReducer, CounterState } from './modules/module'

export default createStore(
    combineReducers({
        homeReducer
    })
)

export interface ReduxState {
    counter: CounterState
}