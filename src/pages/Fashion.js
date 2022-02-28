import React from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import c1 from "../images/clothingImages/c1.jfif";
import c2 from "../images/clothingImages/c2.jfif";
import c3 from "../images/clothingImages/c3.jfif";
import c4 from "../images/clothingImages/c4.jfif";
import c5 from "../images/clothingImages/c5.jfif";
import c6 from "../images/clothingImages/c6.jfif";
import c7 from "../images/clothingImages/c7.jfif";
import c8 from "../images/clothingImages/c8.jfif";
import c9 from "../images/clothingImages/c9.jfif";
export default function Fashion() {
  const productList = [
    {
      id: 10,
      image: [c1],
      name: "Vihaara Womens A-Line Dress",
      description:
        "Fabric: Rayon || Mini Dress | Occasion : Party wear || Functions ",
      price: 800,
    },
    {
      id: 11,
      name: "Niza Fashion Women's Satin Georgette Long Anarkali Suit",
      image: [c2],
      description:
        "op Fabric :- Fox Georgette || Bottom Fabric :- Santoon || Inar :- Santoon",
      price: 1025,
    },
    {
      id: 12,
      image: [c3],
      name: "PRINTOCTOPUS Men's Solid Regular Fit Polo",
      description:
        "Fit Type: Regular Fit | Wash Care: Machine wash cold with similar colors, gentle cycle",
      price: 798,
    },
    {
      id: 13,
      image: [c4],
      name: "ULTRA TREND Girl's A-Line Knee Length Dress",
      description:
        "Fit Type: Regular | Fabric : Cotton Lenin Blend; Closure : Belt and Durable fabric and Durable color",
      price: 456,
    },
    {
      id: 14,
      image: [c5],
      name: "Peter England mens Casual Pants",
      description:
        "Fit Type: Straight | 90% Cotton and 10% lycra | Zip fly with buttoned closure ",
      price: 985,
    },
    {
      id: 15,
      image: [c6],
      name: "Check Me Out _Women Silky Denim Combo Jeans Pack of 3 - Black,Grey and Navy Blue",
      description:
        "Fit Type: Skinny | Length - 39 | Color - Black,Grey and Navy Blue ",
      price: 1495,
    },
    {
      id: 16,
      image: [c7],
      name: "Fashion Handy Women's Kanchipuram Silk Saree with Blouse Piece.",
      description:
        "Fit Type: Regular | Saree Fabric:-Balton Silk / Blouse Fabric:- Running ",
      price: 1399,
    },
    {
      id: 17,
      image: [c8],
      name: "Shiva Fab Short Kurti for Women ",
      description:"Fit Type: Regular | Brand: Shiva Fab | Made in India. Jaipuri Print High Quality Products",
      price: 1024,
    },
    {
      id: 18,
      image: [c9],
      name: "Fairy Dolls Hem Knee Length Dress",
      description:"Fit Type: Regular | Material: Satin and Cotton Lining ",
      price: 999,
    },
  ];
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Fashion</h1>
      <br />
      <ProductCard dataa={productList} />
      <br />
      <br />
      <Footer />
    </>
  );
}
