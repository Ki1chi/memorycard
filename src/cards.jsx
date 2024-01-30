/* eslint-disable react/prop-types */
import React from 'react';


function Cards({image}) {
    return (
        <div className ="container">
            {image.map((pokemon, index) => (      
                <div key = {index} className="items">
                    <img 
                        src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
                        alt = {pokemon.name} 
                    />
                </div>
            ))}
        </div>
        // <div className="card">
        //     {props.image ? (<img src = {props.image.sprites.front_default} alt = "pokemon"/>) 
        //     : ( <p>Loading...</p> )}
        // </div>
    )
}

export { Cards };


