import React from "react";
import "./Profile.css";
import Nav from "./Nav.js";
import Bio from "./Bio.js";
import FaveList from "./FaveList.js";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <Bio />
                <FaveList />
            </div>
        )
    }
}

export default Profile