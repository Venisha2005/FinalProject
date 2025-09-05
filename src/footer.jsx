import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>Be the First to Receive the Latest News</h1>
        <button className="signup-btn">Sign Up →</button>
      </div>

      <div className="footer-middle">
        <div className="brand">
         <span className="toggle-btn">
  
</span>



          <span className="brand-name">Brington</span>
        </div>

        <div className="links">
          <div>
            <h4>Navigation</h4>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Social</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>info@mysite.com</p>
            <p>Tel. 123-456-7890</p>
            <p>India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2035 by Brington Inc</p>
        <p>Built with love and caffeine by </p>
      </div>
    </footer>
  );
}
