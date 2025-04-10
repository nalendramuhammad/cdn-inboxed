import Link from "next/link";
import ContactForm from "../../components/ContactForm";

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
      <section className="industries-section">
        <div className="wrap">
          <div className="industries-section-header">
            <div className="industries-section-title-wrap">
              <span className="industries-section-subtitle">
                Industreis Solution
              </span>
              <h2>
                We Don&apos;t Just Serve Industries — We Understand Their
                Rhythms
              </h2>
              <p>
                Every industry has its own pace, language, and challenges. At
                Inboxed, we don&apos;t offer one-size-fits-all solutions. We
                listen, observe, and design systems that match the natural flow
                of the people who use them. From finance to education,
                healthcare to logistics — we adapt thoughtfully, not
                generically.
              </p>
            </div>
          </div>
          <div className="industries-section-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industries-section-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Industry ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="wrap">
          <div className="industries-section-header">
            <div className="industries-section-title-wrap">
              <span className="industries-section-subtitle">Our Service</span>
              <h2>Curated Solutions for Visionary Minds</h2>
              <p>
                At Inboxed, we don&apos;t simply deliver technology — we curate
                thoughtful, refined solutions for those who think ahead. Each
                service we provide is a tailored response to your vision, shaped
                with nuance, clarity, and quiet precision. This is technology,
                matured.
              </p>
            </div>
          </div>
          <div className="industries-section-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industries-section-item"
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

      <ContactForm />
    </>
  );
}
