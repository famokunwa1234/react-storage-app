import React from "react";
import Hero from "../Components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CartSection from "../Components/CartPage";

export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection />
    </>
  );
}
