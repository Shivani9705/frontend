import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-left col-6 col-sm-6 col-md-3">
                        <div className="logo-box">
                            <img src="/logo.png" alt="doList" className="footer-logo" />
                            <h3>doList</h3>
                        </div>

                        <p>
                            Subscribe to our newsletter for the latest features and updates delivered to you.
                        </p>

                        <div className="newsletter">
                            <input type="email" placeholder="Your email here" />
                            <button>Join</button>
                        </div>

                        <small>
                            By subscribing, you consent to our Privacy Policy and agree to receive updates.
                        </small>
                    </div>
                    <div className="footer-rightcol-6 col-sm-6 col-md-3">
                        <div className="footer-links">
                            <h4>Useful Links</h4>
                            <a href="/">Home Page</a>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/blog">Blog Posts</a>
                            <a href="/faq">FAQs</a>
                        </div>
                    </div>
                    <div className="footer-rightcol-6 col-sm-6 col-md-3">
                        <div className="footer-resources">
                            <h4>Resources</h4>
                            <a href="/help">Help Center</a>
                            <a href="/guide">User Guide</a>
                            <a href="/community">Community Forum</a>
                            <a href="/feedback">Feedback</a>
                            <a href="/support">Support</a>
                        </div>
                    </div>
                    <div className="footer-rightcol-6 col-sm-6 col-md-3">
                        <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                    <a href="#"><FontAwesomeIcon icon={faXTwitter} /> X</a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© 2024 Cloverne. All rights reserved.</p>

                <div className="bottom-links">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/cookies">Cookie Settings</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
