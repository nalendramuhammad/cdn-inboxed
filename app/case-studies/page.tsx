// File: frontend/app/home/page.tsx

export default function CaseStudiesPage() {
  return (
    <>
      <section className="studies-wrap">
        <div className="studies-overlay"></div>
        <div className="studies-content">
          <h1>How Our Solutions Fit Your Workflow</h1>
        </div>
      </section>
      <section className="our-studies-section">
        <div className="our-studies-section-header">
          <div className="our-studies-section-title-wrap">
            <span className="our-studies-section-subtitle">Case Studies</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="our-studies-section-grid">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="our-studies-section-item"
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
