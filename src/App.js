import React from "react"
import './App.css';
import Hero from "./components/Hero"
import Product from "./components/product"
import Platform from "./components/Platform"
import Company from "./components/company"
import Testimonial from "./components/testimonial"
import Customer from "./components/customer";
import Contact from "./components/contact"
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
       <div className="container">
         <Hero/>
         <Product/>
         <Platform/>
         <Company/>
         <Testimonial/>
         <Customer/>
         <Contact/>
         <Footer/>
       </div>
      
    </div>
  );
}

export default App;
