import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  //TODO: display items in cart in way similar to store page
  const { cartCount, setCartCount } = useOutletContext();
  return (
    <div>
      <div>Cart Placeholder</div>
    </div>
  );
}
