import React from "react";
import Hero from "../components/Hero";
import ProductsAndServices from "../components/ProductsAndServices";
import FeaturedDeals from "../components/FeaturedDeals";
import RescueAndCare from "../components/RescueAndCare";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsAndServices />   {/* 👈 Add this line */}
      <FeaturedDeals />
      <RescueAndCare />
      <Testimonials />
      
    </div>
  );
};

export default Home;

