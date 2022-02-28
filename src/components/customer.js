import React from "react"
import card1 from "./image/card1.jpg"
import card2 from "./image/card2.jpg"
import card3 from "./image/card3.jpg"
import card4 from "./image/card4.jpg"

const Customer= ()=>{
    return(
        <div className="customer">
            <div id="customer-text">We aspire to be one of the most loved companies in the world</div>
            <div className="card">
                <div id="card-1">
                    <img src={card1} alt="body-oics"/>
                    <p className="card-title">Culture</p>
                    <p className="card-body">A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
                </div>
                <div id="card-2">
                    <img src={card2} alt="body-oics"/>
                    <p className="card-title">Culture</p>
                    <p className="card-body">A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
                </div>
                <div id="card-3">
                    <img src={card3} alt="body-oics"/>
                    <p className="card-title">Culture</p>
                    <p className="card-body">A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
                </div>
                <div id="card-4">
                    <img src={card4} alt="bodypeople"/>
                    <p className="card-title">Culture</p>
                    <p className="card-body">A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
                </div>
            </div>
            <div id="customer-button">
                <button>SEE LIFE AT FRESHWORK</button>
            </div>
            <div className="another-part">
                <p>Ready to get started?</p>
                <p>Join our community of 50,000+ companies of all sizes who use Freshworks modern SaaS products to make it fast and easy to delight their customers and employees.</p>
                <button>CONTACT SALES</button>
            </div>
            
        </div>
    )
}

export default Customer