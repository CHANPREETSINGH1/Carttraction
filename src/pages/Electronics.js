import React from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import E1 from "../images/E1.jpg";
import E2 from "../images/E2.jpg";
import E3 from "../images/E3.jpeg";
import E4 from "../images/E4.jpg";
import E5 from "../images/E5.jpg";
import E8 from "../images/E8.jpg";
import E9 from "../images/E9.jpg";
import E11 from "../images/E11.jpg";
import E12 from "../images/E13.jpg";
import E13 from "../images/E15.jpg";
export default function Electronics() {
  const productList = [
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:28,
      image: [E4],
      name: "iphone-13-pro-max",
      description:
        "Highlights :-1 TB ROM  17.02 cm (6.7 inch) Super Retina XDR Display ",
      price: 179900,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:29,
      image: [E11],
      name: "Samsung Galaxy M32 5G",
      description:
        "Highlights :-8 GB RAM | 128 GB ROM | Expandable Upto 1 TB | 16.51 cm (6.5 inch) HD+ Display ",
      price: 23500,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:30,
      image: [E13],
      name: "Vivo V23 5G",
      description:
        "8 GB RAM | 128 GB ROM | 16.36 cm (6.44 inch) Full HD+ Display | 64MP + 8MP + 2MP ",
      price: 29900,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:31,
      image: [E8],
      name: "Oppo Reno7 Pro 5G",
      description:
        "12 GB RAM | 256 GB ROM | 16.51 cm (6.5 inch) Full HD+ AMOLED Display | 50MP + 8MP + 2MP ",
      price: 39999,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:32,
      image: [E2],
      name: "DELL Inspiron Core i5 11th Gen",
      description:
        "(8 GB/256 GB SSD/Windows 10) Inspiron 3511 Thin and Light Laptop  (15.6 inch, Carbon, 1.85 kg, With MS Office) ",
      price: 56190,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:33,
      image: [E3],
      name: "HP Pavilion Ryzen 5 Hexa Core 5600H",
      description:
        "(8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 15-ec2004AX Gaming Laptop  (15.6 inch)",
      price: 60990,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:34,
      image: [E1],
      name: "acer Swift 5 Core i7 11th Gen Intel EVO",
      description:
        "(16 GB/1 TB SSD/Windows 10 Home) SF514-55TA-72VG Thin and Light Laptop  (14 inch, Mist Green, 1.05 kg) ",
      price: 94190,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:35,
      image: [E9],
      name: "realme Buds",
      description:
        "With Mic:Yes | Bluetooth version: 5.0 | Wireless range: 10 m | Battery life: 22 hrs ",
      price: 2300,
    },
    {
      // data: [
      //   {
      //     image: [E1],
      //   },
      //   {
      //     image: [E2],
      //   },
      // ],
      id:36,
      image: [E12],
      name: "SONY WF-XB700",
      description:
        "With Mic:Yes | Bluetooth version: 5 | Wireless range: 10 m | Battery life: 9 hrs | Charging time: 2.5 hrs",
      price: 8010,
    },
  ];

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Electronics</h1>
      <br />
      <ProductCard dataa={productList} />
      <br />
      <br />
      <Footer />
    </>
  );
}
