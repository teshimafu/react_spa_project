import { combineReducers, createStore } from 'redux'
import { homeReducer, CounterState } from './modules/module'

export type ReduxState = {
    counter: CounterState
}

const store = createStore(
    combineReducers<ReduxState>({
        counter: homeReducer
    })
)

export default store;