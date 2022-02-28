import React from "react"
import people from "./image/product.png"


const Product = ()=>{
    return(
        <div className="product">
            <div id="product-img">
                <div id="block"></div>
                <img src={people} alt="people"/>
            </div>
            <div id="product-text">
                <p id="big-text">Try the business software used by over 500 companies to exceed customer and employees expectation </p>
                <div class="product-buttons">
                    <div>Customer Services</div>
                    <div>IT service MAnagement</div>
                    <div>Hr management </div>
                    <div>Sales Automation</div>
                    <div>Marketing Automation</div>
                    <div>All product and Trial</div>
                </div>
            </div>

        </div>
    )
}
export default Product