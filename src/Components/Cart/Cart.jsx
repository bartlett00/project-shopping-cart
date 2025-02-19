import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

export default function Cart() {
  //TODO: display items in cart in way similar to store page
  const { cartCount, setCartCount, cart, setCart } = useOutletContext();
  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cart.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setCart={setCart}
              cart={cart}
              isInCart={true}
            />
          );
        })}
      </div>
    </div>
  );
}
