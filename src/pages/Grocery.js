import React from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import g1 from "../images/groceryImages/g1.jfif";
import g2 from "../images/groceryImages/g2.jfif";
import g3 from "../images/groceryImages/g3.jfif";
import g4 from "../images/groceryImages/g4.jfif";
import g5 from "../images/groceryImages/g5.jfif";
import g6 from "../images/groceryImages/g6.jfif";
import g7 from "../images/groceryImages/g7.jfif";
import g8 from "../images/groceryImages/g8.jfif";
import g9 from "../images/groceryImages/g9.jfif";

export default function Grocery() {
  const productList = [
    {
      id: 1,
      image: [g1],
      name: "fortune chakki fresh atta",
      description:
        "Handpicked from the finest wheat fields across India, every golden amber grain of wheat used",
      price: 394,
    },
    {
      id: 2,
      name: "Sunfeast Yippee Magic Masala ",
      image: [g2],
      description:
        " Delicious instant noodles that are long, non-sticky, and tasty | Unique round block",
      price: 129,
    },
    {
      id: 3,
      image: [g3],
      name: "Tata salt",
      description:
        "TRADITIONAL & AUTHENTIC: Tata Salt Crystal combines the goodness of iodine and crystal salt",
      price: 22,
    },
    {
      id: 4,
      image: [g4],
      name: "Aloo Bhujia",
      description:
        "It is a crispy ,light and spicy  | Short noodle shaped namkeen made of potato ",
      price: 246,
    },
    {
      id: 5,
      image: [g5],
      name: "Little Hearts",
      description:
        "Bring back the nostalgia of those mischievous moments of your life with these heart-shaped sweet poppable biscuits ",
      price: 20,
    },
    {
      id: 6,
      image: [g6],
      name: "Dabur Honey",
      description:
        "It is tested and packed in USFDA registered facilities  | When mixed with ginger and other household ingredients",
      price: 180,
    },
    {
      id: 7,
      image: [g7],
      name: "Tata Tea Agni leaf Powder(1 kg)",
      description:
        "Tata Tea Agni with its flawless strength, taste and color makes the perfect cup of tea to liven up your day",
      price: 220,
    },
    {
      id: 8,
      image: [g8],
      name: "kellogs Corn Flakes",
      description:
        "Kellogg's Corn Flakes is a nourishing ",
      price: 359,
    },
    {
      id: 9,
      image: [g9],
      name: "Hersheys Syrup",
      description:
        "A pure rich chocolate flavour that goes brilliantly with everything | Hershey's Chocolate flavor",
      price: 225,
    },
  ];

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Grocery</h1>
      <br />
      <ProductCard dataa={productList} />
      <br />
      <br />
      <Footer />
    </>
  );
}
