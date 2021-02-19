import React from "react";
import "./CartItem.css";


const CartItem = ({img, title, style, price, curencyFormat}) => {
  return (
    <div class="cart-item">
    <div class="cart-item__del"></div>
    <div class="cart-item__thumb">
      <img
        src={img}
        alt={style}
      />
    </div>
    <div class="cart-item__details">
      <p class="title">{title}</p>
      <p class="desc">
        {style}
      </p>
      <p class="desc">Quantity: 1</p>
    </div>
    <div class="cart-item__price">
      <p>$ {price}</p>
      <button disabled="" class="change-product-button">-</button
      ><button class="change-product-button">+</button>
    </div>
  </div>
  );
};
export default CartItem;