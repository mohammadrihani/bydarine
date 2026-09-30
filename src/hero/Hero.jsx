import "./Hero.css";
import { Link } from "react-router-dom";
import aboutImg from "./darine.jpg";
import combo from "./combo.jpeg";
import tutorial from "./tutorial.mp4"
import { useState } from "react";

export default function Hero() {

  const [showFeatures, setShowFeatures] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

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
            More than hair. <br /> A feeling.
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
          <img src={combo} alt="Soft Angel Haircare" />
        </div>

        <div className="soft-angel-content">

          <h2>
            Soft Angel
          </h2>


          {/* PRODUCT FEATURES BUTTON */}
          <div className="info-section">

            <button
              className="info-button"
              onClick={() => setShowFeatures(!showFeatures)}
            >
              <span>Product Features</span>

              <span className={`arrow ${showFeatures ? "open" : ""}`}>
                ↓
              </span>
            </button>

            {showFeatures && (
              <div className="info-content">

                <p>Weightless frizz control</p>
                <p>Silky shine</p>
                <p>Humidity defense</p>
                <p>Heat styling support</p>
                <p>Instant detangling</p>
                <p>Soft, touchable finish</p>
                <p>Botanical nourishment</p>
                <p>No greasy residue</p>
                <p>Long-lasting signature scent</p>
                <p>For every hair type</p>

              </div>
            )}

          </div>


          {/* INGREDIENTS BUTTON */}
          <div className="info-section">

            <button
              className="info-button"
              onClick={() => setShowIngredients(!showIngredients)}
            >
              <span>Ingredients</span>

              <span className={`arrow ${showIngredients ? "open" : ""}`}>
                ↓
              </span>
            </button>

            {showIngredients && (
              <div className="info-content">

                <p>Aqua</p>
                <p>Cyclopentasiloxane</p>
                <p>Propylene Glycol</p>
                <p>Glycerin</p>
                <p>Amodimethicone</p>
                <p>Argania Spinosa (Argan) Kernel Oil</p>
                <p>PEG-40 Hydrogenated Castor Oil</p>
                <p>Polyquaternium-7</p>
                <p>D-Panthenol (Pro Vitamin B5)</p>
                <p>Hydrolyzed Silk Protein</p>
                <p>Parfum</p>
                <p>Phenoxyethanol</p>
                <p>Ethylhexylglycerin</p>
                <p>Disodium EDTA</p>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* How To Use Section */}
      <section className="how-to-use-section">

        <div className="how-to-use-content">

          <p className="how-to-use-label">
            
          </p>

          <h2>
            How to Use
            <br />
            <em>Soft Angel:</em>
          </h2>

        </div>

        <div className="how-to-use-video">

          <video
            controls
            playsInline
            preload="metadata"
          >
            <source src={tutorial} type="video/mp4" />
     
          </video>

        </div>

      </section>

    </>
  );
}