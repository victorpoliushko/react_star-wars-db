import React from "react";

import "./error-indicator.css";
import icon from "./220px-DeathStar2.jpg";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error-icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we are already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
