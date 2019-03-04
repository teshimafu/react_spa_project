import * as React from "react";
import { CounterState } from "./module";
import { ICounterActions } from "../containers/Container";
import { ReduxState } from 'src/store';

interface Props {
    value: CounterState;
    actions: ICounterActions;
}

export class Counter extends React.Component<any, ReduxState> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        const Increnent = () => this.props.increment(3);
        const Decrenent = () => this.props.decrement(2);
        return (
            <div>
                <p>score: {this.props.value.num}</p>
                <button onClick={Increnent}>Increment 3</button>
                <button onClick={Decrenent}>Decrement 2</button>
            </div >
        )
    }
}