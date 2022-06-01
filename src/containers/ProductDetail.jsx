import React from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";

const iconClose = "@icons/icon_close.png";

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
