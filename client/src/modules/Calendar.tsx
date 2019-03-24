import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as React from 'react';
import { Table } from 'react-bootstrap';
import { TodoActions } from 'src/containers/CalendarContainer';


// action
const actionCreator = actionCreatorFactory();

export const todoActions = {
    add: actionCreator<TodoInfo>('calendar/addTodo'),
    edit: actionCreator<TodoInfo>('calendar/editTodo'),
    delete: actionCreator<TodoInfo>('calendar/deleteTodo')
};

// reducer
export type TodoList = { [key: number]: TodoInfo[] }

export interface TodoInfo {
    name: string,
    date: Date,
    index?: number,
    detail?: string,
    tagIndex?: number
}


const initialState: TodoList = {};

export const todoReducer = reducerWithInitialState<TodoList>(initialState)
    .case(todoActions.add, (list, amount) => {
        if (list[amount.date.getTime()]) {
            const todoInfo = Object.assign(amount, { index: list[amount.date.getTime()].length })
            list[amount.date.getTime()].push(todoInfo)
        } else {
            const todoInfo = Object.assign(amount, { index: 0 })
            list[amount.date.getTime()] = [todoInfo]
        }
        console.log(list)
        return list;
    })
    .case(todoActions.edit, (list, amount) => {
        list[amount.date.getTime()].splice(list[amount.date.getTime()].findIndex(t => t.index === amount.index), 1, amount)
        return list;
    })
    .case(todoActions.delete, (list, amount) => {
        list[amount.date.getTime()].splice(list[amount.date.getTime()].findIndex(t => t.index === amount.index), 1)
        return list
    })

export type Props = TodoList & TodoActions;

export class Calendar extends React.Component<Props> {

    public state = {
        date: new Date(),
        calendar: this.createCalendar()
    }

    private createCalendar(): number[][] {
        const calendar: number[] = []
        const date = new Date();
        const first = new Date(date.getFullYear(), date.getMonth(), 1)
        for (let i = 0; i < first.getDay(); i++) {
            calendar.push(-1)
        }
        console.log(first.getDay())
        console.log(calendar)
        for (const d = first; d.getMonth() < date.getMonth() + 1; d.setDate(d.getDate() + 1)) {
            calendar.push(d.getDate());
        }
        console.log(calendar)
        const end = new Date(first.getFullYear(), first.getMonth() + 1, 1)
        for (let i = end.getDay(); i < 7; i++) {
            calendar.push(-1)
        }
        const calendarPerWeek: number[][] = []
        let weekIdx = 0
        calendar.forEach((c, i) => {
            if (!calendarPerWeek[weekIdx]) {
                calendarPerWeek[weekIdx] = []
            }
            calendarPerWeek[weekIdx].push(c)

            if ((i + 1) % 7 === 0) {
                weekIdx++
            }
        })
        console.log(calendar)
        console.log(calendarPerWeek)
        return calendarPerWeek;
    }

    public onChange = (date: Date) => this.setState({ date })

    public componentDidMount() {
        console.log(this)
    }

    public render() {
        const calendar =
            this.state.calendar.map((c, idx) => {
                return (
                    <tr key={idx} id={idx + ""}>
                        {
                            c.map((cw, cidx) => {
                                return (
                                    <td key={idx * cidx + cidx}>{cw === -1 ? "" : cw}</td>
                                )
                            })
                        }
                    </tr>
                )
            });
        return (
            <div>
                <h1>{`${this.state.date.getMonth() + 1}月`}</h1>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendar}
                    </tbody>
                </Table>
            </div>
        )
    }
}