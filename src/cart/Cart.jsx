import "./Cart.css";
import { useCart } from "../Cartcontext";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.phone || !customer.email) {
      alert("Please fill in all your details before placing your order.");
      return;
    }

    const phoneNumber = "96171250542";

    let message = `Hello ByDarine! I'd like to place an order.\n\n`;

    message += `CUSTOMER DETAILS\n`;
    message += `Name: ${customer.name}\n`;
    message += `Phone: ${customer.phone}\n`;
    message += `Email: ${customer.email}\n\n`;

    message += `ORDER DETAILS\n`;

    cart.forEach((item) => {
      message += `${item.name} x${item.qty} — $${(
        item.price * item.qty
      ).toFixed(2)}\n`;
    });

    message += `\nTOTAL: $${total.toFixed(2)}`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  };

  const sendEmail = () => {
    if (!customer.name || !customer.phone || !customer.email) {
      alert("Please fill in all your details before placing your order.");
      return;
    }

    const emailAddress = "bydarinelb@gmail.com";

    let orderDetails = "";

    cart.forEach((item) => {
      orderDetails += `${item.name} x${item.qty} — $${(
        item.price * item.qty
      ).toFixed(2)}\n`;
    });

    const subject = `ByDarine Order — ${customer.name}`;

    const body = `Hello ByDarine,

I would like to place an order.

CUSTOMER DETAILS
Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email}

ORDER DETAILS
${orderDetails}
TOTAL: $${total.toFixed(2)}

Thank you!
`;

    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(emailAddress)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <main className="cart-page">

      {/* =========================
          PAGE INTRO
      ========================== */}

      <section className="cart-intro">

        <div className="cart-intro-top">
          <span>BYDARINE</span>
          <span>{itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}</span>
        </div>

       

       

      </section>


      {/* =========================
          EMPTY CART
      ========================== */}

      {cart.length === 0 ? (

        <section className="empty-cart">

          <div className="empty-cart-mark">
            +
          </div>

          <h2>
            Nothing here yet.
          </h2>

          <p>
            Your next hair ritual is waiting to be discovered.
          </p>

          <a href="/products">
            Explore ByDarine
          </a>

        </section>

      ) : (

        <section className="cart-container">

          {/* =========================
              PRODUCTS
          ========================== */}

          <div className="products-column">

            <div className="products-heading">
              <span>Your products</span>
              <span>{itemCount} {itemCount === 1 ? "item" : "items"}</span>
            </div>

            <div className="product-list">

              {cart.map((item) => (

                <article
                  className="cart-product"
                  key={item.id}
                >

                  <div className="cart-product-image">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    ) : (

                      <div className="image-placeholder">
                        BYDARINE
                      </div>

                    )}

                  </div>


                  <div className="cart-product-info">

                    <div>

                      <p className="product-small-label">
                        HAIRCARE
                      </p>

                      <h2>
                        {item.name}
                      </h2>

                      <p className="product-description">
                        A luxurious addition to your
                        everyday hair ritual.
                      </p>

                    </div>


                    <div className="product-bottom">

                      <div className="quantity-display">
                        <span>QTY</span>
                        <strong>{item.qty}</strong>
                      </div>

                      <button
                        className="remove-product"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>


                  <div className="product-price">

                    <span>
                      PRICE
                    </span>

                    <strong>
                      $
                      {(
                        item.price * item.qty
                      ).toFixed(2)}
                    </strong>

                  </div>

                </article>

              ))}

            </div>

          </div>


          {/* =========================
              CHECKOUT
          ========================== */}

          <aside className="checkout-panel">

            <div className="checkout-top">

              <span className="checkout-label">
                CHECKOUT
              </span>

              <h2>
                Almost
                <br />
                <em>yours.</em>
              </h2>

              <p>
                Complete your details and
                choose how you'd like to place
                your order.
              </p>

            </div>


            <form onSubmit={sendWhatsApp}>

              <div className="form-field">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={customer.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+961 XX XXX XXX"
                  value={customer.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={customer.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="order-summary">

                <div className="summary-row">
                  <span>
                    Subtotal
                  </span>

                  <span>
                    ${total.toFixed(2)}
                  </span>
                </div>


                <div className="summary-row">
                  <span>
                    Delivery
                  </span>

                  <span>
                    To be confirmed
                  </span>
                </div>


                <div className="summary-total">
                  <span>
                    Total
                  </span>

                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>

              </div>


              <button
                type="submit"
                className="order-whatsapp"
              >
                <span>
                  Order on WhatsApp
                </span>

                <span>
                  →
                </span>
              </button>


              <button
                type="button"
                className="order-email"
                onClick={sendEmail}
              >
                <span>
                  Order via Email
                </span>

                <span>
                  →
                </span>
              </button>


              <p className="checkout-footer">
                Your information is only used
                to process your ByDarine order.
              </p>

            </form>

          </aside>

        </section>

      )}

    </main>
  );
}