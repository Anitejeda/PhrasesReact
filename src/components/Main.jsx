import React, { useEffect, useState } from 'react'
import Phrases from '../assets/phrases.json' 
 

const Main = () => { 
  const [rnd, setRnd] = useState(Math.round(Math.random() * (Phrases.length-1)) )
  const color = [
    "container-blue",
    "container-red",
    "container-yellow",
    "container-gray",
    "container-rebeccapurple",
    "container-violet",
    "container-pink",
    "container-darkblue",
    "container-darkred",
    "container-darkgoldenrod",
    "container-cyan",
    "container-darkcyan",
    "container-orange",
    "container-magenta",
    "container-darkorange",
  ]
  const bg = [
    "bg-blue",
    "bg-red",
    "bg-yellow",
    "bg-gray",
    "bg-rebeccapurple",
    "bg-violet",
    "bg-pink",
    "bg-darkblue",
    "bg-darkred",
    "bg-darkgoldenrod",
    "bg-cyan",
    "bg-darkcyan",
    "bg-orange",
    "bg-magenta",
    "bg-darkorange",
  ]
  

  return (
    <div className={bg[rnd]}>
      <div className={color[rnd]}>
          <p>{Phrases[rnd]?.phrase}</p> 
          <p>{Phrases[rnd]?.author}</p>
          <button onClick={() => setRnd(Math.round(Math.random() * (Phrases.length-1)))}>Cambiar Frase</button>
      </div>
    </div>
  )
} 

export default Main