import axios from 'axios';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

const server = 'http://localhost:8000/public';

/** Helloコンポーネントのstateの型定義 */
interface IHelloState {
  outputName: string;
}

class App extends React.Component<{}, IHelloState> {

  constructor(props: {}){
    super(props);
    this.state = {
      outputName: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick() {
    const self = this;
    axios.get(server)
      .then((res) => {
        self.setState({outputName:res.data});
      })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>ぼたん</button>
        <div>{this.state.outputName}</div>
      </div>
    );
  }
}

export default App;
