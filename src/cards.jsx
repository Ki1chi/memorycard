/* eslint-disable react/prop-types */
import React from 'react';


function Cards(props){
    return (
        <div className="card">
            {props.image ? (
                <img src = {props.image} alt = "pokemon"/>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export { Cards };


