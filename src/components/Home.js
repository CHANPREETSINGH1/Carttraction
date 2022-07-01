import React from "react";
import Car from "./CarouselComp";
// import CarouselComp from "./CarouselComp";
import Footer from "./Footer";
import NavBar from "./NavBar";
import BasicGrid from "./ProductCategories";

const Home = () => {
  return (
    <>
      <NavBar />
      <Car />
      <BasicGrid /><br/><br/><br/>
      <Footer />
    </>
  );
};

export default Home;