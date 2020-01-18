import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import Home from "./Home.js";
import Landing from "./Landing.js";
import VideoPage from "./VideoPage.js";
import Profile from "./Profile.js";
import CreateUser from "./CreateUser.js";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/videopage">Video</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/createuser">Create User</Link>
      </div>
      

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/landing"><Landing /></Route>
        <Route path="/videopage"><VideoPage /></Route>
        <Route path="/Profile"><Profile /></Route>
        <Route path="/CreateUser"><CreateUser /></Route>
      </Switch>

      
    </div>
  );
}

export default App;
