import React from 'react'
import home from './home.css'
import IMG from './../../assets/home.png'
const Home = () => {
  return (
    <div class="container">
  <div class="box1">
    <p>FEATURED POST</p>
    <h2>Step-by-step guide to choosing great font pairs</h2>
    <p>By john Doe| May 23,2022</p>
   
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <button>Read More </button>
  </div>
  <div class="box2">
    <img src={IMG} alt='no have any image'/>
  </div>
</div>

  )
}

export default Home