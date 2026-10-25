import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import { useCart } from "../context/CartContext";
import logo from "../assets/image/logo.png";

export default function Layout() {
  const { cartCount } = useCart();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const t = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg hh-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand hh-brand" to="/">
            <img src={logo} alt="HueHaven logo" className="brand-logo" />
            <span>Hue<span className="brand-accent">Haven</span></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><NavLink end className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/products">Our Paints</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              <li className="nav-item ms-lg-3">
                <NavLink className="nav-cart" to="/cart">
                  <i className="bi bi-bag"></i> Cart
                  <span className="cart-count">{cartCount}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="hh-footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <h3 className="footer-brand">Hue<span>Haven</span></h3>
              <p>Thoughtfully chosen colours and quality paints to make every space feel like yours.</p>
            </div>
            <div className="col-6 col-lg-3">
              <h6>Explore</h6>
              <Link to="/">Home</Link>
              <Link to="/products">Our Paints</Link>
              <Link to="/about">Our Story</Link>
            </div>
            <div className="col-6 col-lg-4">
              <h6>Get in touch</h6>
              <Link to="/contact">Contact our team</Link>
              <p className="footer-small">Find your perfect shade.</p>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} HueHaven Paints.</span>
            <span>Colour your world, your way.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
