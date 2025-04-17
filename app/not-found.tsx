import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <img
          src="/image/404.svg"
          alt="404 error"
          className="error-image"
        />
        <p>Oops! The page you are looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
