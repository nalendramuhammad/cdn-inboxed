import Link from "next/link";

export default function HomePage() {
  const partners = [
    "/image/leantime_logo.png",
    "/image/leantime_logo.png",
    "/image/leantime_logo.png",
    "/image/leantime_logo.png",
    "/image/leantime_logo.png",
    "/image/leantime_logo.png",
  ];

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>
            We turn your ideas into digital solutions that are smart, efficient,
            and ready to scale.
          </h1>
          <p>Bring your Vision into Inboxed Reality</p>
          <Link href="/about">
            <button className="ctaButton">About Us</button>
          </Link>
        </div>
      </section>
      <section className="partner">
        <h3>Our Partner</h3>
        <div className="marquee">
          <div className="marquee-content">
            {partners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner Logo"
                className="partner-logo"
              />
            ))}
            {/* Duplicate logos for seamless loop */}
            {partners.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt="Partner Logo"
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-overlay" />
        <div className="about-container">
          <div className="about-text">
            <span className="about-subtitle">— About Us</span>
            <h2>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="about-button">Learn more</button>
          </div>
          <div className="about-image">
            <img
              src="/image/woman pointing.png"
              alt="About Us"
            />
          </div>
        </div>
      </section>
      <section className="industries">
        <div className="industries-header">
          <div className="title-wrap">
            <span className="industries-subtitle">Industries Solution</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="industries-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industry-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Industry ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="industries-header">
          <div className="title-wrap">
            <span className="industries-subtitle">Our Service</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="industries-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industry-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Industry ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-image">
            <img
              src="/image/CS CARD.jpg"
              alt="Customer Service"
            />
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <h2>Let&apos;s Get In Touch</h2>
              <p>
                or just reach us out at{" "}
                <a href="mailto:service@inboxed.com">service@inboxed.com</a>
              </p>

              <form>
                <div className="form-row">
                  <div className="form-group icon-left">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group icon-left">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group icon-left">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="form-group phone-group">
                    <label>Phone Number</label>
                    <div className="phone-input">
                      <div className="country-code">
                        <img
                          src="/image/flag-id.png"
                          alt="Indonesia Flag"
                        />
                        <span>+62</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group icon-left full">
                    <label>Company Name</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full">
                    <label>Message</label>
                    <textarea></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
