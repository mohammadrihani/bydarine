import "./Featuredproducts.css";
import { Link } from "react-router-dom";
import soft from "./softangel.jpg";
import scrunchie from "./scrunchie.jpg";

const products = [
  {
    id: 1,
    name: "Soft Angel",
    description: "Perfect for frizzy hair.",
    image: soft,
  },
  {
    id: 2,
    name: "Scrunchie",
    description: "",
    image: scrunchie,
  },
 
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products">

      <span className="section-subtitle">
        OUR COLLECTION
      </span>

      <h2>Featured Products</h2>

      <p className="section-text">
        Discover our signature collection, carefully formulated to nourish,
        strengthen, and enhance your natural beauty.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>
          </div>
        ))}
      </div>

      <Link to="/products" className="collection-btn">
        View Full Collection
      </Link>

    </section>
  );
}