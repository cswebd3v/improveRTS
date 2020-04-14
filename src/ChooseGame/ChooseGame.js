import React from 'react';
import './ChooseGame.css';
import {API_ENDPOINT} from "../config";

class ChooseGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            fetchURL: API_ENDPOINT
        };
    }

    componentDidMount() {
        fetch(`${this.state.fetchURL}api/games`)
            .then(res => res.json())
            .then(res => this.setState({
                games: res
            }))
            .then( () => console.log(this.state.games))
    }

    
    render() {       
        return (
            <div className='choose-game'>
                <h1 className="h1style">Choose Wisely, commander</h1>
                
                <div className='gameflex'> 
            
                <a href="/videolog" onClick={this.props.setGameId}>                  
                        <div className='choose-wc3'>
                            <h2 className='hovertext'>WARCRAFT III</h2>
                        </div>
                </a>
                
            
                <a href="/videolog" onClick={this.props.setGameId2}> 
                        <div className='choose-sc2'>
                            <h2 className='hovertext2'>STARCRAFT II</h2>
                        </div>
                </a>
                
                </div>
                
            </div>
        );
    }
}

export default ChooseGame;