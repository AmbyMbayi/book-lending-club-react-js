import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__details">
        <div className="footer__contact">
          <h3>Contact</h3>
          <p>Opposite Graden City Mall</p>
          <p>info@workpayafrica.com</p>
        </div>

        <div>
          <h3>Information</h3>
          <a href="#">Blogs</a>
          <a href="/books">Books</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <h3>Newsletter</h3>
          <p>Join us for the latest book updates.</p>
        </div>
      </div>

      <div className="copyright__footer">
        <p>(c) 2021 - Workpay Book lending Club</p>
      </div>
    </div>
  );
};

export default Footer;
