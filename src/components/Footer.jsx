import { NavLink } from "react-router-dom";

import "../styles/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand-column">
                        <div className="footer-brand-center">
                            <img src="/logo.svg" alt="NCB Logo" className="footer-logo-main" />
                            <h2 className="footer-org-name">NARCOTICS CONTROL BUREAU</h2>
                            <p className="footer-motto">Commitment to a Drug Free India.</p>

                            <div className="email-pill-container">
                                <a href="mailto:info@ncb.gov.in" className="email-pill">
                                    <div className="email-pill-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <span className="email-address">info@ncb.gov.in</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading-gold">QUICK LINKS</h4>
                        <ul className="footer-links-list">
                            <li><NavLink to="/feedback">Query/ Feedback</NavLink></li>
                            <li><NavLink to="/recruitments">Recruitments</NavLink></li>
                            <li><NavLink to="/tenders">Tenders</NavLink></li>
                            <li><NavLink to="/citizen-charter">Citizen Charter</NavLink></li>
                            <li><NavLink to="/faq">FAQ's</NavLink></li>
                        </ul>
                    </div>

                    {/* Important Links Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading-gold">IMPORTANT LINKS</h4>
                        <ul className="footer-links-list">
                            <li><NavLink to="/rti">RTI</NavLink></li>
                            <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
                            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-of-use">Terms of Use</NavLink></li>
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading-gold">FOLLOW US</h4>
                        <ul className="footer-links-list">
                            <li><NavLink to="/sitemap">Site Map</NavLink></li>
                            <li><NavLink to="/help">Help</NavLink></li>
                        </ul>

                        <div className="footer-social-circles">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link-external social-circle-btn"><i className="bi bi-instagram"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link-external social-circle-btn"><i className="bi bi-facebook"></i></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link-external social-circle-btn"><i className="bi bi-youtube"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link-external social-circle-btn"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <div className="container footer-bottom-flex">
                    <div className="bottom-left-info">
                        <p>© 2025 This site is <strong>designed, developed and maintained by Narcotics Control Bureau</strong></p>
                        <p>Ministry of Home Affairs, Govt. of India</p>
                    </div>

                    <div className="bottom-right-stats">
                        <div className="stat-item">
                            <span>Total Visitors: <strong>12465879</strong></span>
                        </div>
                        <div className="stat-sep">|</div>
                        <div className="stat-item">
                            <span>Last Updated Date: <strong>20 August, 2024</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;