import * as React from "react";
import { ActionDispatcher } from "../containers/Container";
import { CounterState } from "./module";

interface Props {
    value: CounterState;
    actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {

    public decrease() {
        return this.props.actions.decrement(2)
    }

    public increase(): void {
        return this.props.actions.increment(3)
    }

    public render() {
        return (
            <div>
                <p>score: {this.props.value.num} </p>
                <button onClick={this.increase}> Increment 3 </button>
                <button onClick={this.decrease}> Decrement 2 </button>
            </div>
        )
    }
}