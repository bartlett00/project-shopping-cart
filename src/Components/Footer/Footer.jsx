import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <h1>Address</h1>
        <p>123 Fake Address, Province, Country</p>
        <h1>Contact us</h1>
        <p>123-456-7890</p>
        <p>notrealplace@fakeemail.com</p>
      </div>
      <div>
        <h1>Site Navigation</h1>
        <Link to="/">Homepage</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </footer>
  );
}
