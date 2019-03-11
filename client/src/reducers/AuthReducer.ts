import { authActions } from 'src/actions/AuthAction';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface UserInfo {
    displayName?: string | null,
    email?: string | null,
    uid?: string
}

const initialState: UserInfo = {}

export const authReducer = reducerWithInitialState<UserInfo>(initialState)
    .case(authActions.login, ({ }, amount) => {
        return Object.assign({}, amount);
    })
    .case(authActions.logout, () => {
        return Object.assign({}, initialState)
    });