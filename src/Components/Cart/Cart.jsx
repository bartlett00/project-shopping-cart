import { useOutletContext } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

export default function Cart() {
  //TODO: display items in cart in way similar to store page
  //TODO: prevent multiple "stacks" of item cards from being added to cart page
  // add quantity to cart item if it already exists
  //TODO: add some kind of feedback that tells user when they successfully added an item to the cart

  const { cartCount, setCartCount, cart, setCart } = useOutletContext();

  function handleCheckout() {
    if (confirm("are you sure you would like checkout?")) {
      setCart([]);
      setCartCount(0);
    }
  }

  return (
    <div>
      <h1>Your Cart</h1>

      <div>
        {cart.map((item) => {
          return (
            <CartCard
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
      <button onClick={handleCheckout}>Check out</button>
    </div>
  );
}
