import React from "react";
import "./header.scss";
const HeadBanner = () => {
  return (
    <div className="banner" style={{ backgroundColor: "#7B189F" }}>
        <div className="content">

      <div className="left" style={{ textAlign: "center" }}>
        <a className="leftanchor"
          href="https://www.wayfair.com/make-the-most-of-your-outdoor-space~b228.html"
          style={{color: "#ffffff" }}
          >
            {/* <div> */}
              build your outdoor space for less
              {/* </div> */}
            <svg focusable="false" viewBox="2 2 24 24" aria-hidden="true">
              <path d="M21.46 14.19a.5.5 0 000-.38.36.36 0 00-.11-.16l-6-6a.49.49 0 00-.7.7l5.14 5.15H7a.5.5 0 000 1h12.79l-5.14 5.15a.48.48 0 000 .7.48.48 0 00.7 0l6-6a.36.36 0 00.11-.16z"></path>
            </svg>

        </a>
      </div>

      <div
        className="right"
        style={{ display: "flex", justifyContent: "space-between" }}
        >
        <a
          href="https://www.wayfair.com/the-wayfair-app"
          style={{ color: "#ffffff" }}
          >
          Our App |
        </a>
        <a
          href="https://www.wayfair.com/wayfair-financing~b785.html"
          style={{ color: "#ffffff" }}
          >
          Financing | 
        </a>
        <a
          href="https://www.wayfair.com/v/business_account/application/pico?account_method=56"
          style={{ color: "#ffffff" }}
          >
          Professional |
        </a>

          <a 
            href="https://www.wayfair.com/v/business_account/application/pico?account_method=56"
            style={{ color: "#ffffff" }}
            >
            Free Shipping Over $35*
          </a>

      </div>
              </div>
    </div>
  );
};

export default HeadBanner;
