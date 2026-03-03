import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/About.scss";

function About() {
    const zonalOffices = [
        "Agartala", "Ahmedabad", "Amritsar", "Bangalore", "Bhopal",
        "Bhubaneswar", "Chandigarh", "Chennai", "Cochin", "Dehradun",
        "Delhi", "Goa", "Gorakhpur", "Guwahati", "Hyderabad",
        "Imphal", "Indore", "Itanagar", "Jaipur", "Jammu",
        "Jodhpur", "Kolkata", "Lucknow", "Mumbai", "Patna",
        "Raipur", "Ranchi", "Siliguri", "Srinagar", "Vishakhapatnam"
    ];

    return (
        <div className="about-page">
            <PageBanner
                title="About"
                highlightWord="NCB"
                subtitle="The Apex Coordinating Agency for Drug Law Enforcement in India"
                breadcrumbLabel="About NCB"
            />

            {/* Section 1: Constitutional Mandate */}
            <section className="constitutional-mandate">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="section-title">Constitutional Mandate & Policy</h2>
                            <p className="lead-text">
                                The National Policy on Narcotic Drugs and Psychotropic Substances is rooted in the <strong>Directive Principles</strong> of the Indian Constitution.
                            </p>
                            <p className="text-body">
                                Specifically, <strong>Article 47</strong> directs the State to endeavour to bring about prohibition of the consumption, except for medicinal purposes, of intoxicating drugs injurious to health.
                                Our policy flows from this constitutional provision and is guided by international conventions.
                            </p>
                            <div className="mt-4">
                                <h5 className="fw-bold text-primary mb-3">Global Commitment</h5>
                                <p className="text-muted">India is a proud signatory to:</p>
                                <ul className="function-list">
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Single Convention on Narcotic Drugs, 1961 (as amended)</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Convention on Psychotropic Substances, 1971</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>UN Convention against Illicit Traffic, 1988</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hq-image-container ms-lg-4">
                                <img src="/ncb_hq_modern_office.png" alt="NCB Headquarters" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Legislative Pillars */}
            <section className="legislative-pillars bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title center">Legislative Pillars</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            Our operations are backed by a robust legal framework consisting of three central acts that define the narcotics management landscape in India.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="pillar-card">
                                <div className="icon-box"><i className="bi bi-journal-text"></i></div>
                                <h3>Drugs & Cosmetics Act, 1940</h3>
                                <p>Regulating the import, manufacture, distribution, and sale of drugs and cosmetics to ensure safety and quality.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pillar-card">
                                <div className="icon-box"><i className="bi bi-shield-lock"></i></div>
                                <h3>NDPS Act, 1985</h3>
                                <p>The Narcotic Drugs and Psychotropic Substances Act provides the primary implementation framework for drug control.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pillar-card">
                                <div className="icon-box"><i className="bi bi-exclamation-triangle"></i></div>
                                <h3>PITNDPS Act, 1988</h3>
                                <p>Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act for preventive detention of traffickers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: History & Establishment */}
            <section className="bureau-history">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <h2 className="section-title center">The birth of NCB</h2>
                            <p className="establishment-date">17 March 1986</p>
                            <p className="text-on-dark">
                                Formed under the <strong>NDPS Act, 1985</strong>, the Narcotics Control Bureau is the apex coordinating agency under the Central Government, tasked with combating drug abuse and illicit trafficking nationwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Powers & Functions */}
            <section className="powers-functions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h2 className="section-title">Core Mandate & Functions</h2>
                            <p className="lead-text">
                                The Narcotic Drugs and Psychotropic Substances Act, 1985 provides for a Central Authority to exercise the powers and functions of the Central Government.
                            </p>
                            <div className="nodal-box p-4 rounded-4 bg-light shadow-sm border-start border-primary border-4 mb-4">
                                <h6 className="fw-bold text-primary mb-2">Nodal Coordination Role</h6>
                                <p className="small text-muted mb-0">
                                    The responsibility of drug abuse control is carried out through the <strong>Ministry of Finance, Department of Revenue</strong>, which acts as the nodal administrator of the NDPS and PITNDPS Acts.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ps-lg-5">
                                <ul className="function-list">
                                    <li>
                                        <i className="bi bi-diagram-3-fill fs-4"></i>
                                        <div>
                                            <h5 className="fw-bold">Coordination of Enforcement</h5>
                                            <p className="text-muted mb-0">Unifying actions by various offices, State Governments, and authorities under the N.D.P.S. Act, Customs Act, Drugs and Cosmetics Act, and any other relevant laws in force.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-globe-americas fs-4"></i>
                                        <div>
                                            <h5 className="fw-bold">International Obligations</h5>
                                            <p className="text-muted mb-0">Implementing counter-measures against illicit traffic under all current and future international conventions and protocols ratified or acceded to by India.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-people-fill fs-4"></i>
                                        <div>
                                            <h5 className="fw-bold">Universal Action</h5>
                                            <p className="text-muted mb-0">Assisting foreign authorities and international organisations to facilitate universal coordination for the prevention and suppression of illicit drug traffic.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-building-gear fs-4"></i>
                                        <div>
                                            <h5 className="fw-bold">Inter-Ministerial Synergy</h5>
                                            <p className="text-muted mb-0">Coordinating actions by all concerned Ministries, Departments, and Organizations in respect of matters relating to the suppression of drug abuse.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Zonal Reach */}
            <section className="zonal-reach bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title center">Our Pan-India Presence</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            The NCB functions as an enforcement agency through its apex headquarters and 30 zonal offices strategically located across the nation.
                        </p>
                    </div>
                    <div className="presence-grid">
                        {zonalOffices.map((city, index) => (
                            <div key={index} className="city-card">
                                <i className="bi bi-geo-alt-fill"></i>
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Contact & HQ */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="contact-card">
                                <h4>Headquarters Location</h4>
                                <div className="info-item">
                                    <div className="icon-box"><i className="bi bi-building"></i></div>
                                    <div className="text-content">
                                        <h5>Address</h5>
                                        <p>NARCOTICS CONTROL BUREAU<br />West Block No. 1, Wing No. 5, RK Puram,<br />New Delhi - 110066</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><i className="bi bi-telephone"></i></div>
                                    <div className="text-content">
                                        <h5>Contact Number</h5>
                                        <p>+91-11-26761000 / +91-11-26761144</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><i className="bi bi-envelope"></i></div>
                                    <div className="text-content">
                                        <h5>Operations Email</h5>
                                        <p>adops-ncb@nic.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-card dark">
                                <h4>Report Incidents</h4>
                                <p className="mb-4">For reporting drug trafficking, accidents, or any serious incidents requiring NCB's attention.</p>

                                <div className="info-item">
                                    <div className="icon-box"><i className="bi bi-exclamation-octagon"></i></div>
                                    <div className="text-content">
                                        <h5>Trafficking / Accidents</h5>
                                        <p>+91-11-26761000</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="icon-box"><i className="bi bi-send-check"></i></div>
                                    <div className="text-content">
                                        <h5>Direct Reporting Email</h5>
                                        <a href="mailto:ddge-ncb@nic.in">ddge-ncb@nic.in</a><br />
                                        <a href="mailto:adenf-ncb@nic.in">adenf-ncb@nic.in</a>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-top border-secondary">
                                    <p className="small opacity-75">Your identity will be kept confidential in case of tips or reporting of illegal activities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;