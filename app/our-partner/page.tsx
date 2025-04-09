// File: frontend/app/home/page.tsx

export default function PartnerPage() {
  return (
    <>
      <section className="partner-wrap">
        <div className="partner-overlay"></div>
        <div className="partner-content">
          <h1>Our Network of Excellence</h1>
        </div>
      </section>
      <section className="our-partner-section">
        <div className="our-partner-section-header">
          <div className="our-partner-section-title-wrap">
            <span className="our-partner-section-subtitle">Our Partner</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="our-partner-section-grid">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="our-partner-section-item"
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
