import React from "react";
import "@styles/Order.scss";

const arrowIcon = "@icons/arrow.svg";

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
