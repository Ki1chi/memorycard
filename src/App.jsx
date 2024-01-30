import { useState, useEffect } from 'react'
import { Cards } from "./cards.jsx"



function App(){
  const [image, setImage] = useState([])

  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=12`);
        if (!response.ok) {
          throw new Error(`Error! Status${response.status}`)
        }
        const data = await response.json();
        setImage(data.results)
      } catch (error){
        console.error('Error fetching Pokemon:', error)
      }
    }
    fetchImage();
  }
  , [])
  
  return <div>
  <Cards image = {image} />

  </div>
  

}

export default  App; 