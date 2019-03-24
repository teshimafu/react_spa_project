import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { Calendar } from '../modules/Calendar'
import { todoActions, TodoInfo } from 'src/modules/Calendar';
import { ReduxState } from 'src/store';

export interface TodoActions {
    add: (todoInfo: TodoInfo) => Action<string>;
    edit: (todoInfo: TodoInfo) => Action<string>;
    delete: (todoInfo: TodoInfo) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        add: (todoInfo: TodoInfo) => {
            dispatch(todoActions.add(todoInfo))
        },
        edit: (todoInfo: TodoInfo) => {
            dispatch(todoActions.add(todoInfo))
        },
        delete: (todoInfo: TodoInfo) => {
            dispatch(todoActions.delete(todoInfo))
        }
    };
}

function mapStateToProps(state: ReduxState) {
    return Object.assign({}, { todoList: state.todoList });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)