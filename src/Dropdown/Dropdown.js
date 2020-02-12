import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            
        }
        this.setList = this.setList.bind(this);
        
    }

    componentDidMount() {
        this.setList();
        console.log(this.state.list);
    }

    setList() {
        if (this.props.gameId === 1) {
            this.setState({
                list: [
                    {
                        id: 1,
                        title: 'HUvHU',
                    },
                    {
                        id: 2,
                        title: 'HUvORC',
                    },
                    {
                        id: 3,
                        title: 'HUvNE',
                    },
                    {
                        id: 4,
                        title: 'HUvUD',
                    },
                    {
                        id: 5,
                        title: 'ORCvORC',
                    },
                    {
                        id: 6,
                        title: 'ORCvNE',
                    },
                    {
                        id: 7,
                        title: 'ORCvUD',
                    },
                    {
                        id: 8,
                        title: 'NEvNE',
                    },
                    {
                        id: 9,
                        title: 'NEvUD',
                    },
                    {
                        id: 10,
                        title: 'UDvUD',
                    },
                ]
            });
        } else {
            this.setState({
                list: [
                    {
                        id: 1,
                        title: 'PvP',
                    },
                    {
                        id: 2,
                        title: 'PvT',
                    },
                    {
                        id: 3,
                        title: 'PvZ',
                    },
                    {
                        id: 4,
                        title: 'TvT',
                    },
                    {
                        id: 5,
                        title: 'TvZ',
                    },
                    {
                        id: 6,
                        title: 'ZvZ',
                    },
                ]
            });
        }
    }
    render() {   
        
        const dropList = this.state.list;   
        return (
            <div className="dropdown">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='matchup'>Matchup</label>
                    <select id='matchup' name='matchup' onChange={this.props.handleChange}>
                        {dropList.map((mu, i) => (
                            <option key={i} value={mu.title}>{mu.title}</option>
                        ))}
                    </select>
                </form>
                <button onClick={this.props.updateLogs}>Go</button>
            </div>
        );
    }
}

export default Dropdown;