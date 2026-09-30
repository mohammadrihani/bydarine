import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
         <div className="footer-logo">
  <span className="footer-logo-bd">BD</span>
  <span className="footer-logo-name">BYDARINE</span>
</div>
        
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Navigate</h3>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">Our Story</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: bydarinelb@gmail.com</p>
          <p>WhatsApp: +961 71 250 542</p>
        </div>

        {/* Social */}
       {/* Social */}
<div className="footer-social">
  <h3>Follow</h3>

  <a
    href="https://www.instagram.com/bydarine"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@by.darine"
    target="_blank"
    rel="noopener noreferrer"
  >
    TikTok
  </a>
</div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ByDarine. All rights reserved.</p>
      </div>

    </footer>
  );
}