import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from "../components/Main";
import Home from "../components/children/Home";

const Routes = (props) => (
  <Router {...props}>
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Main>
  </Router>
);

export default Routes;