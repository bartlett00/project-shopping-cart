import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./cartCard.module.css";

export default function CartCard({
  item,
  setCartCount,
  cartCount,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(item.quantity);

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

  function removeFromCart(item, cart, cartCount, setCart, setCartCount) {
    if (confirm("Do you want to remove this item from your cart?")) {
      const newCart = cart.filter((e) => e.id !== item.id);
      setCart([...newCart]);
      setCartCount(cartCount - item.quantity);
    }
  }

  function handleUpdateQuantity(
    item,
    quantity,
    cartCount,
    setCartCount,
    cart,
    setCart
  ) {
    if (quantity == item.quantity) {
      return;
    }
    if (quantity !== item.quantity) {
      if (quantity === 0) {
        removeFromCart(item, cart, cartCount, setCart, setCartCount);
      } else {
        let newCartCount = cartCount - item.quantity;
        const updatedItem = { ...item, quantity: quantity };
        setQuantity(quantity);
        setCartCount(newCartCount + updatedItem.quantity);
        const newCart = cart.filter((e) => e.id !== item.id);
        setCart([...newCart, updatedItem]);
      }
    }
  }

  return (
    <div id={`item-${itemData.id}`} className={styles.cartCard}>
      <div className={styles.nameAndImg}>
        <h1>{itemData.title}</h1>
        <img src={itemData.image}></img>
      </div>
      <div className={styles.cartCardBtns}>
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
        <button
          className={styles.updateQuantity}
          onClick={() =>
            handleUpdateQuantity(
              itemData,
              quantity,
              cartCount,
              setCartCount,
              cart,
              setCart
            )
          }
        >
          Update Quantity
        </button>
        <button
          className={styles.delete}
          onClick={() =>
            removeFromCart(itemData, cart, cartCount, setCart, setCartCount)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  item: PropTypes.object,
  setCartCount: PropTypes.func,
  cartCount: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.object,
};
