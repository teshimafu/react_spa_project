import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import CalendarContainer from 'src/containers/CalendarContainer';

export type Props = ReduxState & AuthActions;

export class Home extends React.Component<Props> {

    public render() {
        return (
            <CalendarContainer />
        );
    }
}