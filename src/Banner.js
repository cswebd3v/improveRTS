import React from "react";
import "./Banner.css";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <h1>Welcome to improveRTS</h1>
                <h3>Videos hand-picked to improve your RTS gameplay</h3>
            </div>
        )
    }
}

export default Banner;