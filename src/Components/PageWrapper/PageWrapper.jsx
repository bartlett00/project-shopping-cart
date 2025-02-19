import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function PageWrapper() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Nav cartCount={cartCount} />
      <Outlet context={{ cartCount, setCartCount, cart, setCart }} />
      <Footer />
    </div>
  );
}
