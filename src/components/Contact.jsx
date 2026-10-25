import { useState } from "react";
import { Link } from "react-router-dom";

import paintAccessories from "../assets/image/paint_accessories.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Colour advice",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HueHaven contact form submission:", form);
    setSubmitted(true);
  };

  return (
    <>

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">We would love to hear from you</span>
            <h1>Let's talk colour.</h1>
            <p>
              Have a question about a product or need help planning your next
              painting project? Send us a message.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5" data-aos="fade-right">
                <img
                  src={paintAccessories}
                  alt="Paint supplies ready for a home project"
                  className="contact-image"
                />

                <div className="contact-info-block">
                  <span className="contact-icon">
                    <i className="bi bi-palette2"></i>
                  </span>
                  <div>
                    <h3>Need colour inspiration?</h3>
                    <p>
                      Tell us about your room, surface or painting project.
                      We will use your message as a demo enquiry.
                    </p>
                  </div>
                </div>

                <div className="contact-info-block">
                  <span className="contact-icon">
                    <i className="bi bi-chat-square-text"></i>
                  </span>
                  <div>
                    <h3>Product questions</h3>
                    <p>
                      Include the product name and your question so your
                      enquiry is clear.
                    </p>
                  </div>
                </div>

                <div className="contact-info-block">
                  <span className="contact-icon">
                    <i className="bi bi-brush"></i>
                  </span>
                  <div>
                    <h3>Planning a makeover?</h3>
                    <p>
                      Tell us which room you are refreshing and what style
                      you have in mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-left">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a message</h2>
                  <p>Fill in the details below.</p>

                  {submitted && (
                    <div className="alert alert-success" role="status">
                      Your demo form was submitted successfully.
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="contactName" className="form-label">
                        Your name
                      </label>
                      <input
                        id="contactName"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="contactEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contactSubject" className="form-label">
                        What can we help with?
                      </label>
                      <select
                        id="contactSubject"
                        name="subject"
                        className="form-select"
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option>Colour advice</option>
                        <option>Product enquiry</option>
                        <option>Painting accessories</option>
                        <option>Order enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="contactMessage" className="form-label">
                        Your message
                      </label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        className="form-control"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn hh-btn">
                        Send message
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}