import React from "react";
import "./Profile.css";
import Nav from "./Nav.js";
import Bio from "./Bio.js";
import FaveList from "./Favelist.js";

class Profile extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <Bio />
                <FaveList />
            </div>
        )
    }
}

export default Profile