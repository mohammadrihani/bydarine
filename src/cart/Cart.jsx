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

  // =========================================
  // TOTAL
  // =========================================

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // =========================================
  // CUSTOMER INPUT
  // =========================================

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  // =========================================
  // WHATSAPP ORDER
  // =========================================

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

  // =========================================
  // EMAIL ORDER — GMAIL
  // =========================================

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

      {/* =========================================
          HEADER
      ========================================= */}

      <section className="cart-header">

        <p>BY DARINE</p>

        <h1>
          Your
          <br />
          <em>Selection.</em>
        </h1>

        <span>
          Your carefully chosen ByDarine essentials.
        </span>

      </section>


      {/* =========================================
          EMPTY CART
      ========================================= */}

      {cart.length === 0 ? (

        <section className="empty-cart">

          <div className="empty-symbol">
            ✦
          </div>

          <h2>
            Your cart is waiting.
          </h2>

          <p>
            Discover something beautiful and
            make it part of your everyday ritual.
          </p>

          <a href="/products">
            Discover the collection
          </a>

        </section>

      ) : (

        <section className="cart-layout">

          {/* =========================================
              CART ITEMS
          ========================================= */}

          <div className="cart-items">

            <div className="cart-items-header">

              <span>
                Your Selection
              </span>

              <span>
                {cart.reduce(
                  (total, item) => total + item.qty,
                  0
                )}{" "}
                {cart.reduce(
                  (total, item) => total + item.qty,
                  0
                ) === 1
                  ? "item"
                  : "items"}
              </span>

            </div>


            {/* PRODUCTS */}

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="cart-product-image">

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  ) : (

                    <div className="image-placeholder">
                      BY DARINE
                    </div>

                  )}

                </div>


                {/* PRODUCT DETAILS */}

                <div className="cart-product-details">

                  <p className="cart-product-label">
                    BY DARINE
                  </p>

                  <h2>
                    {item.name}
                  </h2>

                  <p className="cart-quantity">
                    Quantity{" "}
                    <span>
                      × {item.qty}
                    </span>
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>


                {/* PRICE */}

                <div className="cart-product-price">

                  $
                  {(
                    item.price * item.qty
                  ).toFixed(2)}

                </div>

              </div>

            ))}

          </div>


          {/* =========================================
              CHECKOUT CARD
          ========================================= */}

          <aside className="checkout-card">

            <div className="checkout-heading">

              <p>
                ORDER DETAILS
              </p>

              <h2>
                Complete
                <br />
                <em>your order.</em>
              </h2>

            </div>


            {/* CUSTOMER FORM */}

            <form onSubmit={sendWhatsApp}>

              {/* NAME */}

              <div className="form-group">

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


              {/* PHONE */}

              <div className="form-group">

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


              {/* EMAIL */}

              <div className="form-group">

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


              {/* DIVIDER */}

              <div className="checkout-divider"></div>


              {/* SUMMARY */}

              <div className="checkout-summary">

                <div>
                  <span>
                    Subtotal
                  </span>

                  <span>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div>
                  <span>
                    Delivery
                  </span>

                  <span>
                    To be confirmed
                  </span>
                </div>

              </div>


              {/* TOTAL */}

              <div className="checkout-total">

                <span>
                  Total
                </span>

                <strong>
                  ${total.toFixed(2)}
                </strong>

              </div>


              {/* =========================================
                  WHATSAPP BUTTON
              ========================================= */}

              <button
                type="submit"
                className="whatsapp-btn"
              >

                <span>
                  Order on WhatsApp
                </span>

                <span className="button-arrow">
                  →
                </span>

              </button>


              {/* =========================================
                  EMAIL BUTTON
              ========================================= */}

              <button
                type="button"
                className="email-btn"
                onClick={sendEmail}
              >

                <span>
                  Order via Email
                </span>

                <span className="button-arrow">
                  →
                </span>

              </button>


              {/* NOTE */}

              <p className="checkout-note">
                Your order details will be sent
                directly to ByDarine.
              </p>

            </form>

          </aside>

        </section>

      )}

    </main>
  );
}