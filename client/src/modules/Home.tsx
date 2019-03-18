import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';

export type Props = ReduxState & AuthActions;

export class Home extends React.Component<Props> {

    public render() {
        return (
            <div>ホーム画面です</div>
        )
    }
}