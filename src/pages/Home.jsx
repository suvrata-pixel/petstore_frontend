import React from "react";
import Hero from "../components/Hero";
import ProductsAndServices from "../components/ProductsAndServices";
import FeaturedDeals from "../components/FeaturedDeals";
import RescueAndCare from "../components/RescueAndCare";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsAndServices />   {/* 👈 Add this line */}
      <FeaturedDeals />
      <RescueAndCare />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

