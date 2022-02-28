import React, { useState } from "react";
import "./css/PlaceOrder.css";
import { useHistory } from "react-router-dom";
import "./css/PlaceCard.css";
import axios from "axios";
import base_url from "./service/BootApi";

const PlaceCard = ({ data, index }) => {
  const history = useHistory();
  console.log(data);
  const [toggle, setToggle] = useState(true);
  const editAddress = () => {
    history.push({
      pathname: "/contact",
      state: { data: data, key: index },
    });
  };
  const deleteAddress = async () => {
    console.log(index);
    const res = await axios.delete(`${base_url}/address/${index}`);
    console.log(res);
    history.push("/placeOrder");
  };
  const handleClick = () => {
    history.push({
      pathname: "/checkOut",
      state: { data: data, key: index },
    });
  };
  return (
    <>
      <div className="card">
        <h3>
          <span
            className="number"
            title="Select"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <span>+</span> : <span>-</span>}
          </span>
        </h3>
        <div className="address">
          <div className="sub-address">
            <span>
              <span className="name">
                <span>
                  {data.firstName} {data.lastName} {data.phone}
                </span>
                <br />
              </span>
              <span>
                {` ${data.village} ${data.distt} ${data.state} ${data.country} - `}
                <span className="pinCode">
                  <span>{data.pinCode}</span>
                </span>
              </span>
            </span>
          </div>
        </div>
        {toggle ? (
          <div className="todo-btn">
            <i
              className="far fa-edit add-btn"
              title="Edit Address"
              onClick={editAddress}
            ></i>
            <i
              className="far fa-trash-alt add-btn"
              onClick={deleteAddress}
              title="Delete Address"
            ></i>
          </div>
        ) : (
          <button onClick={handleClick}>Deliver Here</button>
        )}
      </div>
    </>
  );
};

export default PlaceCard;
