import React from "react";
import "./VideoPage.css";
import Jumbotron from "./Jumbotron.js";
import Discussion from "./Discussion.js";

class VideoPage extends React.Component {
    render() {
        return (
            <div className="video-page">              
                <Jumbotron />
                <Discussion />
            </div>
        )
    }
}

export default VideoPage