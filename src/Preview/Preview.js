import React from "react";
import "./Preview.css";
import ReactPlayer from "react-player";

class Preview extends React.Component {
    render() {
        return (
            <span className="preview">
                <h4>Video Title</h4>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=dcz2EpGGXvw'
                    width='100%'
                    height='100%'
                    light
                />
            </span>
        )
    }
}

export default Preview