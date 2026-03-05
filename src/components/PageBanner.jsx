import React from "react";
import { Link } from "react-router-dom";
import "../styles/Banner.scss";

const PageBanner = ({ title, highlightWord, subtitle, breadcrumbLabel }) => {
    return (
        <section className="page-banner-premium">
            <div className="container">
                <div className="banner-inner">
                    <h2 className="banner-title">
                        {title} {highlightWord && <span>{highlightWord}</span>}
                    </h2>
                    {subtitle && <p className="banner-subtitle">{subtitle}</p>}

                    <nav className="breadcrumb-nav">
                        <ul className="breadcrumb-list">
                            <li><Link to="/">Home</Link></li>
                            <li className="separator">/</li>
                            <li className="active">{breadcrumbLabel}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;
