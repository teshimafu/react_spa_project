import * as React from 'react'
import './App.css'
import AuthContainer from './containers/AuthContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/Login';
import { Home } from './modules/Home';
import NavigationBarContainer from './containers/NavigationBarContainer';

class App extends React.Component<any> {

  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/login' component={Login} />
            <AuthContainer>
              <div>
                <NavigationBarContainer />
                <Switch>
                  <Route exact={true} path="/" component={Home} />
                </Switch>
              </div>
            </AuthContainer>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App