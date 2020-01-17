import React from "react";
import "./Home.css";
import Nav from "./Nav.js";
import Jumbotron from "./Jumbotron.js";
import Wc3 from "./Wc3.js";
import Sc2 from "./Sc2.js";

class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <Jumbotron />
                <Wc3 />
                <Sc2 />
            </div>
        )
    }
}

export default Home