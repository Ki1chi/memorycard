/* eslint-disable react/prop-types */
import React from 'react';
import capitalizeFirst from './utils';




function Cards({ image, onImageClick}) {
    return (
        <div className ="container">
            {image.map((pokemon) => (
                <div key = {pokemon.name} className="items">
                    <img 
                        src ={pokemon.imageUrl} 
                        alt = {capitalizeFirst(pokemon.name)}
                        onClick={() => onImageClick(pokemon)}
                    />
                    <p className="pokemonName">{capitalizeFirst(pokemon.name)}</p>
                </div>
            ))}
        </div>
    )
}

export {Cards};


