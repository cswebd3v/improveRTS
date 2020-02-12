import React from "react";
import "./Landing.css";
import Banner from "../Banner/Banner.js";
import Highlight from "../Highlight/Highlight.js";

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <Banner />
                <div className="reel">
                    <Highlight p="If you are a strategy gamer, you know RTS games can be extremely complex. improveRTS focuses specifically on videos that can be studied and analyzed in order to learn and improve. Currently, two RTS games are supported: StarCraft II and WarCraft III, with many more to come in the future." headline="Knowledge is Power. Power is Everything." />
                    <Highlight headline="CHOOSE YOUR GAME" p="Select your favorite game to enter the video log and see results catered to you. Right now, the supported games are Starcraft II and Warcraft III, with more to come in the near future." />
                    <Highlight headline="CHOOSE YOUR MATCHUP" p="Having trouble with a specific faction matchup? Tired of losing to Zerg? Choose the matchup that you want to study, and get to work." />
                    <a href="/"><Highlight headline="Get Started NOW" /></a>
                </div>
            </div>
        )
    }
}

export default Landing