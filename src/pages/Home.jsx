import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/Home.scss";

// Importing slider images
import slider1 from "../assets/slider/slider1.jpg";
import slider2 from "../assets/slider/slider2.png";
import slider3 from "../assets/slider/slider3.jpg";
import slider4 from "../assets/slider/apexncord.jpg";
import dgProfile from "../assets/profile.jpeg";

// Importing Gallery Images
import g1 from "../assets/gallary-img/10trainee-bsf.jpeg";
import g2 from "../assets/gallary-img/11apppa-51batch.jpeg";
import g3 from "../assets/gallary-img/12induction-training-si.jpeg";
import g4 from "../assets/gallary-img/1mou-ncb-capt-bprd.jpeg";
import g5 from "../assets/gallary-img/2mou-ncb-bprdcapt.jpeg";
import g6 from "../assets/gallary-img/3mou-ncb-capt.jpeg";
import g7 from "../assets/gallary-img/3ncbdg.jpeg";
import g8 from "../assets/gallary-img/4antf.jpeg";
import g9 from "../assets/gallary-img/4ncbadg.jpeg";
import g10 from "../assets/gallary-img/5martime.jpeg";
import g11 from "../assets/gallary-img/8trainee-bsf.jpeg";
import g12 from "../assets/gallary-img/9trainee-iis.jpeg";

// Portal Logos
import manasLogo from "../assets/link-img/MANAS_LogoE.jpeg";
import pmnrfLogo from "../assets/link-img/PMNRF.png";
import dataGovLogo from "../assets/link-img/data-gov.png";
import goLogo from "../assets/link-img/go.png";
import iigLogo from "../assets/link-img/iig.png";
import indiaGovLogo from "../assets/link-img/india-gov.png";
import myGovLogo from "../assets/link-img/mygov.png";
import nidaanLogo from "../assets/link-img/niddan.png";
import swachhLogo from "../assets/link-img/swach-bharat.png";
import ncbLogo from "../assets/logo.svg";


