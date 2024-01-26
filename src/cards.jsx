


export default function cards (src) {

    async function getPokemon(){
        const pokemonImg = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        pokemonImg.json().then ((pokemonImg) => {
            return pokemonImg.sprites.front_default
        })
    }
    return (
        i


    )
    


}




