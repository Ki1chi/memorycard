/* eslint-disable react/prop-types */
import React from 'react';


function Header (props) {
    return (
        <div className="header">
            <div className = "title">{props.title}</div>
            <div className = "score">{props.score}</div>
            <div className ="bestScore">{props.bestscore}</div>
        </div>
    )
}
export {Header} 