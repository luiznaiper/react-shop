import React from "react";
import OrderItem from "../components/OrderItem";
import arrowIcon from "../../public/assets/icons/arrow.svg";
import "../styles/MyOrder.scss";

const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrowIcon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };