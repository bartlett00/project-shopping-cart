import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.locationInfo}>
        <h1>Address</h1>
        <p>123 Fake Address, Province, Country</p>
      </div>
      <div className={styles.contactInfo}>
        <h1>Contact us</h1>
        <p>123-456-7890</p>
        <p>notrealplace@fakeemail.com</p>
      </div>
      <div className={styles.footerLinks}>
        <h1>Site Navigation</h1>
        <Link to="/home">Homepage</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </footer>
  );
}
