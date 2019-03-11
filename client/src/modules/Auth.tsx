import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import { UserInfo } from 'src/reducers/AuthReducer';

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