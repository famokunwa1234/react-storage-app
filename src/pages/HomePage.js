import React from 'react'
import { ProductConsumer } from "../Context/Context";
import Hero from "../Components/Hero";
import {Link} from "react-router-dom";
import Services from "../Components/HomePage/Services";
import Featured from "../Components/HomePage/Featured";

export default function HomePage() {
    return (  
        <>
     <Hero title="awesome Gadgets" max="true">
         <Link className="main-link" to="/Products"  style={{marg: "2rem" }}>Our Products</Link>
     </Hero>
     <Services />
     <Featured />
        </>
    )
}