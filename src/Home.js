import React from "react";
import "./Home.css";
import Nav from "./Nav.js";
import Jumbotron from "./Jumbotron.js";
import Suggested from "./Suggested.js";

class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <Jumbotron />
                <Suggested />
                <Suggested />
            </div>
        )
    }
}

export default Home