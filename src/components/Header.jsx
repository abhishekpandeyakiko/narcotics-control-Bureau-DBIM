import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/Navbar.scss";

function Header() {
    const [language, setLanguage] = useState("English");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isNoticeBoardOpen, setIsNoticeBoardOpen] = useState(false);
    const [isOperationsOpen, setIsOperationsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isDLEAOpen, setIsDLEAOpen] = useState(false);
    const [isHandBookOpen, setIsHandBookOpen] = useState(false);
    const location = useLocation();

    const isMediaActive = () => {
        const mediaRoutes = [
            "/media",
            "/media/awareness-videos",
            "/media/photo-gallery",
            "/media/video-gallery",
            "/media/visitor-photos",
            "/media/officer-visits",
            "/publication",
            "/awareness/spandan",
            "/awareness/cbse-mou",
            "/media/annual-reports"
        ];
        return mediaRoutes.some(path => location.pathname === path);
    };

    const isNoticeBoardActive = () => {
        const noticeRoutes = [
            "/notice-board",
            "/latest-news",
            "/press-release",
            "/tenders",
            "/former-head",
            "/circulars",
            "/notifications",
            "/recruitment-rules",
            "/draft-recruitment-rules",
            "/judgements",
            "/media/latest-news",
            "/media/press-release",
            "/media/former-head"
        ];
        return noticeRoutes.some(path => location.pathname === path);
    };

    const isAboutActive = () => {
        const aboutRoutes = ["/about", "/organization", "/ncb-history", "/legislations", "/coordination", "/vigilance", "/bilateral-agreements", "/mou", "/motto-mission-vision"];
        return aboutRoutes.some(path => location.pathname === path);
    };

    const isOperationsActive = () => {
        const opRoutes = ["/policy-strategy", "/drugs-of-abuse", "/seizures", "/disposal-of-drugs", "/training"];
        return opRoutes.some(path => location.pathname === path);
    };

    const isDirectoryActive = () => {
        const dirRoutes = ["/directory", "/directory/officers-staff", "/employee-corner"];
        return dirRoutes.some(path => location.pathname === path);
    };

    const isResourcesActive = () => {
        const resRoutes = ["/rti", "/download-forms", "/forensic-labs", "/rehab-centres", "/related-links"];
        return resRoutes.some(path => location.pathname === path);
    };

    const isDLEAActive = () => {
        const dleaRoutes = ["/dlea/handbook-en", "/dlea/handbook-hi", "/dlea/handbook-pj"];
        return dleaRoutes.some(path => location.pathname.startsWith(path));
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsMediaOpen(false);
            setIsAboutOpen(false);
            setIsDirectoryOpen(false);
            setIsNoticeBoardOpen(false);
            setIsOperationsOpen(false);
            setIsResourcesOpen(false);
            setIsDLEAOpen(false);
            setIsHandBookOpen(false);
        }
    };

    const resetAccordions = () => {
        setIsAboutOpen(false);
        setIsMediaOpen(false);
        setIsDirectoryOpen(false);
        setIsNoticeBoardOpen(false);
        setIsOperationsOpen(false);
        setIsResourcesOpen(false);
        setIsDLEAOpen(false);
        setIsHandBookOpen(false);
    };

    const toggleMediaAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isMediaOpen;
            resetAccordions();
            setIsMediaOpen(targetState);
        }
    };

    const toggleNoticeBoardAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isNoticeBoardOpen;
            resetAccordions();
            setIsNoticeBoardOpen(targetState);
        }
    };

    const toggleDirectoryAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isDirectoryOpen;
            resetAccordions();
            setIsDirectoryOpen(targetState);
        }
    };

    const toggleAboutAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isAboutOpen;
            resetAccordions();
            setIsAboutOpen(targetState);
        }
    };

    const toggleOperationsAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isOperationsOpen;
            resetAccordions();
            setIsOperationsOpen(targetState);
        }
    };

    const toggleResourcesAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isResourcesOpen;
            resetAccordions();
            setIsResourcesOpen(targetState);
        }
    };

    const toggleDLEAAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isDLEAOpen;
            resetAccordions();
            setIsDLEAOpen(targetState);
        }
    };

    const toggleHandBookAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            e.preventDefault();
            setIsHandBookOpen(!isHandBookOpen);
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
                                    <li><NavLink to="/motto-mission-vision" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Motto, Mission & Vision</NavLink></li>
                                    <li><NavLink to="/organization" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Organization Structure</NavLink></li>
                                    <li><NavLink to="/ncb-history" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>NCB History</NavLink></li>
                                    <li><NavLink to="/legislations" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Legislations and Directive Principles</NavLink></li>
                                    <li><NavLink to="/coordination" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Coordination</NavLink></li>
                                    <li><NavLink to="/mou" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>MoU with CBSE</NavLink></li>
                                    <li><NavLink to="/vigilance" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Vigilance Section</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isOperationsOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/policy-strategy" className={`nav-item ${isOperationsActive() ? "active" : ""}`} onClick={toggleOperationsAccordion}>
                                    Operations <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/policy-strategy" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Policy Strategy & Mechanism</NavLink></li>
                                    <li><NavLink to="/drugs-of-abuse" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Drugs of Abuse</NavLink></li>
                                    <li><NavLink to="/seizures" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Important Seizures</NavLink></li>
                                    <li><NavLink to="/disposal-of-drugs" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Disposal of Drugs</NavLink></li>
                                    <li><NavLink to="/training" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Training</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isMediaOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/media" className={`nav-item ${isMediaActive() ? "active" : ""}`} onClick={toggleMediaAccordion}>
                                    Media <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/media/press-release" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Press Release</NavLink></li>
                                    <li><NavLink to="/awareness/spandan" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Awareness Drive - Mission SPANDAN</NavLink></li>
                                    <li><NavLink to="/media/awareness-videos" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Awareness Videos</NavLink></li>
                                    <li><NavLink to="/awareness/cbse-mou" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>MoU with CBSE</NavLink></li>
                                    <li><NavLink to="/publication" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>NARCONTROL (NCB Magazine)</NavLink></li>
                                    <li><NavLink to="/media/annual-reports" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Annual Reports</NavLink></li>
                                    <li><NavLink to="/media/photo-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Photo Gallery</NavLink></li>
                                    <li><NavLink to="/media/video-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Video Gallery</NavLink></li>
                                    <li><NavLink to="/media/visitor-photos" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Important Visitor's Photo</NavLink></li>
                                    <li><NavLink to="/media/officer-visits" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Visits of NCB Officers</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isNoticeBoardOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/notice-board" className={`nav-item ${isNoticeBoardActive() ? "active" : ""}`} onClick={toggleNoticeBoardAccordion}>
                                    Notice Board <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/media/latest-news" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Latest News</NavLink></li>
                                    <li><NavLink to="/circulars" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Circulars/Orders</NavLink></li>
                                    <li><NavLink to="/notifications" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Notifications</NavLink></li>
                                    <li><NavLink to="/tenders" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Tenders</NavLink></li>
                                    <li><NavLink to="/recruitment-rules" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Recruitment Rules</NavLink></li>
                                    <li><NavLink to="/draft-recruitment-rules" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Draft Recruitment Rules</NavLink></li>
                                    <li><NavLink to="/judgements" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Important Judgements</NavLink></li>
                                    <li><NavLink to="/media/former-head" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Former NCB Head</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isDirectoryOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/directory" className={`nav-item ${isDirectoryActive() ? "active" : ""}`} onClick={toggleDirectoryAccordion}>
                                    Directory <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/directory/officers-staff" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Officers/Staff</NavLink></li>
                                    <li><NavLink to="/employee-corner" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Employee Corner</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isResourcesOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/rti" className={`nav-item ${isResourcesActive() ? "active" : ""}`} onClick={toggleResourcesAccordion}>
                                    Resources <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/rti" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>RTI</NavLink></li>
                                    <li><NavLink to="/forensic-labs" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Forensic Science Laboratories in India</NavLink></li>
                                    <li><NavLink to="/rehab-centres" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Drug Rehabilitation Centres in India</NavLink></li>
                                    <li><NavLink to="/download-forms" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Download Forms</NavLink></li>
                                    <li><NavLink to="/related-links" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Related Links</NavLink></li>
                                </ul>
                            </li>

                            <li className={`nav-dropdown-li ${isDLEAOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/dlea" className={`nav-item ${isDLEAActive() ? "active" : ""}`} onClick={toggleDLEAAccordion}>
                                    DLEA <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li className={`nested-dropdown-li ${isHandBookOpen ? "nested-open" : ""}`}>
                                        <button className="dropdown-item d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-start" onClick={toggleHandBookAccordion}>
                                            Hand Book <span className="dropdown-arrow">▾</span>
                                        </button>
                                        <ul className="nested-menu">
                                            <li><NavLink to="/dlea/handbook-en" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>Drug Law Enforcement Field Officer's Hand Book</NavLink></li>
                                            <li><NavLink to="/dlea/handbook-hi" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>ड्रग विधि प्रवर्तन क्षेत्रीय अधिकारियों की हस्तपुस्तिका</NavLink></li>
                                            <li><NavLink to="/dlea/handbook-pj" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>Drug Law Enforcement Field Officer's Hand Book in Punjabi</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/career" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    Career
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    Contact
                                </NavLink>
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