/* eslint-disable no-unused-vars */
import './App.css';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:contentName"  component={Page}>

          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
