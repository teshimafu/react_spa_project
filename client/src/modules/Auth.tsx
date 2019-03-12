import * as React from "react";
import actionCreatorFactory from 'typescript-fsa';
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';


// action
const actionCreator = actionCreatorFactory();

export const authActions = {
    login: actionCreator<UserInfo>('auth/login'),
    reflogin: actionCreator('auth/reflogin'),
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


interface Props {
    value: UserInfo;
    actions: AuthActions;
}

export class Auth extends React.Component<any, ReduxState> {

    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.props.refLogin()
    }

    public render() {
        return (
            <div className="App">
                <p className="App-intro">
                    You: {this.props.value.uid ? this.props.value.displayName : 'お前誰や'}
                </p>
                {this.props.value.uid ? (
                    <button onClick={this.props.logout}>Google Logout</button>
                ) : (
                        <button onClick={this.props.login}>Google Login</button>
                    )}
            </div>
        )
    }
}