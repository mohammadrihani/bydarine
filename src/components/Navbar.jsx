import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../Cartcontext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link to="/"><b>BD</b></Link>
        <h1> BYDARINE</h1>
      </div>

      {/* LINKS */}
      <nav>
        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          {/* CART WITH COUNT */}
          <li>
            <Link to="/cart" className="cart-link">
              Cart
              <span className="cart-count">
  {cart.reduce((total, item) => total + item.qty, 0)}
</span>
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}