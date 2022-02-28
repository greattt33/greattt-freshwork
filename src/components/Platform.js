import React from "react"
import platform1 from "./image/platform1.png"
import platform2 from "./image/platform2.png"
import platform3 from "./image/platform3.png"
import platform4 from "./image/platform4.png"


const Platform= ()=>{
    return(
        <div className="platform">
           <div id="platform-text">
              <p id="platform-big">
                Frictionless, Simple, Easy
              </p>
              <p id="platform-small">
                  Freshworks makes it fast and easy for businesses to delight their customers and employees. We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.
              </p>
           </div>
           <div class="platform-other">
             <div class="platform-option">
               <img src={platform1} alt="first"/>
               <p class="b-text">Get up and running with no barriers</p>
               <p class="s-text">Try or purchase our software directly from our website, and onboard in a matter of days, not months.</p>
               <button id="platform-button">Start Free Trial</button>
             </div>
             <div class="platform-option">
             <img src={platform2} alt="first"/>
               <p class="b-text">Choose your pricing plan</p>
               <p class="s-text">Our pricing plans are designed for modern business use cases and affordable for organizations of all sizes.</p>
               <button id="platform-button">See Pricing</button>
               
             </div>
             <div class="platform-option">
             <img src={platform3} alt="first"/>
               <p class="b-text">Build and customize as you go</p>
               <p class="s-text">Extend and tailor experiences to meet your unique business needs, with low-code development and over 1,100 custom apps made available on our marketplace.</p>
               <button id="platform-button">Visit Marketplace</button>
             </div>
             <div class="platform-option">
                <img src={platform4} alt="first"/>
               <p class="b-text">Create value, fast</p>
               <p class="s-text">Accelerate your team productivity and efficiency with modern automation and collaboration tools, to get tangible results in no time.</p>
               <button id="platform-button">Learn How</button>
             </div>
           </div>
        </div>
    )
}

export default Platform