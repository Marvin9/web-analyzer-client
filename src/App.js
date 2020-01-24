import React, { useState } from 'react';
import {
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Components/seo-home';
import Rules from './Components/seo-rules';
import colors from './themeStore';
import '../public/css/default.css';

const navStyle = {
  background: colors.dark,
  color: '#000',
  boxShadow: '4px 3px 18px -6px rgba(0,0,0,0.44)',
};

export default () => {
  const [report, changeReport] = useState([]);
  return (
    <>
      <ul className="nav justify-content-center pt-3 pb-3" style={navStyle}>
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
          <Route path="/" exact>
            <Home
              report={report}
              dispatchChangeReport={changeReport}
            />
          </Route>
          <Route path="/rules" exact>
            <Rules />
          </Route>
        </Switch>
      </div>

    </>
  );
};
