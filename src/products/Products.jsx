import "./Products.css";
import { useCart } from "../Cartcontext";

import soft from "./softa.jpeg";
import scrunchie from "./scrunchie.jpeg";
import duo from "./duo.jpeg";

const productData = [
  {
    id: 1,
    name: "Soft Angel",
    originalPrice: 32,
    price: 27,
    image: soft,
    discounted: true,
  },
  {
    id: 2,
    name: "Satin Scrunchie",
    originalPrice: 3,
    price: 2,
    image: scrunchie,
    discounted: true,
  },
  {
    id: 3,
    name: "Angel Duo",
    originalPrice: 35,
    price: 28,
    image: duo,
    discounted: true,
  },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="products-page">

      <h1>Products</h1>

      <div className="products-grid">

        {productData.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image-container">

              {product.discounted && (
                <span className="sale-badge">
                  SALE
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <h2>{product.name}</h2>

            <div className="product-price">

              {product.discounted && (
                <span className="original-price">
                  ${product.originalPrice}
                </span>
              )}

              <span className="current-price">
                ${product.price}
              </span>

            </div>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}