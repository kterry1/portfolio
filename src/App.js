import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import {Switch, Route} from 'react-router-dom';
import { PageTransition } from "@steveeeie/react-page-transition";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>

   <Route  render={({ location }) => {
     console.log(location)
     return (
    <PageTransition
      preset="fade"
      exitAnimation="flipOutLeft"
      enterAnimation="moveFromLeftFade"
     transitionKey={location.pathname}
    >
       <Switch location={location}> 
       <Route exact path="/" component={Home}/>
       <Route exact path="/projects" component={Projects}/> 
      </Switch> 
     </PageTransition> 
  )
 }} 
 />
 </Router> 
</>
)
}

export default App;
