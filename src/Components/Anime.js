import React from 'react'
import "./Anime.css"
import steam from './images/steam.png'
import sackboy from './images/sackboy.png'
import spiderman from './images/spiderman.png'
import assassins from './images/assassins.png'
const Anime = () => {
  return (
    <div>
       <section class="glass">
        <div class="dashboard">
         
          <div class="pro">
            <h2>Our Achievements  </h2>
            <img src={steam} alt="" />
          </div>
        </div>
        <div class="games">
          
          <div class="cards">
            <div class="card">
              <img src={assassins} alt="" />
              <div class="card-info">
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
            <div class="card">
              <img src={sackboy} alt="" />
              <div class="card-info">
                <h2>Sackboy A Great Advanture</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
            <div class="card">
              <img src={spiderman} alt="" />
              <div class="card-info">
                <h2>Spiderman Miles Morales</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Anime
