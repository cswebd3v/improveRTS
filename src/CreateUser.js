import React from "react";
import "./CreateUser.css";
import Nav from "./Nav.js";
import Banner from "./Banner.js";

class CreateUser extends React.Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <Banner />
                <form className="login-form">
                    <div>
                        <label for="username">Username</label>
                        <input placeholder="iRTS" type="text" name="username" id="username"/>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input placeholder="password" type="text" name="password" id="password" />
                    </div>
                    <div>
                        <label for="repeat-password">Repeat Password</label>
                        <input placeholder="password" type="text" name="repeat-password" id="repeat-password" />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default CreateUser