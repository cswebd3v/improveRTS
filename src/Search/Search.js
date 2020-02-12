import React from 'react';
import './Search.css';
import Vod from '../Vod/Vod';

class Search extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            vods: [],
            search: '',
            //sort: '',
            error: null
        }
    }

    setSearch(search) {
        this.setState({
            search
        });
    }

    /*setSort(sort) {
        this.setState({
            sort
        });
    }*/

    handleSubmit(e) {
        e.preventDefault();
        const baseUrl = 'http://localhost:8000/vods';
        const params = [];
        if (this.state.search) {
            params.push(`search=${this.state.search}`);
        }
        /*if (this.state.sort) {
            params.push(`sort=${this.state.sort}`);
        }*/
        const query = params.join('&');
        const url = `${baseUrl}?${query}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    books: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: 'Sorry, could not get books at this time'
                });
            })
    }

    render() {
        const vods = this.state.vods.map((vod, i) => {
            return <Vod {...vod} key={i} />
        })


        return (
            <div className="search">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search: </label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        value={this.state.search}
                        onChange={e => this.setSearch(e.target.value)}/>
                    
                    <label htmlFor="sort">Sort: </label>
                    <select id="sort" name="sort" onChange={e => this.setSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="title"></option>
                    </select>
                </form>
                {vods}
            </div>
        );
    }
}

export default Search;