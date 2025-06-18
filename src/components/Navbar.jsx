import { useContext } from 'react';
import { FaShoppingCart, FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://github.com/ShivaHariny07/auranest/blob/main/pictures/logo.jpg?raw=true"
          alt="AuraNest Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>AuraNest</span>
      </div>

      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className={styles.actions}>

        <FaBell className={styles.icon} />
        <Link to="/cart" className={styles.cartIconWrapper}>
          <FaShoppingCart className={styles.icon} />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </Link>
        <Link to="/login" className={styles.cartIconWrapper}>
        <FaUser className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
