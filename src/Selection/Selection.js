import React from 'react';
import './Selection.css';

class Selection extends React.Component {
    render() {
        return (
            <div className='Selection'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='matchup'>Matchup</label>
                    <select id='matchup' name='matchup'>
                        <option value='HUvHU'>HUvHU</option>
                        <option value='HUvORC'>HUvORC</option>
                        <option value='HUvNE'>HUvNE</option>
                        <option value='HUvUD'>HUvUD</option>
                        <option value='ORCvORC'>ORCvORC</option>
                        <option value='ORCvNE'>ORCvNE</option>
                        <option value='ORCvUD'>ORCvUD</option>
                        <option value='NEvNE'>NEvNE</option>
                        <option value='NEvUD'>NEvUD</option>
                        <option value='UDvUD'>UDvUD</option>
                    </select>
                    <label htmlFor='view'>Viewer Perspective</label>
                    <select id='view' name='view'>
                        <option value='First Person'>First Person</option>
                        <option vlaue='Cast'>Cast</option>
                    </select>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Selection;