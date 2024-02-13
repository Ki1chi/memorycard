import { useState, useEffect } from 'react'
import { Cards } from "./Cards.jsx"
import { Header } from "./Header.jsx"





function App(){
  const [image, setImage] = useState([])
  const [score, setScore] = useState(0)

  
  useEffect(()=>{
    const fetchPokemon = async () => {
      let pokemonDataList
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=150`);
        if (!response.ok) {
          throw new Error(`Error! Status${response.status}`)
        }
        
        const data = await response.json();
        const pokemonNames = await data.results.map((pokemon) => pokemon.name)

        const shuffledPokemon = pokemonNames.sort(() => Math.random() - 0.5)
        const randomSubset = shuffledPokemon.slice(0, 20)

        pokemonDataList = await Promise.all (
          randomSubset.map(async(name) => {
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemonData = await response.json()
            return {
              name: pokemonData.name,
              imageUrl: pokemonData.sprites.front_default,
              isSelected: false
            }
          })
        )
        console.log(pokemonDataList)
        
        setImage(pokemonDataList)
        
      } catch (error){
        console.error('Error fetching Pokemon:', error)
      }
    }
    fetchPokemon();
  }
  , [])


  const handleImageClick = (clickedPokemon) => {

    if(clickedPokemon.isSelected === true) {
      setScore(0)
      
    }
    setImage((prevPokemon) => {
      const updatedPokemon = prevPokemon.map((pokemon) => 
      pokemon.name === clickedPokemon.name ? {...pokemon, isSelected: true} : pokemon
      );

      
      const shuffledPokemonList = updatedPokemon.sort(() => Math.random() - 0.5);
      
      return shuffledPokemonList
    })
  }


  return (
  
  <div>
    <Header title = "Pokemon Memory Game" score = {`Score: ${score}`} bestscore = {`Best: ${score}`} instructions ="Earn points by clicking on an image, but don't select the same one you've seleted before!"/>
    <Cards image={image} onImageClick={handleImageClick}/>
  </div>
  )
  

}

export default App; 