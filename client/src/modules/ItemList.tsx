import { Table, Form } from "react-bootstrap";
import * as React from 'react';
import {Link} from 'react-router-dom'

export class ItemList extends React.Component<any> {
    public defaultList = [
        { id: "0", title: "なんかやる", groupName: "teshima", creatDt: "2019/01/01", updateDt: "2019/03/03", state: "PoC", view: 5 },
        { id: "1", title: "とやかくやる", groupName: "fumihiro", creatDt: "2019/01/05", updateDt: "2019/03/05", state: "idea", view: 0 },
        { id: "2", title: "がんばる", groupName: "tomiya", creatDt: "2019/01/10", updateDt: "2019/02/03", state: "PoC", view: 300 },
        { id: "3", title: "ふぁっく", groupName: "tsuchiya", creatDt: "2019/02/01", updateDt: "2019/04/03", state: "Release", view: 9999999 },
    ]
    public state: {
        searchKey: string,
        list: Array<{ id: string, title: string, groupName: string, creatDt: string, updateDt: string, state: string, view: number }>
    };
    constructor(props:any) {
        super(props);
        this.state = {
            searchKey:"",
            list: this.defaultList
        };
    }

    
    public search(key: string) {
        const state = this.defaultList.filter(item => {
            return item.title.includes(key)
        })
        this.setState({ searchKey:key,list: state })
    }
    public render() {
        const body =
            Object.keys(this.state.list).map((id) => {
                return (
                    <tr key={id}>
                        <td><Link to={"/solution/"+id}>{this.state.list[id].title}</Link></td>
                        <td>{this.state.list[id].groupName}</td>
                        <td>{this.state.list[id].creatDt}</td>
                        <td>{this.state.list[id].updateDt}</td>
                        <td>{this.state.list[id].state}</td>
                        <td>{this.state.list[id].view}</td>
                    </tr>
                )
            });
        return (
            <div>
                <Form>
                    <input type="text" placeholder="検索文字を入れてね♪" value={this.state.searchKey} onChange={e=>this.search(e.target.value)}/>
                </Form>
            <Table>
                <thead>
                    <tr>
                        <th>タイトル</th>
                        <th>グループ名</th>
                        <th>登録日</th>
                        <th>更新日</th>
                        <th>フェーズ</th>
                        <th>閲覧数</th>
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </Table>
            </div>
        );
    }
}