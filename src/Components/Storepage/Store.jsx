import Card from "../Card/Card";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./store.module.css";

function Cards({ items, setCartCount, cartCount, setCart, cart }) {
  return (
    <div className={styles.cards}>
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
    </div>
  );
}

export default function Store() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartCount, setCartCount, setCart, cart } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => {
        if (result.status >= 400) {
          throw new Error("Server Error");
        }
        return result.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.store}>
      <h1>Find something you&#39;ll love.</h1>
      <Link to="/cart" className={styles.checkout}>
        Checkout
      </Link>
      {loading ? <p>loading items...</p> : ""}
      <Cards
        items={data}
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
