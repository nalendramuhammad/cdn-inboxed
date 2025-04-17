import Logo from "../public/logo/inboxed.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            We curate, recommend, and deliver software with the care of a
            boutique distributor and the depth of a strategic partner. What we
            offer is not just what&apos;s available, but what&apos;s aligned.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <ul className="navigation-footer">
              <li>Home</li>
              <li>About Us</li>
              <li>Industries Solution</li>
              <li>Our Service</li>
              <li>Our Partner</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Automation & AI/ML Services</li>
              <li>Business Solutions & Digital Transformation</li>
              <li>Maintenance & Support Services</li>
              <li>Open Source Solutions & Distribution</li>
              <li>Platform Development & SaaS Solutions</li>
              <li>Software Development Services</li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              <li>Education & E-Learning</li>
              <li>Energy & Utilities</li>
              <li>Financial Services & Banking</li>
              <li>Fleet & Logistics</li>
              <li>Government & Public Sector</li>
              <li>Healthcare & Life Sciences</li>
              <li>Legal & Compliance</li>
              <li>Manufacturing & Supply Chain</li>
              <li>Media & Entertainment</li>
              <li>Retail & E-Commerce</li>
              <li>Telecommunications</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="contact-links">
          <h4>Contact</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Garis pindah ke sini */}
        <div className="footer-divider" />

        <div className="footer-meta">
          <span>© Copyright 2025, All Rights Reserved by Inboxed.id</span>
          <div className="meta-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
