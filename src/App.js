import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Capstone from './pages/Capstone';
import Homepage from './pages/Homepage.js';
import './App.css';


function App() {
 
  

  return (
    
   <React.Fragment>
      
      <Router>
        <Switch>
          <Route exact path = "/" component= {Homepage} />
          <Route exact path = "/indykey" component= {Homepage} />
          <Route exact path = "/capstone" component= {Capstone} />
        </Switch>
      </Router>
   </React.Fragment>
     
  
     

  );
}

export default App;
