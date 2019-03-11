import { combineReducers, createStore } from 'redux'
import { authReducer, UserInfo } from './reducers/AuthReducer';

export type ReduxState = {
    userInfo: UserInfo
}

const store = createStore(
    combineReducers<ReduxState>({
        userInfo: authReducer
    })
)

export default store;