import { combineReducers, createStore } from 'redux'
import { UserInfo, authReducer } from './modules/Auth';
import { TodoList, todoReducer } from './modules/Calendar';

export type ReduxState = {
    userInfo: UserInfo,
    todoList?: TodoList
}

const store = createStore(
    combineReducers<ReduxState>({
        userInfo: authReducer,
        todoList: todoReducer
    })
)

export default store;