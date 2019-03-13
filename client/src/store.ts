import { combineReducers, createStore } from 'redux'
import { UserInfo, authReducer } from './modules/Auth';

export type ReduxState = {
    userInfo: UserInfo
}

const store = createStore(
    combineReducers<ReduxState>({
        userInfo: authReducer
    })
)

export default store;