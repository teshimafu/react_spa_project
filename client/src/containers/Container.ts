import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Counter } from '../modules/Counter'
import { decrementAmount, incrementAmount } from '../modules/module'
import { ReduxAction, ReduxState } from '../store'

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) { }

    public increment(amount: number) {
        this.dispatch(incrementAmount(amount))
    }

    public decrement(amount: number) {
        this.dispatch(decrementAmount(amount))
    }
}

export default connect(
    (state: ReduxState) => ({ value: state.counter }), // ①
    (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) }) // ②
)(Counter)