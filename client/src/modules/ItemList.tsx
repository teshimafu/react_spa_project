import { Table } from "react-bootstrap";
import * as React from 'react';
import {Link} from 'react-router-dom'

export class ItemList extends React.Component<any> {
    public state: { [id: string]: { title: string, groupName:string,creatDt:string,updateDt:string,state:string,view:number } }
        = {
            "0": { title: "なんかやる",groupName:"teshima",creatDt:"2019/01/01",updateDt:"2019/03/03",state:"PoC",view:5 },
            "1": { title: "とやかくやる",groupName:"fumihiro",creatDt:"2019/01/05",updateDt:"2019/03/05",state:"idea",view:0 },
            "2": { title: "がんばる",groupName:"tomiya",creatDt:"2019/01/10",updateDt:"2019/02/03",state:"PoC",view:300 },
            "3": { title: "ふぁっく",groupName:"tsuchiya",creatDt:"2019/02/01",updateDt:"2019/04/03",state:"Release",view:9999999 },
        };
    
    public render() {
        const body =
            Object.keys(this.state).map((id) => {
                return (
                    <tr key={id}>
                        <td><Link to={"/solution/"+id}>{this.state[id].title}</Link></td>
                        <td>{this.state[id].groupName}</td>
                        <td>{this.state[id].creatDt}</td>
                        <td>{this.state[id].updateDt}</td>
                        <td>{this.state[id].state}</td>
                        <td>{this.state[id].view}</td>
                    </tr>
                )
            });
        return (
            <div>
                
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