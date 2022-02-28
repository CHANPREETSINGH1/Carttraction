import * as React from "react";
import AddToCart from "./AddToCart";

export default function ProductCard(props) {
  const productList = props.dataa;
  return (
    <>
      {productList.map((product, index) => {
        return <AddToCart product={product} key={product.id} index={index} />;
      })}
    </>
  );
}
