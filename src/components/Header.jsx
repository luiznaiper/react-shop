import React from "react";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
import menuIcon from "../../public/assets/icons/icon_menu.svg";
import shoppingIcon from "../../public/assets/icons/icon_shopping_cart.svg";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={shoppingIcon} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
