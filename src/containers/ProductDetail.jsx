import React from "react";
import ProductInfo from "../components/ProductInfo";
import iconClose from "../../public/assets/icons/icon_close.png";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export { ProductDetail };
