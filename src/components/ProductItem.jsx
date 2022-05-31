import React from "react";
import iconCart from "../../public/assets/icons/bt_add_to_cart.svg";
import "../styles/ProductItem.scss";

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={iconCart} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
