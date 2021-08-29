import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Intro from './Intro';
import Home from './Home';

export default function App() {
  return (
    <div>
      <Intro />
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li> */}
              {/* <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li> */}
            {/* </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          {/* <Switch> */}
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            {/* <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}
