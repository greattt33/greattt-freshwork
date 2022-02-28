import React from "react"
import company1 from "./image/pearson.png"
import company3 from "./image/travix.png"
import company2 from "./image/trainline.png"
import company4 from "./image/nile.png"
import company5 from "./image/multichoice.png"
import company6 from "./image/klerna.png"
import company7 from "./image/katz.png"
import company8 from "./image/exabyte.png"
import company9 from "./image/itv.png"
import company11 from "./image/diecman.png"
import company10 from "./image/fiverr.png"
import company12 from "./image/Delivery-hero.png"
import company13 from "./image/bredog.png"
import company14 from "./image/alibert.png"
import company15 from "./image/bridgestone.png"

const Company=()=>{
    return(
        <div className="company"> 
           <div className="c-text">
               <div id="c-b-text">Trusted by 50K+ customers big and small</div>
               <div id="c-s-text">We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes. Businesses from more than 120 countries around the world use Freshworks products to delight their customers and employees every day. </div>
           </div>
           <div className="company-other">
               <div id="1"><img src={company1} alt="pics"/></div>
               <div id="2"><img src={company2} alt="pics"/></div>
               <div id="3"><img src={company3} alt="pics"/></div>
               <div id="4"><img src={company4} alt="pics"/></div>
               <div id="5"><img src={company5} alt="pics"/></div>
               <div id="6"><img src={company6} alt="pics"/></div>
               <div id="7"><img src={company7} alt="pics"/></div>
               <div id="8"><img src={company8} alt="pics"/></div>
               <div id="9"><img src={company9} alt="pics"/></div>
               <div id="10"><img src={company10} alt="pics"/></div>
               <div id="11"><img src={company11} alt="pics"/></div>
               <div id="12"><img src={company12} alt="pics"/></div>
               <div id="13"><img src={company13} alt="pics"/></div>
               <div id="14"><img src={company14} alt="pics"/></div>
               <div id="15"><img src={company15} alt="pics"/></div>
               <div id="16"></div>
               <div id="17"></div>
               <div id="18"></div>
           </div>
        </div>
    )
}

export default Company