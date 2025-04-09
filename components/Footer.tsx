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
            offer is not just what's available, but what’s aligned.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Home</h4>
            <ul>
              <li>About Us</li>
              <li>Our Service</li>
              <li>Our Partner</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div>
            <h4>Solution</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
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
