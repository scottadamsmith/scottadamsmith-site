import {
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import './Theme.scss'
import MainLayout from "./MainLayout";
import Home from "./Home";
import TechnicalSkills from "./TechnicalSkills";
import WorkExperience from "./WorkExperience";
import { useEffect, useState } from "react";

export default function App() {
  const [activeMenu, setActiveMenu] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setActiveMenu(false);
  }, [location])

  return (
    <div>
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger ${activeMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarcontent" onClick={() => setActiveMenu(!activeMenu)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>  
        <div id="navbarcontent" className={`navbar-menu ${activeMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/technical-skills">Technical Skills</Link>
            <Link className="navbar-item" to="/work-experience">Work Experience</Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/work-experience">
          <MainLayout renderPageContent={<WorkExperience />}/>
        </Route>
        <Route path="/technical-skills">
          <MainLayout renderPageContent={<TechnicalSkills />}/>
        </Route>
        <Route path="/">
          <MainLayout renderPageContent={<Home />}/>
          {/* <MainLayout  /> */}
          {/* <Intro /> */}
        </Route>
      </Switch>
    </div>
  );
}
