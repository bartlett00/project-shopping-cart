import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({
  item,
  setCartCount,
  cartCount,
  cart,
  setCart,
  isInCart = false,
}) {
  //TODO: +/- buttons change item quantity
  //Card component needs access to parent element card count setter
  //TODO: change input value from placeholder "0"
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

  function handleUpdateCart(cartCount, setCartCount, quantity) {
    setCartCount(cartCount + quantity);
    const newItem = { ...item, quantity: quantity };
    setCart([...cart, newItem]);
  }
  return (
    <div>
      <h1>{itemData.title}</h1>
      <img src={itemData.image}></img>
      {!isInCart ? (
        <>
          <button onClick={() => handleQuantity(quantity, setQuantity, true)}>
            +
          </button>
          <input
            type="text"
            onChange={handleManualInput}
            value={quantity}
          ></input>
          <button onClick={() => handleQuantity(quantity, setQuantity, false)}>
            -
          </button>
          <button
            onClick={() => handleUpdateCart(cartCount, setCartCount, quantity)}
          >
            Add to Cart
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
  setCartCount: PropTypes.func,
  cartCount: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.object,
  isInCart: PropTypes.boolean,
};
