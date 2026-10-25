import { Link } from "react-router-dom";

import livingRoom from "../assets/image/living_room.jpg";
import colorSwatches from "../assets/image/color_swatches.jpg";
import exteriorHouse from "../assets/image/exterior_house.jpg";
import interiorCan from "../assets/image/interior_can.jpg";
import exteriorCan from "../assets/image/exterior_can.jpg";
import woodCan from "../assets/image/wood_can.jpg";
import paintSplash from "../assets/image/paint_splash.jpg";
import paintAccessories from "../assets/image/paint_accessories.jpg";

export default function Home() {
  return (
    <>

      <main>
        {/* HERO */}
        <section className="home-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-up">
                <span className="eyebrow">
                  <i className="bi bi-stars me-2"></i>
                  A little colour goes a long way
                </span>

                <h1>
                  Make room for{" "}
                  <span className="hero-highlight">beautiful living.</span>
                </h1>

                <p className="hero-description">
                  Discover colours that feel like home. From peaceful neutrals
                  to bold statement shades, find the paint that brings your
                  ideas to life.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/products" className="btn hh-btn">
                    Explore paints <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                  <Link to="/about" className="btn hh-btn-outline">
                    Our story
                  </Link>
                </div>

                <div className="hero-note">
                  <span className="hero-note-icon">
                    <i className="bi bi-palette2"></i>
                  </span>
                  <div>
                    <strong>Your space. Your shade.</strong>
                    <p>Inspiration for every corner of your home.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="hero-image-wrap">
                  <img
                    src={livingRoom}
                    alt="Beautifully painted living room"
                    className="hero-image"
                  />
                  <div className="hero-image-tag">
                    <span className="tag-dot"></span>
                    Colours made for living
                  </div>
                  <div className="floating-swatches">
                    <span style={{ background: "#c77c5d" }}></span>
                    <span style={{ background: "#d8c8ac" }}></span>
                    <span style={{ background: "#536c5b" }}></span>
                    <span style={{ background: "#e8dfcf" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="trust-strip">
          <div className="container">
            <div className="row text-center g-3">
              <div className="col-6 col-lg-3">
                <i className="bi bi-palette2"></i>
                <span>Beautiful shades</span>
              </div>
              <div className="col-6 col-lg-3">
                <i className="bi bi-house-heart"></i>
                <span>Every room</span>
              </div>
              <div className="col-6 col-lg-3">
                <i className="bi bi-brush"></i>
                <span>Multiple finishes</span>
              </div>
              <div className="col-6 col-lg-3">
                <i className="bi bi-lightbulb"></i>
                <span>Fresh inspiration</span>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section-padding">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">Find your finish</span>
              <h2>Paint for every part of home.</h2>
              <p>Explore colours and finishes for the spaces you love.</p>
            </div>

            <div className="row g-4">
              {[
                {
                  title: "Interior Paints",
                  description: "Bring warmth and personality into your rooms.",
                  image: interiorCan
                },
                {
                  title: "Exterior Paints",
                  description: "Refresh the look of your home's exterior.",
                  image: exteriorCan
                },
                {
                  title: "Wood Finishes",
                  description: "Give wooden surfaces a beautiful finish.",
                  image: woodCan
                }
              ].map((item, index) => (
                <div className="col-md-4" key={item.title}>
                  <article
                    className="category-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="category-image-wrap">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="category-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link to="/products" className="text-link">
                        Explore category <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLOUR COLLECTION */}
        <section className="colour-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src={colorSwatches}
                  alt="Paint colour swatches"
                  className="rounded-feature-image"
                />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">Your palette awaits</span>
                <h2 className="feature-title">
                  The right colour can change how a room feels.
                </h2>
                <p className="feature-description">
                  Soft earthy shades can create a calm retreat. Rich colours
                  can make a room stand out. Explore a palette that fits your
                  style.
                </p>
                <Link to="/products" className="btn hh-btn">
                  Find your colours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EXTERIOR */}
        <section className="section-padding">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-lg-2">
                <img
                  src={exteriorHouse}
                  alt="House with fresh exterior paint"
                  className="rounded-feature-image"
                />
              </div>
              <div className="col-lg-6 order-lg-1">
                <span className="eyebrow">Beyond four walls</span>
                <h2 className="feature-title">
                  Give your home's exterior a fresh beginning.
                </h2>
                <p className="feature-description">
                  Explore exterior paint options for a refreshed look that
                  complements your home's character.
                </p>
                <Link to="/products" className="text-link">
                  Shop exterior paints <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="inspiration-banner">
          <img src={paintSplash} alt="Colourful paint inspiration" />
          <div className="inspiration-overlay">
            <div className="container">
              <span className="eyebrow light-eyebrow">
                A fresh coat of inspiration
              </span>
              <h2>Every great room starts with a colour.</h2>
              <p>Find your next favourite shade at HueHaven.</p>
              <Link to="/products" className="btn hh-btn-light">
                Shop the collection
              </Link>
            </div>
          </div>
        </section>

        {/* ACCESSORIES */}
        <section className="section-padding">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <span className="eyebrow">Ready to get started?</span>
                <h2 className="feature-title">Small details. Big difference.</h2>
                <p className="feature-description">
                  Explore painting tools and accessories for your next home
                  refresh.
                </p>
                <Link to="/products" className="btn hh-btn">
                  Browse all products
                </Link>
              </div>
              <div className="col-lg-7">
                <img
                  src={paintAccessories}
                  alt="Paint tools and accessories"
                  className="rounded-feature-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}