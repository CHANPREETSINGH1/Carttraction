import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import base_url from "../service/BootApi";

const orderContext = createContext({
  order: [
    {
      image: "",
      name: "",
      description: "",
      price: "",
    },
  ],
  addOrder: () => {},
  deleteOrder: () => {},
  orderCount: 0,
  price: 0,
  username: "",
});

const ContextApi = (props) => {
  const [orders, setOrders] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [price, setPrice] = useState(0);
  const [username, setUsername] = useState("Tushar");

  console.log(price);
  const addOrder = async (val) => {
    setOrders([val]);
    const res = await axios.post(`${base_url}/product`, val);
    setPrice(price + val.price);
    console.log(price);
    setOrders([...orders, val]);
    setCnt(cnt + 1);
    console.log(res);
    await getData();
  };

  console.log(orders);

  const deleteOrder = async (index) => {
    await getData();
    console.log(index);
    const res = await axios.delete(`${base_url}/product/${index}`);
    console.log(res);
    setCnt(cnt - 1);
    await getData();
    alert("Deleted");
  };

  const context = {
    order: orders,
    addOrder,
    deleteOrder,
    orderCount: cnt,
    price: price,
    username: username,
  };

  const getData = async () => {
    const res = await axios.get(`${base_url}/products`);
    console.log(res);
    console.log(res.data);
    if (!res.data) {
      setOrders([]);
      setCnt(0);
      setPrice(0);
    }
    const data = res.data;
    let price = 0;
    data.map((ele) => {
      price = price + ele.price;
    });
    setPrice(price);
    setCnt(data.length);
    console.log(data);
    setOrders(data);
    console.log(orders);
  };

  useEffect(async () => {
    await getData();
  }, []);

  return (
    <>
      <orderContext.Provider value={context}>
        {props.children}
      </orderContext.Provider>
    </>
  );
};

export default ContextApi;
export { orderContext };
