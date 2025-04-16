import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="error-page">
      <Header />
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn&apos;t exist.</p>
      <div className="error-content">
        <button
          onClick={handleRedirect}
          className="go-home-btn"
        >
          Go Back to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
