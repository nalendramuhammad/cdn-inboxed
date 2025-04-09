import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="about-wrap">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h1>Solving Industry Challenges, Together.</h1>
        </div>
      </section>
      <section className="about-about-us">
        <div className="about-header">
          <div className="title-wrap">
            <span className="about-subtitle">About Us</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about-us-image">
          <img
            src="/image/About Us 2.jpg"
            alt="About Us"
          />
        </div>
      </section>
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <ul className="vision-list">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="vision-images">
            <div className="main-image">
              <img
                src="/image/Card 2.jpg"
                alt="Main"
              />
            </div>
            <div className="side-images">
              <img
                src="/image/Card 1.jpg"
                alt="Side 1"
              />
              <img
                src="/image/Card 3.jpg"
                alt="Side 2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-section-header">
          <div className="mission-section-title-wrap">
            <span className="mission-section-subtitle">Our Mission</span>
          </div>
        </div>
        <div className="mission-section-grid">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="mission-section-item"
              >
                <img
                  src="/image/placeholder.png"
                  alt={`Industry ${index + 1}`}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
