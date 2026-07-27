import "./Hero.css";
import { Link } from "react-router-dom";
import aboutImg from "./darine.jpg";
import softAngelImg from "./softangel.jpg";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            Premium HAIRCARE
          </p>

          <h1>
            Soft Angel,<br />
            More than hair. A feeling.
          </h1>

          <p className="hero-text">
            Created from a personal need. Made to become part of yours.
            For the quiet confidence that comes from knowing your hair
            feels its best.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Shop Now
            </Link>

            

          </div>

        </div>

        <div className="hero-image">
          <img src={aboutImg} alt="ByDarine Haircare" />
        </div>

      </section>


      {/* Soft Angel Section */}
      <section className="soft-angel-section">

        <div className="soft-angel-image">
          <img src={softAngelImg} alt="Soft Angel Haircare" />
        </div>

        <div className="soft-angel-content">

          <p className="soft-angel-tag">
            THE SIGNATURE PIECE
          </p>

          <h2>
            Soft Angel
          </h2>

         <div className="product-features">
  <p className="features-title">Product Features</p>

  <ul>
    <li>Weightless frizz control</li>
    <li>Silky shine</li>
    <li>Humidity defense</li>
    <li>Heat styling support</li>
    <li>Instant detangling</li>
    <li>Soft, touchable finish</li>
    <li>Botanical nourishment</li>
    <li>No greasy residue</li>
    <li>Long-lasting signature scent</li>
    <li>For every hair type</li>
  </ul>
</div>

         

        </div>

      </section>
    </>
  );
}