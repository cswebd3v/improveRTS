import React from "react";
import "./Landing.css";
import Banner from "./Banner.js";
import Highlight from "./Highlight.js";

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <Banner />
                <div className="reel">
                    <Highlight p="If you are a strategy gamer, you know RTS games can be extremely complex. improveRTS focuses specifically on videos that can be studied and analyzed in order to learn and improve. Currently, two RTS games are supported: StarCraft II and WarCraft III, with many more to come in the future." headline="Knowledge is Power. Power is Everything." />
                    <Highlight headline="Keep track of your favorites." p="When users find a video that clicks with their playstyle, they can add it to their favorites list so that they can come back and study it at any time." />
                    <Highlight headline="Join the Discussion" p="Each video has a comment section that will be monitored for strategic discussion. Point out things that you see, and take note of what others are saying!" />
                </div>
                <form className="login-form">
                    <div>
                        <label for="username">Username</label>
                         <input placeholder="iRTS" type="text" name="username" id="username"/>
                    </div>
                    <div>
                        <label for="password">Password</label>
                         <input placeholder="password" type="text" name="password" id="password" />
                    </div>
                        <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Landing