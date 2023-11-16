import React from "react";
import Category from "../category/Category";
import Hero from "../hero/Hero";
import Testimonial from "../testimonial/Testimonial";
import TravelLogo from "../travel&logo/TravelLogo";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Testimonial />
      <TravelLogo />
    </>
  );
};

export default Home;
