import { useState, useEffect } from 'react'
import { Cards } from "./cards.jsx"



function App(){
  const [image, setImage] = useState('')
  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12");
        const data = await response.json();
        setImage(data)
        console.log(data)
      } catch (error){
        console.error('Error fetching image:', error)
      }
    }
    fetchImage();
  }
  , [])
  
  return <div>
  <Cards image = {image} />
  <Cards image = {image} />
  </div>
  

}

export default  App 