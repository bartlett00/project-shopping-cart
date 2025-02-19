import Card from "../Card/Card";
import PropTypes from "prop-types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const testItems = [
  {
    id: 1,
    title: "Placeholder Item",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 0,
  },
];

function Cards({ items, setCartCount, cartCount, setCart, cart }) {
  return (
    <>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            setCartCount={setCartCount}
            cartCount={cartCount}
            setCart={setCart}
            cart={cart}
          />
        );
      })}
    </>
  );
}

export default function Store() {
  const { cartCount, setCartCount, setCart, cart } = useOutletContext();
  return (
    <div>
      <h1>Find something you&#39;ll love.</h1>
      <Cards
        items={testItems}
        setCartCount={setCartCount}
        cartCount={cartCount}
        setCart={setCart}
        cart={cart}
      />
    </div>
  );
}

Cards.propTypes = {
  items: PropTypes.array,
  setCartCount: PropTypes.func,
  cartCount: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.object,
};
