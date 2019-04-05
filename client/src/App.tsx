import * as React from 'react'
import './App.css'
import AuthContainer from './containers/AuthContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/Login';
import { Home } from './modules/Home';
import NavigationBarContainer from './containers/NavigationBarContainer';
import { Button, ButtonToolbar } from "react-bootstrap";

import CalendarContainer from 'src/containers/CalendarContainer';
import ItemListContainer from 'src/containers/ItemListContainer';

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
                  <Route exact={true} path="/calendar" component={CalendarContainer} />
                  <Route exact={true} path="/solution" component={ItemListContainer} />
                  <Route exact={true} path='/solution/:id' component={({ match } :any ) => (
            <div>
                <h1>貴様が選んだSolutionはId:{match.params.id}だ</h1>
                  <ButtonToolbar>
                    <Button variant="primary" size="sm">
                    タグ1
                    </Button>
                    <Button variant="primary" size="sm">
                    タグ2
                    </Button>
                    <Button variant="primary" size="sm">
                    タグ3
                    </Button>
                  </ButtonToolbar>
                  <h1>ここに内容を書く</h1>
            </div>
            )} />
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