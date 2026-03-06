import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/About.scss";

function MottoMissionVision() {
    return (
        <div className="about-page motto-mission-vision-page">
            <PageBanner
                title="Motto, Mission &"
                highlightWord="Vision"
                subtitle="Endeavour for a drug free society"
                breadcrumbLabel="Motto, Mission & Vision"
            />

            <section className="mmv-section">
                <div className="container">
                    <div className="text-center mb-5 pb-3">
                        <h2 className="section-title center">Our Core Philosophy</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            Guiding principles that drive our dedication towards a safer, drug-free nation.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center align-items-stretch">
                        {/* Motto */}
                        <div className="col-lg-4 col-md-6">
                            <div className="modern-mmv-card">
                                <div className="card-image-box">
                                    <img src="/our_motto.png" alt="Our Motto" />
                                </div>
                                <div className="card-content-box">
                                    <h3 className="title">Our Motto</h3>
                                    <div className="title-divider"></div>
                                    <p className="description">Intelligence, Enforcement, Coordination</p>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="col-lg-4 col-md-6">
                            <div className="modern-mmv-card featured">
                                <div className="card-image-box">
                                    <img src="/our_mission.png" alt="Our Mission" />
                                </div>
                                <div className="card-content-box">
                                    <h3 className="title">Our Mission</h3>
                                    <div className="title-divider"></div>
                                    <p className="description">Prevent and combat abuse and illicit traffic of drugs</p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="col-lg-4 col-md-6">
                            <div className="modern-mmv-card">
                                <div className="card-image-box">
                                    <img src="/our_vision.png" alt="Our Vision" />
                                </div>
                                <div className="card-content-box">
                                    <h3 className="title">Our Vision</h3>
                                    <div className="title-divider"></div>
                                    <p className="description">Endeavour for a drug free society</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MottoMissionVision;
