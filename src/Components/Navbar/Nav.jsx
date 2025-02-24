import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartIcon({ cartCount }) {
  //TODO: change "Cart" to shopping cart icon
  return <Link to="/cart">Cart {cartCount}</Link>;
}

export default function Nav({ cartCount }) {
  return (
    <nav>
      <div>Orange</div>
      <Link to="/home">Homepage</Link>
      <Link to="/store">Store</Link>
      <CartIcon cartCount={cartCount} />
    </nav>
  );
}

Nav.propTypes = {
  cartCount: PropTypes.number,
};

CartIcon.propTypes = {
  cartCount: PropTypes.number,
};
