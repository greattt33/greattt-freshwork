import React from "react"
import logo from "./image/logo.png"

const Header=()=>{
    return(
        <div className="header">
           <div id="logo">
              <img src={logo} alt="baby"/>
           </div>
           <div id="navigation">
             <ul>
                <li>Product</li>
                <li>Resorces</li>
                <li>Company</li>
                
                <li>Product</li>
                <li>Product</li>
             </ul>
           </div>
        </div>
    )
}

export default Header