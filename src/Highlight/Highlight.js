import React from "react";
import "./Highlight.css";

class Highlight extends React.Component {
    render() {
        return (
            <div className="highlight">
                <h3>{this.props.headline}</h3>
                <p>{this.props.p}</p>
            </div>
        )
    }
}

export default Highlight