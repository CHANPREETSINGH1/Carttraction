import { Divider, Grid } from "@mui/material";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../components/css/PlaceOrder.css";
import logo from "../images/E1.jpg";
import { orderContext } from "./store/ContextApi";

const OrdersDetails = ({ data, index }) => {
  const ctx = useContext(orderContext);
  const history = useHistory();
  console.log(data);
  console.log(index);
  const logo1 = data.image[0];
  console.log(logo1);
  const deleteItem = () => {
    console.log(index);
    ctx.deleteOrder(index);
    console.log(ctx);
  };
  const addItem = () => {
    history.push("/home");
  };
  return (
    <>
      <div className="card">
        <Grid xs={4}>
          <img src={logo1} alt={logo}></img>
        </Grid>
        <Grid xs={6}>
          <p className="name">
            <strong>{data.name}</strong>
          </p>
          <p className="desc">{data.description}</p>
          <b>
            <p className="price">₹{data.price}</p>
          </b>
          <div className="cardBtn">
            <button className="btn1" onClick={addItem}>
              Add more
            </button>
            <button onClick={deleteItem}>Remove</button>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default OrdersDetails;
