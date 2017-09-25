import React, { Component } from 'react';

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
      <nav>
        <div className="nav-wrapper">
            <a
              style={{ cursor: 'pointer' }}
              className="brand-logo"
              onClick={this.goTo.bind(this, 'home')}
            >
              Keto App
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    {
                      !isAuthenticated() && (
                          <a
                            className="btn waves-effect waves-light"
                            onClick={this.login.bind(this)}
                          >
                            Log In
                          </a>
                      )
                    }
                    {
                      isAuthenticated() && (
                          <a
                            className="btn waves-effect waves-light"
                            onClick={this.logout.bind(this)}
                          >
                            Log Out
                          </a>
                      )
                    }
                </li>
                <li>
                    {
                      isAuthenticated() && (
                        <a
                          className="btn waves-effect waves-light"
                          onClick={this.goTo.bind(this, 'profile')}
                        >
                          Profile
                        </a>
                      )
                    }
                </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default App;
