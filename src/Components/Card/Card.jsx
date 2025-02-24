import PropTypes from "prop-types";
import { useState } from "react";

//TODO: card component does too much, make separate component for item placed in cart
export default function Card({ item, setCartCount, cartCount, cart, setCart }) {
  //Card component needs access to parent element card count setter

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
    //if quantity is > 0, add item(s) to cart
    if (quantity > 0) {
      console.log({ cart, item });
      const updatedItem = { ...item, quantity: quantity };
      setCart([...cart, updatedItem]);
      setCartCount(cartCount + quantity);
    }
  }

  //this handler does way too much
  // function handleUpdateCart(
  //   cart,
  //   cartCount,
  //   setCartCount,
  //   item,
  //   quantity,
  //   isInCart
  // ) {
  //   //if item already exists in cart
  //   //  update quantity or delete item
  //   //else
  //   //  add item to cart
  //   if (isInCart) {
  //     if (quantity === 0) {
  //       if (confirm("Do you want to remove this item from your cart?")) {
  //         let newCart = [...cart].splice(cart.indexOf(item), 1);
  //         setCart(newCart);
  //       }
  //     } else {
  //       let updatedItem = { ...item, quantity: quantity };
  //       let updatedCart = [...cart].splice(cart.indexOf(item), 1);
  //       setCart([...updatedCart, updatedItem]);
  //     }
  //   } else {
  //     const newItem = { ...item, quantity: quantity };
  //     setCart([...cart, newItem]);
  //     setCartCount(cartCount + quantity);
  //   }

  //   //TODO: fix bug causing cards inside cart to not be removed
  //   //update cartCount

  //   const itemsTotal = cart.reduce(
  //     (total, current) => total + current.quantity,
  //     0
  //   );
  //   console.log(itemsTotal);
  //   setCartCount(cart.length + itemsTotal);
  // }

  //TODO: create separate CartCard component with similar logic for code cleanliness
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
  );
}

Card.propTypes = {
  item: PropTypes.object,
  setCartCount: PropTypes.func,
  cartCount: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.object,
};
