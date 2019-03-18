import * as React from "react";
import { ReduxState } from 'src/store';
import { AuthActions } from 'src/containers/AuthContainer';
import { Form, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

export type Props = ReduxState & AuthActions;

export class Home extends React.Component<Props> {

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
                        <Form.Label>{this.props.userInfo.displayName} </Form.Label>
                        <Button variant="outline-success" onClick={this.props.logout}>Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}