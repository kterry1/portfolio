import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Router>
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="fade"
                exitAnimation="flipOutLeft"
                enterAnimation="moveFromLeftFade"
                transitionKey={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/portfolio" component={Home} />
                  <Route path="/main" component={Main} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </Router>
    </>
  );
}

export default App;
