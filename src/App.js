import React from 'react';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <ParticlesBackground/>
    <Switch>
     <Route path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;