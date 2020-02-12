import React from 'react';
import './Vod.css';

export default function Vod(props) {
    return (
        <div className="vod">
            <h2>{ props.title }</h2>
        </div>
    );
}