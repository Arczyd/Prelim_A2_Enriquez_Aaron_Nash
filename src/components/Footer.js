import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              AST is dedicated to spreading joy and creating unforgettable
              moments for people all around the world. Join us in our mission to
              surprise and delight.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="text-white text-decoration-none">
                  Profile
                </a>
              </li>
              <li>
                <a href="/settings" className="text-white text-decoration-none">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">© 2025 AST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
