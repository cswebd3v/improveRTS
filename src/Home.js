import React from "react";
import "./Home.css";
import Jumbotron from "./Jumbotron.js";
import Suggested from "./Suggested.js";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Jumbotron />
                <Suggested />
                <Suggested />
            </div>
        )
    }
}

export default Home