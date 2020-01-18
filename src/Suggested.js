import React from "react";
import "./Suggested.css";
import Preview from "./Preview.js";

class Suggested extends React.Component {
    render() {
        return (
            <div className="suggested">
                <h3>Game Title</h3>
                <div className="preview-flex">
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                </div>
            </div>
        )
    }
}

export default Suggested;