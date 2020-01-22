import React from 'react'
import './App.css'
import Dragons from './images/dragon_tales.jpg'

function Home() {
  return(
    <div>
      <h1>Dugneons & Dargons</h1>
      <img src={Dragons} alt='Dragon Tales!'/>
    </div>
  )
}

export default Home
