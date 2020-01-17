import React from "react";
import "./Nav.css";

class Nav extends React.Component {
    render () {
        return (
            <nav>
                <div className="logo">
                    <h2>Logo Placeholder</h2>
                </div>
                <div className="profile">
                    <h2>Username</h2>
                </div>
            </nav>
        )
    }
}

export default Nav