import React from 'react';
import './VideoLog.css';
import ReactPlayer from "react-player";
import Jumbotron from "../Jumbotron/Jumbotron";
import ScrollIntoView from 'react-scroll-into-view';
import Dropdown from "../Dropdown/Dropdown";
import {API_ENDPOINT} from "../config";

class VideoLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vods: [],
            url: '',
            selectedValue: 'TvT',
            fetchURL: API_ENDPOINT
        };
        this.renderJumbo = this.renderJumbo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateLogs = this.updateLogs.bind(this);
    }

    componentDidMount() {
        if (this.props.gameId === 2) {
            this.setState({
                url: 'https://www.youtube.com/watch?v=C6TuN1chfAo'
            });
        } else {
            this.setState({
                url: 'https://www.youtube.com/watch?v=_upUmG_y29E'
            })
        }
        fetch(`${this.state.fetchURL}api/vods/${this.props.gameId}`)
            .then(res => res.json())
            .then(res => this.setState({
                vods: res
            })) 
    }

    renderJumbo(e) {
        e.preventDefault();
        this.setState({
            url: e.currentTarget.getAttribute('id')
        });
    }

    //callback prop to send to Dropdown for onSubmit
    handleChange(e) {
        this.setState({
            selectedValue: e.target.value
        })
            
    }

    updateLogs() {
        fetch(`${this.state.fetchURL}api/vods/matchup/${this.state.selectedValue}`)
            .then(res => res.json())
            .then(res => this.setState({
                vods: res
            })) 
    }
    
    

    render() {
        console.log(this.state.selectedValue);
        return (
            <div className="video-log" id="scroll">  
                <Jumbotron url={this.state.url} gameId={this.props.gameId}/>
                <Dropdown gameId={this.props.gameId} handleChange={this.handleChange} updateLogs={this.updateLogs} />
                {this.state.vods.map((vod, i) => (
                <span key={i} className="vlog-preview"> 
                    <p>{vod.title}</p>
                    <p>{vod.matchup} - {vod.view}</p>
                    
                    <ReactPlayer
                        className='react-player'
                        url={vod.link}
                        width='100%'
                        height='100%'
                    />
                    
                    <ScrollIntoView selector="#scroll" smooth>
                        <button className="renderButton" onClick={this.renderJumbo} id={vod.link}>Watch on Jumbotron</button>
                    </ScrollIntoView>
                </span>
                ))}
            </div>
        );
    }
}

export default VideoLog;