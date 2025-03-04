import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./pageWrapper.module.css";

export default function PageWrapper() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className={styles.pageWrapper}>
      <Nav cartCount={cartCount} />
      <Outlet context={{ cartCount, setCartCount, cart, setCart }} />
      <Navigate to="home" replace />
      <Footer />
    </div>
  );
}