const slides = [
    {
        id: 1,
        image: slider1,
        title: "Securing the Nation from Narcotics",
        description: "The Narcotics Control Bureau is committed to a drug-free India through persistent enforcement and awareness."
    },
    {
        id: 2,
        image: slider2,
        title: "Modern Intelligence & Enforcement",
        description: "Utilizing state-of-the-art technology and intelligence networks to dismantle global drug trafficking rings."
    },
    {
        id: 3,
        image: slider3,
        title: "Awareness & Community Engagement",
        description: "Empowering the youth and communities to resist drug abuse through nationwide educational programs."
    },
    {
        id: 4,
        image: slider4,
        title: "Strategic Cooperation & NCORD",
        description: "Strengthening the institutional mechanism for multi-agency coordination in drug law enforcement."
    }
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTickerPaused, setIsTickerPaused] = useState(false);

    const [isNewsPlaying, setIsNewsPlaying] = useState(true);
    const [isPressPlaying, setIsPressPlaying] = useState(true);
    const [isActivityPlaying, setIsActivityPlaying] = useState(true);

    // Hover states for scrolling boxes
    const [isNewsHovered, setIsNewsHovered] = useState(false);
    const [isPressHovered, setIsPressHovered] = useState(false);
    const [isActivityHovered, setIsActivityHovered] = useState(false);

    // Refs for scroll containers
    const newsScrollRef = useRef(null);
    const pressScrollRef = useRef(null);
    const activityScrollRef = useRef(null);
    const portalsScrollRef = useRef(null);

    // Draggable Portals Slider Logic
    const [isPortalsDragging, setIsPortalsDragging] = useState(false);
    const [isPortalsHovered, setIsPortalsHovered] = useState(false);
    const [isPortalsPlaying, setIsPortalsPlaying] = useState(true);
    const [portalsStartX, setPortalsStartX] = useState(0);
    const [portalsScrollLeft, setPortalsScrollLeft] = useState(0);

    const handleExternalLink = (e, url) => {
        e.preventDefault();
        const confirmExit = window.confirm("You are being redirected to an external website. Do you want to continue?");
        if (confirmExit) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    const handlePortalsMouseDown = (e) => {
        setIsPortalsDragging(true);
        setPortalsStartX(e.pageX - portalsScrollRef.current.offsetLeft);
        setPortalsScrollLeft(portalsScrollRef.current.scrollLeft);
    };

    const handlePortalsMouseMove = (e) => {
        if (!isPortalsDragging) return;
        e.preventDefault();
        const x = e.pageX - portalsScrollRef.current.offsetLeft;
        const walk = (x - portalsStartX) * 2; // Drag speed multiplier
        portalsScrollRef.current.scrollLeft = portalsScrollLeft - walk;
    };

    const stopPortalsDragging = () => {
        setIsPortalsDragging(false);
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, nextSlide]);

    // JS Scroll Animation Effect
    useEffect(() => {
        let animationFrameId;
        const scrollStep = 0.5; // Controls scroll speed

        const performScroll = () => {
            const boxes = [
                { ref: newsScrollRef, playing: isNewsPlaying, hovered: isNewsHovered },
                { ref: pressScrollRef, playing: isPressPlaying, hovered: isPressHovered },
                { ref: activityScrollRef, playing: isActivityPlaying, hovered: isActivityHovered }
            ];

            boxes.forEach(box => {
                if (box.ref.current && box.playing && !box.hovered) {
                    const container = box.ref.current;
                    container.scrollTop += scrollStep;

                    // If it reaches the end (halfway through duplicated data), reset to top
                    if (container.scrollTop >= container.scrollHeight / 2) {
                        container.scrollTop = 0;
                    }
                }
            });

            // Horizontal scroll for portals
            if (portalsScrollRef.current && !isPortalsDragging && !isPortalsHovered && isPortalsPlaying) {
                const container = portalsScrollRef.current;
                container.scrollLeft += 0.8; // Portals speed
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }

            animationFrameId = requestAnimationFrame(performScroll);
        };

        animationFrameId = requestAnimationFrame(performScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isNewsPlaying, isPressPlaying, isActivityPlaying, isNewsHovered, isPressHovered, isActivityHovered, isPortalsHovered, isPortalsDragging, isPortalsPlaying]);

    // GALLERY CAROUSEL LOGIC
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isGalleryPlaying, setIsGalleryPlaying] = useState(true);
    const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

    const nextGallery = useCallback(() => {
        setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, [galleryImages.length]);

    const prevGallery = () => {
        setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        let interval;
        if (isGalleryPlaying) {
            interval = setInterval(nextGallery, 3000);
        }
        return () => clearInterval(interval);
    }, [isGalleryPlaying, nextGallery]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <div className="home-container">
            {/* Hero Slider Section */}
            <section className="hero-slider" aria-label="Hero Image Slider">
                <div className="slider-track"
                    style={{ "--current-slide": currentIndex }} >
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide">
                            {/* Blurred Background Layer */}
                            <div className="slide-bg-blur">
                                <img src={slide.image} alt="" aria-hidden="true" />
                            </div>
                            {/* Main Foreground Image (No Cropping) */}
                            <div className="slide-image-container">
                                <img src={slide.image} alt={slide.title} className="foreground-img" />
                            </div>
                            <div className="slide-overlay">
                                <div className="container">
                                    <div className="slide-caption">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description}</p>
                                        <button className="slider-cta-btn">Read More ➔</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Navigation Controls */}
                <button
                    className="slider-control prev-btn"
                    onClick={prevSlide}
                    aria-label="Previous Slide" >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className="slider-control next-btn"
                    onClick={nextSlide}
                    aria-label="Next Slide" >
                    <i className="bi bi-chevron-right"></i>
                </button>

                {/* GIGW Utility Controls */}
                <div className="slider-utils">
                    <button className={`util-btn ${isPlaying ? "playing" : "paused"}`}
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause Automatic Slideshow" : "Play Automatic Slideshow"}
                    >
                        <span className="util-icon"> {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}</span>
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === currentIndex ? "true" : "false"}
                        />
                    ))}
                </div>
            </section>

            {/* Announcement Bar Section - Matching Screenshot */}
            <section className="announcement-bar-section">
                <div className="container announcement-wrapper">
                    <div className="announcement-label">
                        <span className="badge-red">ANNOUNCEMENT</span>
                        <button className="pause-btn" onClick={() => setIsTickerPaused(!isTickerPaused)} aria-label={isTickerPaused ? "Play Ticker" : "Pause Ticker"}>
                            <span className="pause-icon">{isTickerPaused ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}</span>
                        </button>
                    </div>

                    <div className="ticker-wrapper">
                        <div className={`ticker-content ${isTickerPaused ? "paused" : ""}`}>
                            <p>Live webcast of Police Commemoration Day Parade, National Police Memorial, New Delhi on October 21 from 0800 hrs</p>
                        </div>
                    </div>

                    <a href="/announcements" className="view-all-link">
                        View All <span className="arrow">→</span>
                    </a>
                </div>
            </section>

            {/* National Policy & Legislative Framework - REDESIGN BASED ON MOCKUP */}
            <section className="about-mockup-section" id="about-us">
                <div className="container about-mockup-wrapper">
                    <div className="about-mockup-grid">

                        {/* Left Content Side */}
                        <div className="about-mockup-left">
                            <span className="capsule-tag-blue">Constitutional Mandate</span>
                            <h2 className="mockup-main-title">National Policy & Legislative Framework</h2>

                            <div className="mockup-intro-text">
                                <p>The National Policy on Narcotic Drugs is rooted in <strong>Article 47</strong> of the Indian Constitution, directing the State to endeavour to bring about prohibition of the consumption of intoxicating drugs injurious to health.</p>
                                <p className="mt-3">This constitutional provision is further guided by India’s commitment as a signatory to international conventions:</p>
                                <ul className="mockup-check-list">
                                    <li><i className="bi bi-check-circle-fill"></i> Single Convention on Narcotic Drugs, 1961</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Convention on Psychotropic Substances, 1971</li>
                                    <li><i className="bi bi-check-circle-fill"></i> UN Convention against Illicit Traffic, 1988</li>
                                </ul>
                            </div>

                            <div className="mockup-legislative-section">
                                <h3 className="mockup-sub-title">Broad Legislative Policy</h3>
                                <p className="mockup-sub-desc">The legislative framework is contained in three Central Acts:</p>

                                <div className="law-horizontal-row">
                                    <div className="law-mini-item">
                                        <span className="law-year-v">1940</span>
                                        <p>Drugs & Cosmetics Act</p>
                                    </div>
                                    <div className="law-mini-item active">
                                        <span className="law-year-v">1985</span>
                                        <p>The NDPS Act</p>
                                    </div>
                                    <div className="law-mini-item">
                                        <span className="law-year-v">1988</span>
                                        <p>Prevention of Illicit Traffic Act</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mockup-establish-callout">
                                <p>The <strong>Narcotics Control Bureau</strong> was constituted on 17th March 1986 as the Central Authority under the NDPS Act, 1985 to coordinate drug abuse control functions across various Ministries and Departments.</p>
                            </div>

                            <button className="mockup-read-more-btn">
                                Read More about NCB <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>

                        {/* Right Zero Tolerance Card */}
                        <div className="about-mockup-right">
                            <div className="zero-tolerance-card">
                                <div className="zt-icon-box">
                                    <i className="bi bi-scales"></i>
                                </div>
                                <h3 className="zt-title">Zero Tolerance</h3>
                                <p className="zt-desc">Committed to a Drug-Free India through Intelligence, Enforcement & Coordination.</p>

                                <div className="zt-stats-container">
                                    <div className="zt-stat-box">
                                        <span className="zt-stat-value">1986</span>
                                        <span className="zt-stat-label">Established</span>
                                    </div>
                                    <div className="zt-divider"></div>
                                    <div className="zt-stat-box">
                                        <span className="zt-stat-value">24x7</span>
                                        <span className="zt-stat-label">Enforcement</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* MESSAGE FROM DG Section */}
            <section className="dg-screenshot-section">
                <div className="container dg-screenshot-wrapper">
                    <div className="dg-card-outer">
                        <div className="dg-card-inner">
                            <div className="dg-card-photo">
                                <img src={dgProfile} alt="Shri Anurag Garg" />
                            </div>
                            <div className="dg-card-info">
                                <h3>Shri Anurag Garg, IPS</h3>
                                <p>Director General, NCB</p>
                                <div className="orange-line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="dg-msg-content">
                        <div className="dg-msg-eyebrow">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem of India" className="msg-emblem" />
                            <span>MESSAGE FROM THE DIRECTOR GENERAL</span>
                        </div>
                        <h2 className="dg-msg-title">Guardians of a <span className="blue-text">Healthy Nation</span></h2>
                        <div className="dg-msg-body">
                            <p className="dg-quote">"The Narcotics Control Bureau is the guardian of our nation's future, protecting youth and families from the scourge of drugs."</p>
                            <div className="dg-text-main">
                                <p>We are adopting a zero-tolerance policy while dismantling illicit networks and building a <strong>Nasha Mukt Bharat</strong> through technology and cooperation.</p>
                            </div>
                        </div>
                        <div className="dg-msg-footer">
                            <button className="read-full-btn">Read Full Message</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Updates & Media Section */}
            <section className="updates-media-section">
                <div className="container">
                    <div className="updates-section-header">
                        <h2>Latest Updates & Notifications</h2>
                        <div className="updates-header-controls">
                            <div className="header-nav-dots">
                                <button className="nav-btn prev" aria-label="Previous"><i className="bi bi-chevron-left"></i></button>
                                <button className="nav-btn next" aria-label="Next"><i className="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="updates-grid">
                        {/* Column 1: Recent Activities */}
                        <div className="update-box" onMouseEnter={() => setIsActivityHovered(true)} onMouseLeave={() => setIsActivityHovered(false)}>
                            <div className="update-header">
                                <div className="title-with-icon">
                                    <div className="header-icon pulse-blue"><i className="bi bi-activity"></i></div>
                                    <h3>Recent Activities</h3>
                                </div>
                                <button className="play-pause-header-btn" onClick={() => setIsActivityPlaying(!isActivityPlaying)} title={isActivityPlaying ? "Pause" : "Play"} aria-label={isActivityPlaying ? "Pause Recent Activities" : "Play Recent Activities"}>
                                    {isActivityPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                                </button>
                            </div>
                            <div className="update-scroll-container" ref={activityScrollRef}>
                                <div className="update-scroll-content">
                                    {[
                                        { date: "Nov 15, 2024", title: "Destruction of 1500kg seized narcotics at designated facility." },
                                        { date: "Nov 10, 2024", title: "Review meeting chaired by Director General regarding border security." },
                                        { date: "Nov 05, 2024", title: "Training session on cyber-forensics for new recruits conducted." },
                                        { date: "Oct 28, 2024", title: "NCB officials participate in international anti-drug coordinate meeting." }
                                    ].concat([
                                        { date: "Nov 15, 2024", title: "Destruction of 1500kg seized narcotics at designated facility." },
                                        { date: "Nov 10, 2024", title: "Review meeting chaired by Director General regarding border security." },
                                        { date: "Nov 05, 2024", title: "Training session on cyber-forensics for new recruits conducted." },
                                        { date: "Oct 28, 2024", title: "NCB officials participate in international anti-drug coordinate meeting." }
                                    ]).map((item, i) => (
                                        <div key={i} className="scroll-item border-accent">
                                            <span className="news-date">{item.date}</span>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="update-footer">
                                <a href="/media/activities" className="view-link-btn">View All Activities <span className="arrow">→</span></a>
                            </div>
                        </div>

                        {/* Column 2: Press Releases */}
                        <div className="update-box" onMouseEnter={() => setIsPressHovered(true)} onMouseLeave={() => setIsPressHovered(false)}>
                            <div className="update-header">
                                <div className="title-with-icon">
                                    <div className="header-icon"><i className="bi bi-file-earmark-text"></i></div>
                                    <h3>Press Releases</h3>
                                </div>
                                <button className="play-pause-header-btn" onClick={() => setIsPressPlaying(!isPressPlaying)} title={isPressPlaying ? "Pause" : "Play"} aria-label={isPressPlaying ? "Pause Press Releases" : "Play Press Releases"}>
                                    {isPressPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                                </button>
                            </div>
                            <div className="update-scroll-container" ref={pressScrollRef}>
                                <div className="update-scroll-content">
                                    {[
                                        { date: "Nov 01, 2025", title: "Clarification issued regarding compliance for online pharmacies." },
                                        { date: "Oct 20, 2025", title: "Recruitment notice for the post of Junior Intelligence Officer 2025." },
                                        { date: "Oct 05, 2025", title: "Public Advisory: Identifying and reporting suspicious activities online." },
                                        { date: "Sep 28, 2024", title: "Press Release regarding major operational success in Western Zone." }
                                    ].concat([
                                        { date: "Nov 01, 2025", title: "Clarification issued regarding compliance for online pharmacies." },
                                        { date: "Oct 20, 2025", title: "Recruitment notice for the post of Junior Intelligence Officer 2025." },
                                        { date: "Oct 05, 2025", title: "Public Advisory: Identifying and reporting suspicious activities online." },
                                        { date: "Sep 28, 2024", title: "Press Release regarding major operational success in Western Zone." }
                                    ]).map((item, i) => (
                                        <div key={i} className="scroll-item border-accent">
                                            <span className="news-date">{item.date}</span>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="update-footer">
                                <a href="/media/press-release" className="view-link-btn">View All Press Releases <span className="arrow">→</span></a>
                            </div>
                        </div>

                        {/* Column 3: News Updates */}
                        <div className="update-box" onMouseEnter={() => setIsNewsHovered(true)} onMouseLeave={() => setIsNewsHovered(false)}>
                            <div className="update-header">
                                <div className="title-with-icon">
                                    <div className="header-icon"><i className="bi bi-newspaper"></i></div>
                                    <h3>News Updates</h3>
                                </div>
                                <button className="play-pause-header-btn" onClick={() => setIsNewsPlaying(!isNewsPlaying)} title={isNewsPlaying ? "Pause" : "Play"} aria-label={isNewsPlaying ? "Pause News Updates" : "Play News Updates"}>
                                    {isNewsPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                                </button>
                            </div>
                            <div className="update-scroll-container" ref={newsScrollRef}>
                                <div className="update-scroll-content">
                                    {[
                                        { title: "Training program on darknet investigation concludes at NCB Academy.", isAlert: false },
                                        { title: "MOU signed with Coast Guard for enhanced maritime surveillance.", isAlert: false },
                                        { title: "Warning regarding new psychoactive substances detected in market.", isAlert: true },
                                        { title: "Reporting of suspicious activities across various states.", isAlert: false }
                                    ].concat([
                                        { title: "Training program on darknet investigation concludes at NCB Academy.", isAlert: false },
                                        { title: "MOU signed with Coast Guard for enhanced maritime surveillance.", isAlert: false },
                                        { title: "Warning regarding new psychoactive substances detected in market.", isAlert: true },
                                        { title: "Reporting of suspicious activities across various states.", isAlert: false }
                                    ]).map((item, i) => (
                                        <div key={i} className="scroll-item border-accent news-item">
                                            {item.isAlert && <span className="alert-badge">ALERT</span>}
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="update-footer">
                                <a href="/media/latest-news" className="view-link-btn">Read Recent News <span className="arrow">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Carousel Section */}
            <section className="photo-gallery-carousel-section">
                <div className="container">
                    <div className="gallery-header-flex">
                        <div className="gallery-title-area">
                            <span className="gallery-tag">MEDIA GALLERY</span>
                            <h2>Glimpses of NCB Activities</h2>
                        </div>
                        <div className="gallery-controls">
                            <button className="gallery-nav-btn prev" onClick={prevGallery} aria-label="Previous image"><i className="bi bi-chevron-left"></i></button>
                            <button className="gallery-stop-btn" onClick={() => setIsGalleryPlaying(!isGalleryPlaying)} aria-label={isGalleryPlaying ? "Pause Gallery" : "Play Gallery"}>
                                {isGalleryPlaying ? (
                                    <i className="bi bi-pause-fill"></i>
                                ) : (
                                    <i className="bi bi-play-fill"></i>
                                )}
                            </button>
                            <button className="gallery-nav-btn next" onClick={nextGallery} aria-label="Next image"><i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>

                    <div className="gallery-slider-viewport">
                        <div className="gallery-slider-track"
                            style={{ transform: `translateX(-${galleryIndex * (100 / (window.innerWidth > 992 ? 4 : 2))}%)` }}>
                            {galleryImages.concat(galleryImages.slice(0, 5)).map((img, i) => (
                                <div key={i} className="gallery-slide-item">
                                    <div className="gallery-img-wrapper">
                                        <img src={img} alt={`Gallery ${i + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Combined National Presence & Contact Dashboard */}
            <section className="integrated-presence-contact" id="contact">
                <div className="container">
                    <div className="presence-integrated-grid">
                        {/* Row 1, Col 1: Presence Info */}
                        <div className="presence-info-dash">
                            <span className="network-badge"><i className="bi bi-broadcast"></i> LIVE NETWORK</span>
                            <h2 className="network-title">National <span className="blue-gradient-text">Presence</span></h2>
                            <p className="network-desc">Executing intelligence-led operations through a strategic network of <strong>30 Zonal Offices</strong> across the Indian subcontinent.</p>

                            <div className="network-features-grid">
                                <div className="net-feat-card">
                                    <div className="feat-icon-box"><i className="bi bi-shield-check"></i></div>
                                    <div className="feat-text">
                                        <h4>24/7 Tactical Monitoring</h4>
                                        <p>Executing tactical monitoring operations through 24/7 vigilant surveillance systems.</p>
                                    </div>
                                </div>
                                <div className="net-feat-card">
                                    <div className="feat-icon-box"><i className="bi bi-diagram-3"></i></div>
                                    <div className="feat-text">
                                        <h4>Inter-State Coordination</h4>
                                        <p>Comprehensive inter-state and inter-department coordination for smooth enforcement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 1, Col 2: Cities Box */}
                        <div className="presence-cities-dash">
                            <div className="network-tags-block">
                                <div className="glass-pill-cloud">
                                    {["Agartala", "Ahmedabad", "Amritsar", "Bangalore", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Cochin", "Dehradun", "Delhi", "Goa", "Gorakhpur", "Guwahati", "Hyderabad", "Imphal", "Indore", "Itanagar", "Jaipur", "Jammu", "Jodhpur", "Kolkata", "Lucknow", "Mumbai", "Patna", "Raipur", "Ranchi", "Siliguri", "Srinagar", "Vishakhapatnam"].map(city => (
                                        <span key={city} className="premium-city-tag">{city}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Row 2, Col 1: Dark Contact Card */}
                        <div className="presence-contact-dash">
                            <div className="hq-modern-card">
                                <div className="hq-card-header">
                                    <span className="hq-pin-label"><i className="bi bi-geo-alt-fill"></i> Headquarters</span>
                                </div>

                                <div className="hq-main-info">
                                    <h3 className="hq-org-title">Narcotics Control Bureau</h3>
                                    <address className="hq-address-text">
                                        West Block No. 1, Wing No. 5,<br />
                                        R.K. Puram, New Delhi - 110066
                                    </address>
                                </div>

                                <div className="hq-contact-flex-row">
                                    <div className="hq-info-row">
                                        <div className="info-label">CONTROL ROOM</div>
                                        <div className="info-values">
                                            <a href="tel:+911126761000">+91-11-26761000</a>
                                            <a href="tel:+911126761144">+91-11-26761144</a>
                                        </div>
                                    </div>

                                    <div className="hq-info-row">
                                        <div className="info-label">EMAIL SUPPORT</div>
                                        <div className="info-values">
                                            <a href="mailto:ddge-ncb@nic.in">ddge-ncb@nic.in</a>
                                            <a href="mailto:adenf-ncb@nic.in">adenf-ncb@nic.in</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="hq-card-bottom">
                                    <div className="hq-bottom-left">
                                        <div className="hq-footer-title">General Enquiry</div>
                                        <a href="mailto:adops-ncb@nic.in" className="hq-ops-mail">adops-ncb@nic.in</a>
                                        <span className="hq-ops-label">Operations Division</span>
                                    </div>
                                    <img src="/logo.svg" alt="NCB Emblem" className="hq-card-emblem" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2, Col 2: Map */}
                        <div className="presence-map-dash">
                            <div className="map-container-frame">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.435706599427!2d77.16912384737213!3d28.580796850624022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7350c33a2d%3A0xe5a3c2688701049b!2sNarcotics%20Control%20Bureau!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="NCB Headquarters Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Portals Slider - Matching Screenshot */}
            <section className="portals-slider-section">
                <div className="container">
                    <div className="portals-header-area">
                        <h3 className="portals-title">Important <span>Websites</span></h3>
                        <button
                            className={`portal-control-btn ${!isPortalsPlaying ? 'is-paused' : ''}`}
                            onClick={() => setIsPortalsPlaying(!isPortalsPlaying)}
                            aria-label={isPortalsPlaying ? "Pause Portals Slider" : "Play Portals Slider"}
                        >
                            <i className={`bi ${isPortalsPlaying ? 'bi-pause-circle-fill' : 'bi-play-circle-fill'}`}></i>
                        </button>
                    </div>

                    <div className="portals-viewport"
                        ref={portalsScrollRef}
                        onMouseEnter={() => setIsPortalsHovered(true)}
                        onMouseLeave={() => {
                            setIsPortalsHovered(false);
                            stopPortalsDragging();
                        }}
                        onMouseDown={handlePortalsMouseDown}
                        onMouseMove={handlePortalsMouseMove}
                        onMouseUp={stopPortalsDragging}
                        onTouchStart={(e) => {
                            setIsPortalsDragging(true);
                            setPortalsStartX(e.touches[0].pageX - portalsScrollRef.current.offsetLeft);
                            setPortalsScrollLeft(portalsScrollRef.current.scrollLeft);
                        }}
                        onTouchMove={(e) => {
                            if (!isPortalsDragging) return;
                            const x = e.touches[0].pageX - portalsScrollRef.current.offsetLeft;
                            const walk = (x - portalsStartX) * 2;
                            portalsScrollRef.current.scrollLeft = portalsScrollLeft - walk;
                        }}
                        onTouchEnd={stopPortalsDragging}
                    >
                        <div className="portals-track">
                            {[
                                { name: "NIDAAN", url: "https://nidaan.ncb.gov.in/", logo: nidaanLogo },
                                { name: "MANAS", url: "https://www.narcoordindia.gov.in/", logo: manasLogo },
                                { name: "Swachh Bharat", url: "https://swachhbharatmission.gov.in/", logo: swachhLogo },
                                { name: "PMNRF", url: "https://pmnrf.gov.in/", logo: pmnrfLogo },
                                { name: "Data portal", url: "https://data.gov.in/", logo: dataGovLogo },
                                { name: "MyGov", url: "https://www.mygov.in/", logo: myGovLogo },
                                { name: "India.gov.in", url: "https://www.india.gov.in/", logo: indiaGovLogo },
                                { name: "G-20", url: "http://goidirectory.nic.in/", logo: goLogo },
                                { name: "IIG", url: "https://iig.gov.in/", logo: iigLogo },
                                { name: "NCB", url: "https://ncb.gov.in/", logo: ncbLogo }
                            ].concat([
                                { name: "NIDAAN", url: "https://nidaan.ncb.gov.in/", logo: nidaanLogo },
                                { name: "MANAS", url: "https://www.narcoordindia.gov.in/", logo: manasLogo },
                                { name: "Swachh Bharat", url: "https://swachhbharatmission.gov.in/", logo: swachhLogo },
                                { name: "PMNRF", url: "https://pmnrf.gov.in/", logo: pmnrfLogo },
                                { name: "Data portal", url: "https://data.gov.in/", logo: dataGovLogo },
                                { name: "MyGov", url: "https://www.mygov.in/", logo: myGovLogo },
                                { name: "India.gov.in", url: "https://www.india.gov.in/", logo: indiaGovLogo },
                                { name: "G-20", url: "http://goidirectory.nic.in/", logo: goLogo },
                                { name: "IIG", url: "https://iig.gov.in/", logo: iigLogo },
                                { name: "NCB", url: "https://ncb.gov.in/", logo: ncbLogo }
                            ]).map((portal, i) => (
                                <a
                                    href={portal.url}
                                    key={i}
                                    className="portal-logo-item"
                                    onClick={(e) => handleExternalLink(e, portal.url)}
                                >
                                    <div className="logo-white-bg">
                                        <img src={portal.logo} alt={portal.name} title={portal.name} draggable="false" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section >



        </div >
    );
}

export default Home;