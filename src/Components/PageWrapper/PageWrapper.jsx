import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function PageWrapper() {
  const [cartCount, setCartCount] = useState(0);

  //TOTO: Test replacing standard props with deconstructed context items
  return (
    <div>
      <Nav cartCount={cartCount} />
      <Outlet context={{ cartCount, setCartCount }} />
      <Footer />
    </div>
  );
}
