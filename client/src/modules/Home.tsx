import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import {Link} from 'react-router-dom'

export type Props = ReduxState & AuthActions;

export class Home extends React.Component<Props> {

    public render() {
        return (
            <div>
                <Link to={"/calendar"}><h2>カレンダーアプリ</h2></Link>
                <Link to={"/solution"}><h2>新規事業一覧</h2></Link>
            </div>
        );
    }
}