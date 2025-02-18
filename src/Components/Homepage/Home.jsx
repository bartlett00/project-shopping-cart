import styles from "./homepage.module.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

function MainBanner() {
  return (
    <div className={styles.mainBanner}>
      <h1>Where variety meets quality.</h1>
      <h2>Quality products, Great prices.</h2>
      <div className={styles.imagePlaceholder}>image placeholder</div>
    </div>
  );
}

function StoreBanner() {
  return (
    <div className={styles.storeBanner}>
      <h2>Join the fun.</h2>
      <button>Sign Up</button>
      <button>Shop</button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <MainBanner />
      <StoreBanner />
      <Footer />
    </>
  );
}
