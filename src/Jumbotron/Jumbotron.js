import React from "react";
import "./Jumbotron.css";
import ReactPlayer from "react-player";

class Jumbotron extends React.Component {
    render() {
        let gameTitle = '';
        if (this.props.gameId === 1) {
            gameTitle = 'Warcraft III';
        } else {
            gameTitle = 'Starcraft II';
        }
        return (
            <div className="jumbotron">
                <h2>{gameTitle} Featured Video</h2>
                <div className="videobox">
                    <ReactPlayer
                        className='react-player' 
                        url= {this.props.url} 
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
            </div>
        )
    }
}

export default Jumbotron;