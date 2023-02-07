import styles from "./Navbar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Logo from "../../Assets/logo.webp";
const Navbar = () => {
  let data = 0;
  return (
    <nav className={`${styles.nav} ${styles.center}`}>
      <div className={`${styles.nav__brand} ${styles.center}`}>
        <img src={Logo} alt="Logo" />
        <h1>Tasty Food</h1>
      </div>
      <div className={`${styles.nav__cart} ${styles.center}`}>
        {data > 0 ? <AddShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
        <p>Cart</p>
        <p>{data}</p>
      </div>
    </nav>
  );
};
export default Navbar;
