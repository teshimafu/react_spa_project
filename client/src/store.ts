import counter, { CounterActions, CounterState } from './modules/module'
// tslint:disable-next-line: ordered-imports
import { createStore, combineReducers, Action } from 'redux'

export default createStore(
    combineReducers({
        counter
    })
)

export interface ReduxState {
    counter: CounterState
}

export type ReduxAction = CounterActions | Action