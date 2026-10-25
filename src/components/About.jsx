import { Link } from "react-router-dom";

import neutralRoom from "../assets/image/neutral_living_room.jpg";
import bedroom from "../assets/image/bedroom.jpg";
import swatches from "../assets/image/color_swatches.jpg";

export default function About() {
  return (
    <>

      <main>
        <section className="about-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <span className="eyebrow light-eyebrow">
                  The HueHaven story
                </span>
                <h1>Good colours make a house feel like yours.</h1>
                <p>
                  We believe choosing paint should be inspiring, simple and
                  personal. HueHaven brings colour ideas and paint essentials
                  together to help you plan your next refresh.
                </p>
                <Link to="/products" className="btn hh-btn-light">
                  Explore our collection
                </Link>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <img
                  src={neutralRoom}
                  alt="A welcoming room with natural colours"
                  className="about-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src={swatches}
                  alt="Colour samples inspiring a home palette"
                  className="rounded-feature-image"
                />
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">Why HueHaven?</span>
                <h2 className="feature-title">
                  A little inspiration for every home.
                </h2>
                <p className="feature-description">
                  Whether you are refreshing one wall or planning a complete
                  room makeover, we want to make it easier to explore colours
                  and finishes that fit your vision.
                </p>

                <div className="about-value">
                  <span><i className="bi bi-palette"></i></span>
                  <div>
                    <h3>Colour inspiration</h3>
                    <p>Explore a variety of shades and room ideas.</p>
                  </div>
                </div>

                <div className="about-value">
                  <span><i className="bi bi-house-heart"></i></span>
                  <div>
                    <h3>Spaces that feel personal</h3>
                    <p>Choose colours that suit your own style.</p>
                  </div>
                </div>

                <div className="about-value">
                  <span><i className="bi bi-brush"></i></span>
                  <div>
                    <h3>More than paint</h3>
                    <p>Find painting tools and accessories in one place.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-quote-section">
          <div className="container">
            <div className="about-quote" data-aos="fade-up">
              <img
                src={bedroom}
                alt="A calm bedroom with coordinated colours"
              />
              <div>
                <span className="eyebrow">Our point of view</span>
                <h2>
                  There is no single perfect colour. There is the colour that
                  feels right to you.
                </h2>
                <p>
                  Let your space reflect the way you live, rest and create.
                </p>
                <Link to="/contact" className="text-link">
                  Talk to us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}