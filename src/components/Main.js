import React from 'react';
import SideBar from './Sidebar';
import Projects from './Projects';
import GitHubLink from './GitHubLink';
import { Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from './Skills.jsx';
import PortHome from './PortHome';
import Home from './Home';
const Main = () => {
return (
    <div className="main_container">
    <Router>
    <GitHubLink/>
    <SideBar/>
    <Route
      render={({ location }) => {
        return (
          <PageTransition
            preset="fade"
            exitAnimation="rotateCarouselLeftOut"
            enterAnimation="rotateCarouselTopIn"
            transitionKey={location.pathname}
          >
            <Switch location={location}>
              <Route exact path="/portfolio" component={PortHome} />
              <Route exact path="/portfolio/projects" component={Projects} />
              <Route exact path="/portfolio/skills" component={Skills} />
            </Switch>
          </PageTransition>
        );
      }}
    />
  </Router>
    </div>
)
}

export default Main;