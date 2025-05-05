"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Simpan token ke localStorage
        localStorage.setItem("token", data.token);
        setMessage(data.message);

        // Alihkan ke halaman dashboard
        router.push("/dashboard"); // Arahkan ke dashboard setelah login sukses
      } else {
        setMessage(data.message);
      }
    } catch {
      setMessage("Server error, please try again later.");
    }
  };

  return (
    <div className="login-page">
      {/* Left Section */}
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

      {/* Right Section */}
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
            <h2>Your next great idea starts here Sign in Now</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Sign in
            </button>
          </form>

          {message && <p style={{ color: "red" }}>{message}</p>}

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
