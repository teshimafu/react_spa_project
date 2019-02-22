import axios from 'axios';
import * as React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';

const server = '/api/public';

/** Helloコンポーネントのstateの型定義 */
interface IHelloState {
  outputName: string;
}

class App extends React.Component<{}, IHelloState> {

  constructor(props: {}) {
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
        self.setState({ outputName: res.data });
      })
  }

  public render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav id="basic-navbar-nav" className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
