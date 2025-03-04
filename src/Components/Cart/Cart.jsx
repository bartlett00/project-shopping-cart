import { useOutletContext } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
import styles from "./cart.module.css";

export default function Cart() {
  const { cartCount, setCartCount, cart, setCart } = useOutletContext();

  function handleCheckout() {
    if (confirm("are you sure you would like checkout?")) {
      setCart([]);
      setCartCount(0);
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.headerAndPurchase}>
        <h1>Your Cart</h1>
        <button className={styles.purchase} onClick={handleCheckout}>
          Purchase
        </button>
      </div>
      <div className={styles.cartItems}>
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
        {cart.length === 0 ? (
          <h1 className={styles.emptyCart}>Your cart is empty!</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
