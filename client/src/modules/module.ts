// ActionCreatord
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
// import { CounterActions } from 'src/Containers/Container';

// enum ActionNames {
//     INC = 'counter/increment',
//     DEC = 'counter/decrement',
// }

const actionCreator = actionCreatorFactory();

export const counterActions = {
    incrementAmount: actionCreator<number>('counter/increment'),
    decrementAmount: actionCreator<number>('counter/decrement')
};

// interface IncrementAction extends Action {
//     type: counterActions.
//     plusAmount: number
// }
// export const incrementAmount = (amount: number): IncrementAction => ({
//     type: ActionNames.INC,
//     plusAmount: amount
// })

// interface DecrementAction extends Action {
//     type: ActionNames.DEC
//     minusAmount: number
// }

// export const decrementAmount = (amount: number): DecrementAction => ({
//     type: ActionNames.DEC,
//     minusAmount: amount
// })

// reducer

export interface CounterState {
    num: number
}

// export type CounterActions = IncrementAction | DecrementAction

const initialState: CounterState = { num: 0 };

// export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
//     switch (action.type) {
//         case ActionNames.INC:
//             return { num: state.num + action.plusAmount }
//         case ActionNames.DEC:
//             return { num: state.num - action.minusAmount }
//         default:
//             return state
//     }
// }


export const homeReducer = reducerWithInitialState(initialState)
    .case(counterActions.incrementAmount, (state, amount) => {
        return Object.assign({}, state, { amount });
    })
    .case(counterActions.decrementAmount, (state, amount) => {
        return Object.assign({}, state, { amount });
    });