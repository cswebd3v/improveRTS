import React from "react";
import "./VideoPage.css";
import Jumbotron from "../Jumbotron/Jumbotron.js";

class VideoPage extends React.Component {
    render() {
        return (
            <div className="video-page">              
                <Jumbotron />
            </div>
        )
    }
}

export default VideoPage