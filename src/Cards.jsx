/* eslint-disable react/prop-types */
import React from 'react';



function capitalizeFirst(string){
    let capital = string.charAt(0).toUpperCase()
    let cutString = string.slice(1)
    let newString = capital + cutString
    return newString
}

function Cards({image, onImageClick}) {
    return (
        <div className ="container">
            {image.map((pokemon, index) => (
                <div key = {pokemon.name} className="items">
                    <img 
                        src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
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


