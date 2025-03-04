import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./nav.module.css";

function CartIcon({ cartCount }) {
  return (
    <Link to="/cart" className={styles.navLink}>
      Cart {cartCount}
    </Link>
  );
}

export default function Nav({ cartCount }) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.compName}>Orange</h1>
      <div className={styles.linkContainer}>
        <Link to="/home" className={styles.navLink}>
          Homepage
        </Link>
        <Link to="/store" className={styles.navLink}>
          Store
        </Link>
        <CartIcon cartCount={cartCount} />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  cartCount: PropTypes.number,
};

CartIcon.propTypes = {
  cartCount: PropTypes.number,
};
