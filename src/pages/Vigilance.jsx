import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';

// Using dedicated Vigilance styles
import '../styles/Vigilance.scss';

const Vigilance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("Vigilance Section Loaded");
    }, []);

    return (
        <div className="vigilance-page">
            <PageBanner
                title="Vigilance"
                highlightWord="Section"
                subtitle="Integrity, Transparency & Accountability"
                breadcrumbLabel="Vigilance"
            />

            <section className="vigilance-main-section">
                <div className="container">
                    <div className="vigilance-content-card">

                        {/* 1. Header Area */}
                        <div className="section-header">
                            <h2>The Vigilance <span>Unit</span></h2>
                        </div>

                        {/* 2. CVO Profile Card */}
                        <div className="cvo-profile-section">
                            <div className="cvo-card-modern">
                                <div className="profile-image-box">
                                    <i className="bi bi-person-workspace"></i>
                                </div>
                                <div className="profile-details">
                                    <h3>Shri Vineet Vinayak, IPS: 1995</h3>
                                    <span className="designation-badge">Chief Vigilance Officer (CVO)</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. Contact Grid */}
                        <div className="contact-grid-premium">
                            <div className="contact-card-v2">
                                <div className="card-top">
                                    <div className="icon-circle">
                                        <i className="bi bi-envelope-check"></i>
                                    </div>
                                    <span className="label">Primary Authority</span>
                                </div>
                                <h4>Chief Vigilance Officer</h4>
                                <a href="mailto:cvo-ncb@gov.in" className="email-link-modern">
                                    <i className="bi bi-send-fill"></i>
                                    <span>cvo-ncb@gov.in</span>
                                </a>
                            </div>

                            <div className="contact-card-v2">
                                <div className="card-top">
                                    <div className="icon-circle">
                                        <i className="bi bi-person-gear"></i>
                                    </div>
                                    <span className="label">Technical Oversight</span>
                                </div>
                                <h4>Deputy Director (Vigilance)</h4>
                                <a href="mailto:ddvig-ncb@gov.in" className="email-link-modern">
                                    <i className="bi bi-send-fill"></i>
                                    <span>ddvig-ncb@gov.in</span>
                                </a>
                            </div>
                        </div>

                        {/* 4. About Content */}
                        <div className="about-unit-box">
                            <div className="about-header-flex">
                                <div className="about-dot"></div>
                                <h3>About Vigilance Unit</h3>
                            </div>
                            <div className="about-body-text">
                                <p>
                                    The Vigilance Section of the Narcotics Control Bureau is headed by a Chief Vigilance Officer (CVO), who is a Additional Director General of the Department, supported by Deputy Director (Vigilance), Superintendent (Vigilance), Inspectors/Assistant (Vigilance) and other staff.
                                </p>
                                <p>
                                    Apart from handling vigilance-related cases of the Department, its subordinate offices, and autonomous bodies, the Vigilance Unit also deals with complaints received from the CVC, CBI, MHA, and other sources. It plays an active role in ensuring the prompt disposal of these complaints. The vigilance unit also handles disciplinary proceedings.
                                </p>
                            </div>
                        </div>

                        {/* 5. CVC Portal CTA */}
                        <div className="cvc-portal-box">
                            <div className="cvc-content">
                                <h5>Central Vigilance Commission</h5>
                                <p>
                                    The CVC website can also be accessed for information on making complaints,
                                    including under the Public Interest Disclosure and Protection of Informers (PIDPI).
                                </p>
                            </div>
                            <div className="cvc-action-wrapper">
                                <a href="https://cvc.gov.in" target="_blank" rel="noopener noreferrer" className="btn-cvc-modern">
                                    <span>Visit CVC Portal</span>
                                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vigilance;

