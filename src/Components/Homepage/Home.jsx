import styles from "./homepage.module.css";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <div className={styles.mainBanner}>
      <h1>Where variety meets quality.</h1>
      <h2>Quality products, Great prices.</h2>
    </div>
  );
}

function StoreBanner() {
  return (
    <div className={styles.storeBanner}>
      <h2>Join the fun.</h2>
      <Link to="/home">Sign Up</Link>
      <Link to="/store">Shop</Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <MainBanner />
      <StoreBanner />
    </div>
  );
}
