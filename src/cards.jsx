/* eslint-disable react/prop-types */
import React from 'react';


function Cards(props){
    return (
        <div className="card">
            {props.image ? (<img src = {props.image.sprites.front_default} alt = "pokemon"/>) 
            : ( <p>Loading...</p> )}
        </div>
    )
}

export { Cards };


