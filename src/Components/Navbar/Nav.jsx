import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ itemsInCart }) {
  //TODO: change "Cart" to shopping cart icon
  return <Link to="cart">Cart {itemsInCart}</Link>;
}

export default function Nav() {
  return (
    <div>
      <div>Orange</div>
      <button>Homepage</button>
      <button>Store</button>
      <Cart />
    </div>
  );
}
