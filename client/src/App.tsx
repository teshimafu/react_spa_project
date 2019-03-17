import * as React from 'react'
import './App.css'
import AuthContainer from './containers/AuthContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/Login';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {

  public componentDidMount() {
    console.log(this)
  }
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/login' component={Login} />
          <AuthContainer>
            <Switch>
              <Route path="/" component={HomeContainer} />
            </Switch>
          </AuthContainer>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App