import React from "react";
import "./Profile.css";
import Bio from "../Bio/Bio.js";
import FaveList from "../FaveList/FaveList.js";
import VideoLog from "../VideoLog/VideoLog";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <Bio />
                <VideoLog />
            </div>
        )
    }
}

export default Profile