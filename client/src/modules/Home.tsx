import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';

export type Props = ReduxState & AuthActions;

export class Home extends React.Component<Props> {

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