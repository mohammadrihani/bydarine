import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./footer/Footer";

import Home from "./Home";
import Products from "./products/Products";
import About from "./about/About";
import Cart from "./cart/Cart";
import Faq from "./faq/Faq";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;