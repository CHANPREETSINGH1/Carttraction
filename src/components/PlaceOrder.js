import React, { useContext, useEffect, useState } from "react";
import "./css/PlaceOrder.css";
import axios from "axios";
import PlaceCard from "./PlaceCard";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import Price from "./Price";
import { orderContext } from "./store/ContextApi";
import OrdersDetails from "./OrdersDetails";
import Footer from "./Footer";
import base_url from "./service/BootApi";

const PlaceOrder = () => {
  const ctx = useContext(orderContext);
  console.log(ctx.order);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const getData = async () => {
    const res = await axios.get(`${base_url}/addresses`);
    console.log(res);
    console.log(res.data);
    const data = res.data;
    console.log(data);
    setData(data);
    setLoad(false);
  };
  useEffect(async () => {
    await getData();
  }, [data]);
  const addAddress = () => {
    history.push("/contact");
  };
  return (
    <>
      {load ? (
        <Box className="orderBox" sx={{ width: "30%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          {/* <NavBar /> */}
          <div id="container">
            <div className="main-div">
              <div className="center-div">
                <div className="main-card">
                  <div className="deliveryAddress">
                    <h3 className="addressh1">
                      <span className="number">1</span>
                      Select Delivery Address
                    </h3>
                  </div>
                  {data.map((e) => {
                    return <PlaceCard data={e} key={e.id} index={e.id} />;
                  })}
                  <div>
                    <div className="addItemDiv"></div>
                    <div className="addItem">
                      <i
                        className="fa fa-plus add-btn"
                        title="Add Address"
                        onClick={addAddress}
                      ></i>
                      Add an address
                    </div>
                    <div className="addItemDiv"></div>
                    <h3 className="addressh1">
                      <span className="number">2</span>
                      ORDER SUMMARY
                    </h3>
                    {ctx.order
                      ? ctx.order.map((e) => {
                          return (
                            <OrdersDetails key={e.id} data={e} index={e.id} />
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <Price />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default PlaceOrder;
