import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a
                style={{cursor: 'pointer'}}
                onClick={this.goTo.bind(this, 'home')}
              >
                Keto App
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem 
                  eventKey={1}
                  onClick={this.goTo.bind(this, 'home')}                
                >
                  Home
                </NavItem>
                <NavItem 
                  eventKey={2}
                  onClick={this.goTo.bind(this, 'calculator')}                
                >
                  Calculator
                </NavItem>
              </Nav>
              <Nav pullRight>
                {
                  isAuthenticated() && (
                      <NavItem eventKey={1}>
                        <Button
                          bsStyle="primary"
                          onClick={this.goTo.bind(this, 'profile')}
                        >
                          Profile
                        </Button>
                      </NavItem>
                    )
                }
                {
                  !isAuthenticated() && (
                      <NavItem eventKey={2}>
                        <Button
                          bsStyle="primary"
                          onClick={this.login.bind(this)}
                        >
                          Log In
                        </Button>
                      </NavItem>
                    )
                }
                {
                  isAuthenticated() && (
                      <NavItem eventKey={3}>
                        <Button
                          bsStyle="primary"
                          onClick={this.logout.bind(this)}
                        >
                          Log Out
                        </Button>
                      </NavItem>
                    )
                }
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
