import React from "react";
import "./CreateUser.css";
import Banner from "../Banner/Banner.js";

class CreateUser extends React.Component {
    render() {
        return (
            <div className="create-user">
                <Banner />
                <form className="login-form">
                    <div>
                        <label htmlFor="username">Username</label><br></br>
                        <input placeholder="iRTS" type="text" name="username" id="username"/>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="password">Password</label><br></br>
                        <input placeholder="password" type="text" name="password" id="password" />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="repeat-password">Repeat Password</label><br></br>
                        <input placeholder="password" type="text" name="repeat-password" id="repeat-password" />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default CreateUser