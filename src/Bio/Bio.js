import React from "react";
import "./Bio.css";
import Search from '../Search/Search';

class Bio extends React.Component {
    render() {
        return (
            <div className="bio">
                <h2>Username</h2>
                <Search />
                <p>paragraph with info</p>
            </div>
        )
    }
}

export default Bio;