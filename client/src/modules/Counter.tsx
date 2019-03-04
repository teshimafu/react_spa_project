import * as React from "react";
import { CounterState } from "./module";
import { ICounterActions } from "../containers/Container";

interface Props {
    value: CounterState;
    actions: ICounterActions;
}

export class Counter extends React.Component<any> {

    constructor(props: Props) {
        super(props);

        // tslint:disable-next-line: no-console
        console.log(props)
        // tslint:disable-next-line: no-console
        console.log(this.props.actions)
    }

    public componentDidMount() {
        // tslint:disable-next-line: no-console
        console.log(this.props)
    }

    public render() {
        // const Increnent = () => this.props.actions!.increment(3);
        const Decrenent = () => this.props.decrement(2);
        return (
            <div>
                <p>score: {this.props.value && this.props.value.num}</p>
                <button onClick={(e) => this.props.increment(3)}>Increment 3</button>
                <button onClick={Decrenent}>Decrement 2</button>
            </div>
        )
    }
}