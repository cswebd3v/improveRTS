import React from "react";
import "./VideoPage.css";
import Nav from "./Nav.js";
import Jumbotron from "./Jumbotron.js";
import Discussion from "./Discussion.js";

class VideoPage extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <Jumbotron />
                <Discussion />
            </div>
        )
    }
}

export default VideoPage