import { useState, useEffect } from 'react'
import { Cards } from "./Cards.jsx"
import { Header } from "./Header.jsx"
import { shuffleObject } from './utils.js'



function App(){
  const [image, setImage] = useState([])
  const [score, setScore] = useState(0)

  
  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=30`);
        if (!response.ok) {
          throw new Error(`Error! Status${response.status}`)
        }
        const data = await response.json();
        const pokemonWithBool = data.results.map((pokemon) => ({
          ...pokemon,
          booleanValue: false
        }))
        setImage(pokemonWithBool)
      } catch (error){
        console.error('Error fetching Pokemon:', error)
      }
    }
    fetchImage();
  }
  , [])


  const handleImageClick = (clickedPokemon) => {
    if (clickedPokemon.booleanValue == false){
      setScore(score + 1) 
    }
    if (clickedPokemon.booleanValue == true){
      
      setScore(0)
    }

    setImage((prevPokemon) =>
      prevPokemon.map((pokemon) => {
        const updatedPokemon = {...pokemon };
        if (pokemon.name == clickedPokemon.name){
          updatedPokemon.booleanValue = true
        }
        
        const shuffledPokemon = shuffleObject(updatedPokemon)
        console.log(updatedPokemon)

        return shuffledPokemon
      })
      
    )
  }


  return (
  
  <div>
    <h2>selected pokemon: {image.name}</h2>
    <Header title = "Pokemon Memory Game" score = {`Score: ${score}`} bestscore = {`Best: ${score}`} instructions ="Earn points by clicking on an image, but don't select the same one you've seleted before!"/>
    <Cards image = {image} onImageClick={handleImageClick}/>
  </div>
  )
  

}

export default App; 