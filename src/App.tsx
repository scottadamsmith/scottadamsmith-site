import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './Theme.scss'
import Intro from './Intro';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </Router>
  );
}
