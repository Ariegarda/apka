import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homme from './components/Home'
import Abbout from './components/About'
import Ssearch from './components/Search'



export default function BasicExample() {
  return (
    <Router>
      <div id="nawigacja">
        <ul id="navi">
          <li>
            <Link to="/" className="menu"><p>Home</p></Link>
          </li>
          <li>
            <Link to="/about" className="menu"><p>Youtube</p></Link>
          </li>
          <li>
            <Link to="/dashboard" className="menu"><p>Szukaj</p></Link>
          </li>
        </ul>

      

        {}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <Homme />
  );
}

function About() {
  return (
    <Abbout />
  );
}

function Dashboard() {
  return (
    <Ssearch />
  );
};

