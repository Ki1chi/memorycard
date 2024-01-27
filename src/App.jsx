import { useState, useEffect } from 'react'
import { Cards } from "./cards.jsx"



function App(){
  const [image, setImage] = useState('')

  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        const data = await response.json();
        setImage(data.sprites.front_default)
      } catch (error){
        console.error('Error fetching image:', error)
      }
    }
    fetchImage();
  }
  , [])
  
  return <Cards image = {image} />

}

export default  App 