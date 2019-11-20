import React from "react";
import Products from "../Components/ProductPage/Products";
import Hero from "../Components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
