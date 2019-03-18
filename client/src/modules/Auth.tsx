import * as React from "react";
import actionCreatorFactory from 'typescript-fsa';
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Route, Redirect } from 'react-router';


// action
const actionCreator = actionCreatorFactory();

export const authActions = {
    login: actionCreator<UserInfo>('auth/login'),
    logout: actionCreator('auth/logout')
};

// reducer
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

export type Props = ReduxState & AuthActions;

export class Auth extends React.Component<Props> {

    private isLoading: boolean = true

    public componentDidMount() {
        this.props.refLogin()
        this.isLoading = false
    }

    public render() {
        return (
            this.props.userInfo.uid ? (
                <Route children={this.props.children} />
            ) : (
                    this.isLoading ? (
                        <div>Loading</div>
                    ) :
                        <Redirect to={'/login'} />
                )
        )
    }
}