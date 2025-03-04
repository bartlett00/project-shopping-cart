import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./card.module.css";

export default function Card({ item, setCartCount, cartCount, cart, setCart }) {
  const [quantity, setQuantity] = useState(0);

  const itemData = { ...item };

  function handleQuantity(quantity, setQuantity, isIncreasing) {
    if (quantity <= 1 && !isIncreasing) {
      return setQuantity(0);
    }
    if (isIncreasing) {
      return setQuantity(quantity + 1);
    } else {
      return setQuantity(quantity - 1);
    }
  }

  function handleManualInput(e) {
    e.preventDefault();
    setQuantity(Number(e.target.value));
  }

  function handleAddToCart(
    item,
    quantity,
    cartCount,
    setCartCount,
    cart,
    setCart
  ) {
    if (quantity > 0) {
      const updatedItem = { ...item, quantity: quantity };
      setCart([...cart, updatedItem]);
      setCartCount(cartCount + quantity);
    }
  }

  return (
    <div id={`item-${itemData.id}`} className={styles.storeCard}>
      <h1>{itemData.title}</h1>
      <img src={itemData.image}></img>
      <div className={styles.buttonContainer}>
        <div className={styles.quantityControls}>
          <button onClick={() => handleQuantity(quantity, setQuantity, false)}>
            -
          </button>
          <input
            type="text"
            onChange={handleManualInput}
            value={quantity}
          ></input>
          <button onClick={() => handleQuantity(quantity, setQuantity, true)}>
            +
          </button>
        </div>
        <button
          className={styles.addToCart}
          onClick={() =>
            handleAddToCart(
              itemData,
              quantity,
              cartCount,
              setCartCount,
              cart,
              setCart
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
  setCartCount: PropTypes.func,
  cartCount: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.object,
};
