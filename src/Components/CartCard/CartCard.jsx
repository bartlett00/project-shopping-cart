import { useState } from "react";
import PropTypes from "prop-types";

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
      const itemIndex = cart.indexOf(cart.find((e) => e.id == item.id));
      console.log(itemIndex);
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
    //if quantity in input is diff from item quantity
    //update item quantity
    //update cart quantity

    if (quantity !== item.quantity) {
      if (quantity === 0) {
        removeFromCart(item, cart, cartCount, setCart, setCartCount);
      } else {
        //TODO: give user feedback for pressing button
        let newCartCount = cartCount - item.quantity;
        const updatedItem = { ...item, quantity: item.quantity - quantity };
        setCartCount(newCartCount + updatedItem.quantity);
        const itemIndex = cart.indexOf(cart.find((e) => e.id == item.id));
        console.log(itemIndex);
        const newCart = cart.filter((e) => e.id !== item.id);
        setCart([...newCart, updatedItem]);
      }
    }
  }

  return (
    <div>
      <h1>{itemData.title}</h1>
      <img src={itemData.image}></img>
      <button onClick={() => handleQuantity(quantity, setQuantity, true)}>
        +
      </button>
      <input type="text" onChange={handleManualInput} value={quantity}></input>
      <button onClick={() => handleQuantity(quantity, setQuantity, false)}>
        -
      </button>
      <button
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
        onClick={() =>
          removeFromCart(itemData, cart, cartCount, setCart, setCartCount)
        }
      >
        Delete
      </button>
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
