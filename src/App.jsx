import { useState, useEffect } from 'react'
import { Cards } from "./Cards.jsx"
import { Header } from "./Header.jsx"



function App(){
  const [image, setImage] = useState([])

  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=30`);
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
  
  return (
  
  <div>
    <Header title = "Pokemon Memory Game" score = "Score:" bestscore = "Best:" instructions ="Earn points by clicking on an image, but don't select the same one you've seleted before!"/>
    <Cards image = {image} />
  </div>)
  

}

export default  App; 