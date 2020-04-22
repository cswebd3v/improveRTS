import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Landing from "../Landing/Landing.js";
import ChooseGame from "../ChooseGame/ChooseGame";
import VideoLog from "../VideoLog/VideoLog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: ' '
    };
    this.setGameId = this.setGameId.bind(this);
    this.setGameId2 = this.setGameId2.bind(this);
  }

  setGameId() {
    this.setState({
      gameId: 1
    }); 
  }

  setGameId2() {
    this.setState({
      gameId: 2
    });
  }

  render() {
    console.log('gameId is' + this.state.gameId)
    return(
      <div className="App">
        <div className="navbar">
          <a href="/" className="nodec"><h2 id="logo">improveRTS</h2></a>
        </div>
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/"><ChooseGame setGameId2={this.setGameId2} setGameId={this.setGameId}/></Route>
          <Route path="/landing"><Landing /></Route>
          <Route path="/VideoLog"><VideoLog gameId={this.state.gameId}/></Route>
        </Switch>
        </BrowserRouter>

        

        
      </div>
    );
  }
}

export default App;
