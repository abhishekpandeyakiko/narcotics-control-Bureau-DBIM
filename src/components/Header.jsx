import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Navbar.scss";

function Header() {
    const [language, setLanguage] = useState("English");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isNoticeBoardOpen, setIsNoticeBoardOpen] = useState(false);
    const location = useLocation();

    const isMediaActive = () => {
        const mediaRoutes = [
            "/media",
            "/media/awareness-videos",
            "/media/photo-gallery",
            "/media/video-gallery"
        ];
        return mediaRoutes.some(path => location.pathname === path);
    };

    const isNoticeBoardActive = () => {
        const noticeRoutes = [
            "/notice-board",
            "/media/latest-news",
            "/media/press-release",
            "/tenders",
            "/media/former-head"
        ];
        return noticeRoutes.some(path => location.pathname === path);
    };

    const isAboutActive = () => {
        const aboutRoutes = ["/about", "/organization"];
        return aboutRoutes.some(path => location.pathname === path);
    };

    const isDirectoryActive = () => {
        const dirRoutes = ["/directory", "/directory/officers-staff"];
        return dirRoutes.some(path => location.pathname === path);
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setIsMediaOpen(false); // Reset accordion on close
    };

    const toggleMediaAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            setIsMediaOpen(!isMediaOpen);
            setIsDirectoryOpen(false);
            setIsNoticeBoardOpen(false);
        }
    };

    const toggleNoticeBoardAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            setIsNoticeBoardOpen(!isNoticeBoardOpen);
            setIsAboutOpen(false);
            setIsMediaOpen(false);
            setIsDirectoryOpen(false);
        }
    };

    const toggleDirectoryAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            setIsDirectoryOpen(!isDirectoryOpen);
            setIsMediaOpen(false);
            setIsAboutOpen(false);
            setIsNoticeBoardOpen(false);
        }
    };

    const toggleAboutAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            setIsAboutOpen(!isAboutOpen);
            setIsMediaOpen(false);
            setIsDirectoryOpen(false);
            setIsNoticeBoardOpen(false);
        }
    };

    return (
        <header className="gov-header">
            {/* Top Utility Bar (GIGW Standard) */}
            <div className="header-utility-bar">
                <div className="container utility-content">
                    <div className="utility-left">
                        <a href="#main-content" className="utility-link">Skip to main content</a>
                        <span className="utility-sep">|</span>
                        <a href="/screen-reader" className="utility-link">Screen Reader Access</a>
                    </div>
                    <div className="utility-right">
                        <div className="accessibility-tools">
                            <button className="tool-btn" aria-label="Decrease font size">A-</button>
                            <button className="tool-btn" aria-label="Normal font size">A</button>
                            <button className="tool-btn" aria-label="Increase font size">A+</button>
                        </div>
                        <span className="utility-sep">|</span>
                        <button className="icon-btn lang-toggle-btn" aria-label="Language Toggle" onClick={toggleLanguage}>
                            <i className="bi bi-translate"></i>
                            <span className="lang-text">{language === "English" ? "हिन्दी" : "English"}</span>
                        </button>
                        <span className="utility-sep">|</span>
                        <button className="icon-btn" aria-label="Sitemap">
                            <i className="bi bi-sitemap"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Branding Section */}
            <div className="header-main-branding">
                <div className="container branding-container">
                    <div className="branding-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem of India" className="gov-emblem" />
                        <div className="brand-divider"></div>
                        <img src="/logo.svg" alt="NCB Logo" className="ncb-logo-main" />
                        <div className="brand-text-col">
                            <span className="brand-gov-text">Government of India</span>
                            <h1 className="brand-org-name">Narcotics Control Bureau</h1>
                            <span className="brand-org-hindi">नारकोटिक्स कंट्रोल ब्यूरो</span>
                        </div>
                    </div>

                    <div className="branding-right">
                        <div className="search-wrapper-modern">
                            <div className="search-pill">
                                <input type="text" placeholder="Search website..." className="search-input-field" aria-label="Search website" />
                                <button className="search-submit-btn" aria-label="Submit Search"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div className="campaign-logos">
                            <img src="/digital_india.svg" alt="Digital India" className="digital-logo" />
                            <img src="/swachh_bharat.png" alt="Swachh Bharat" className="swachh-logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Navigation */}
            <div className={`header-nav-wrapper ${isMenuOpen ? "sidebar-active" : ""}`}>
                <div className="container nav-container-flex">
                    {/* Mobile Hamburger Button */}
                    <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        <div className={`hamburger-icon ${isMenuOpen ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <nav className={`main-nav ${isMenuOpen ? "show-sidebar" : ""}`}>
                        {/* Sidebar Header with Logo and Close Button */}
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <img src="/logo.svg" alt="NCB Logo" className="sidebar-logo" />
                                <div className="sidebar-brand-text">
                                    <span className="side-org-name">NCB</span>
                                </div>
                            </div>
                            <button className="close-sidebar-btn" onClick={toggleMenu} aria-label="Close Menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <ul className="nav-links">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className={`nav-dropdown-li ${isAboutOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/about" className={`nav-item ${isAboutActive() ? "active" : ""}`} onClick={toggleAboutAccordion}>
                                    About NCB <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/about" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Profile</NavLink></li>
                                    <li><NavLink to="/organization" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Organization Structure</NavLink></li>
                                </ul>
                            </li>
                            <li className={`nav-dropdown-li ${isMediaOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/media" className={`nav-item ${isMediaActive() ? "active" : ""}`} onClick={toggleMediaAccordion}>
                                    Media <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">

                                    <li><NavLink to="/media/awareness-videos" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Awareness Videos</NavLink></li>
                                    <li><NavLink to="/media/photo-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Photo Gallery</NavLink></li>
                                    <li><NavLink to="/media/video-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Video Gallery</NavLink></li>

                                </ul>
                            </li>
                            <li>
                                <NavLink to="/career" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    Career
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dlea" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    DLEA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/rti" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    RTI
                                </NavLink>
                            </li>
                            <li className={`nav-dropdown-li ${isNoticeBoardOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/notice-board" className={`nav-item ${isNoticeBoardActive() ? "active" : ""}`} onClick={toggleNoticeBoardAccordion}>
                                    Notice Board <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/media/latest-news" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Latest News</NavLink></li>
                                    <li><NavLink to="/media/press-release" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Press Release</NavLink></li>
                                    <li><NavLink to="/tenders" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Tender</NavLink></li>
                                    <li><NavLink to="/media/former-head" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Former NCB Head</NavLink></li>
                                </ul>
                            </li>
                            <li className={`nav-dropdown-li ${isDirectoryOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/directory" className={`nav-item ${isDirectoryActive() ? "active" : ""}`} onClick={toggleDirectoryAccordion}>
                                    Directory <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/directory/officers-staff" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Officers/Staff</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-action-li">
                                <button className="submit-tip-nav-btn">
                                    <span className="btn-icon">📢</span>
                                    Submit A Tip
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Overlay */}
                    {isMenuOpen && <div className="side-overlay" onClick={toggleMenu}></div>}
                </div>
            </div>
        </header>
    );
}

export default Header;