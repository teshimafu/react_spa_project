import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { Counter } from '../modules/Counter'
import { counterActions } from '../modules/module'
import { ReduxState } from '../store'

export interface ICounterActions {
    increment: (amount: number) => Action<string>;
    decrement: (amount: number) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        increment: (amount: number) => dispatch(counterActions.incrementAmount(amount)),
        decrement: (amount: number) => dispatch(counterActions.decrementAmount(amount))
    };
}

function mapStateToProps(state: ReduxState) {
    return Object.assign({}, { value: state.counter });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)