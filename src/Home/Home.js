import React from "react";
import "./Home.css";
import Jumbotron from "../Jumbotron/Jumbotron.js";
import Suggested from "../Suggested/Suggested.js";
import Search from "../Search/Search";


class Home extends React.Component {
    //componentDidMount()

    render() {
        return (
            <div className="home">
                <Search />
                <Jumbotron />
                <Suggested />
                <Suggested />
            </div>
        )
    }
}

export default Home