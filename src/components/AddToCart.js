import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import E1 from "../images/E1.jpg";
import { Button } from "@mui/material";
import { orderContext } from "./store/ContextApi";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid black",
  margin:"10px",
  marginBottom: "5px",
}));

const AddToCart = ({ product, index }) => {
  const ctx = React.useContext(orderContext);

  console.log(product);
  const addToCart = () => {
    console.log(product);
    ctx.addOrder(product);
  };
  return (
    <>
      <Item key={product.id}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img style={{ height: "100px" }} src={product.image} />
          </Grid>
          <Grid item xs={8}>
            <h4><b>{product.name}</b></h4>
            <div style = {{fontSize: "15px"}}>{product.description}</div>
          </Grid>
          <Grid item xs={2}>
            <h3 color="black">Price: Rs. {product.price}/-</h3>
            <Button size="medium" onClick={addToCart} color="success" variant="contained">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Item>
    </>
  );
};

export default AddToCart;
