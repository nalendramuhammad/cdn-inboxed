"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login-page">
      {/* Left Section with background image and overlay */}
      <div className="left-section">
        <div className="overlay" />
        <div className="wrap-section">
          <div className="atas">
            <Link
              href="/"
              className="back-button"
            >
              <img
                src="/logo/inboxed.svg"
                alt="Logo"
                className="logo"
              />
            </Link>
          </div>
          <div className="bawah">
            <p>You bring the vision, we bring the code</p>
          </div>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="form-container">
          <Link
            href="/"
            className="form-logo"
          >
            <img
              src="/logo/inboxed-black.svg"
              alt="Logo"
              className="logo"
            />
          </Link>
          <div className="form-title">
            {" "}
            <h2>Your next great idea starts here Sign in Now</h2>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Sign in
            </button>
          </form>
          <div className="foot">
            <p>
              Any inquiries?{" "}
              <Link
                href="/contact"
                className="inquiries"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
