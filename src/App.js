import React from 'react';
import {
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Components/seo-home';

export default () => (
  <>
    <ul className="nav justify-content-center pt-3 pb-3 bg-dark">
      <li className="nav-item">
        <NavLink
          className="nav-link text-white"
          exact
          to="/"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link text-white"
          exact
          to="/rules"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Rules
        </NavLink>
      </li>
    </ul>

    <div className="container">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/rules">

        </Route>
      </Switch>
    </div>

  </>
);
