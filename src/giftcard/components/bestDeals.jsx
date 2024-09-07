import React from "react";
import "./components.scss"; // Import the SCSS file

const BestDealsSection = () => {
  return (
    <div className="bestDeals">
      <div className="left">
        <h2 className="heading">Be the first to know about our best deals!</h2>
        <p className="text">&nbsp;</p>
        <p className="text">
          <a
            href="https://www.wayfair.com/terms?section=privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="right">
        <form className="form-group">

          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BestDealsSection;
