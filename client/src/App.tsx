import * as React from 'react'
import './App.css'
import AuthContainer from './containers/AuthContainer';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <AuthContainer />
      </div>
    )
  }
}

export default App