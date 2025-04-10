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
              Back to Home
            </Link>
            <img
              src="/logo/inboxed.svg"
              alt="Logo"
              className="logo"
            />
          </div>
          <div className="bawah">
            <p>You bring the vision, we bring the code</p>
          </div>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="form-container">
          <div className="form-title">
            <img
              src="/logo/inboxed-black.svg"
              alt="Logo"
              className="logo"
            />
            <h2>
              Your next great idea starts here <br /> Sign in Now
            </h2>
            {/* <h1 className="form-title">Sign in Now</h1> */}
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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
              Any inquiries? <Link href="/Contact">Contact us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
