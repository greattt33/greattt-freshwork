import React from "react"
import hero from "./image/hero.png"
import Header from "./Header"
import Button from "./button"


const Hero= ()=>{
     return(
         <div className="hero">
             <Header/>
             <div className="hero-body">
                 <div id="hero-text">
                   <p>Delight made easy</p>
                   <p>we made fast and easy for your business to delight customer and employees</p>
                   <Button/>
                 </div>
                 <div id="hero-image">
                   <img src={hero} alt="big-baby"/>
                 </div>
             </div>
         </div>
     )
}

export default Hero