/* eslint-disable react/prop-types */
import React from 'react';


function Cards({image}) {
    return (
        <div className ="container">
            {image.map((pokemon, index) => (      
                <div key = {pokemon.name} className="items">
                    <img 
                        src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
                        alt = {pokemon.name}
                    />
                </div>
            ))}
        </div>
    )
}

export { Cards };


