import React from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import s1 from "../images/sportsImages/s1.jfif";
import s2 from "../images/sportsImages/s2.jfif";
import s3 from "../images/sportsImages/s3.jfif";
import s4 from "../images/sportsImages/s4.jfif";
import s5 from "../images/sportsImages/s5.jfif";
import s6 from "../images/sportsImages/s6.jfif";
import s7 from "../images/sportsImages/s7.jpeg";
import s8 from "../images/sportsImages/s8.jpeg";
import s9 from "../images/sportsImages/s9.jfif";
export default function Sports() {
  const productList = [
    {
      id: 19,
      image: [s1],
      name: "Cosco Tennis Racquet",
      description:
        "Aluminium O beam racket| Light weight 300 grams | String tension support 45 lbs  ",
      price: 1437,
    },
    {
      id: 20,
      image: [s2],
      name: "VOODANIA Polyurethane Football ",
      description:
        "Included Components: Football With Pump, Size Name: 5, Color Map: Multicolour ",
      price: 399,
    },
    {
      id: 21,
      image: [s3],
      name: "Juniors Cricket Set ",
      description:
        "Sport Type: Cricket | Ideal For: Boys | Color: MULTICOLOURS | Width: 30 cm",
      price: 3399,
    },
    {
      id: 22,
      image: [s4],
      name: "Trackracer 2.0 Running Shoes",
      description:
        "Outer material-Mesh, Synthetic |Model name-Trackracer 2.0 | Sole material-Rubber ",
      price: 2099,
    },
    {
      id: 23,
      image: [s5],
      name: "PSE Cricket Leather Ball",
      description:
        "Cricket Leather Ball |Water Resistant | Outer Material: Leather | Weight: 150-160 g ",
      price: 562,
    },
    {
      id: 24,
      image: [s6],
      name: "Gloves |Left Handed | Men Size ",
      description:
        "Left Handed Gloves |For Men & Women | For Cricket | Weight: 550 g | Material: PU",
      price: 1749,
    },
    {
      id: 25,
      image: [s7],
      name: "Everlast Boxing Hand Wraps",
      description:
        "PREVENT INJURIES You'll get ultimate protection and support",
      price: 422,
    },
    {
      id: 26,
      image: [s8],
      name: "Whitedot 2.1 Wicket Keeping Pad",
      description:
        "Made from premium quality polyurethane facing |High-density foam padded insert in top hat",
      price: 1196,
    },
    {
      id: 27,
      image: [s9],
      name: "Duffle Cricket Kitbag",
      description:
        "Dimensions: 70 x 30 x 33 Centimeter.| Premium duffle bag made of high-quality ",
      price: 1196,
    },
  ];

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Sports</h1>
      <br />
      <ProductCard dataa={productList} />
      <br />
      <br />
      <Footer />
    </>
  );
}
