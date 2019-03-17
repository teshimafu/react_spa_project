import * as React from "react";
import actionCreatorFactory from 'typescript-fsa';
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import { reducerWithInitialState } from 'typescript-fsa-reducers';


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

export class Home extends React.Component<Props> {

    public componentDidMount() {
        this.props.refLogin()
    }

    public render() {
        return (
            <div className="App">
                <p className="App-intro">
                    You: {this.props.userInfo.displayName}
                </p>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}