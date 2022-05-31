import React from "react";
import arrowIcon from "../../public/assets/icons/arrow.svg";
import "../styles/Order.scss";

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={arrowIcon} alt="arrow" />
    </div>
  );
};

export { Order };
