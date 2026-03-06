import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import "../styles/About.scss";

const Coordination = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("national");

    useEffect(() => {
        if (location.pathname.includes("bilateral-agreements") || location.pathname.includes("mou")) {
            setActiveTab("international");
        } else {
            setActiveTab("national");
        }
    }, [location.pathname]);

    const categories = [
        { id: "national", label: "National Coordination", icon: "bi-building" },
        { id: "international", label: "International Coordination", icon: "bi-globe" }
    ];

    const nationalCoordinationData = [
        {
            issueArea: "Regional Coordination Meetings – organized annually by NCB in 4 regions of India.",
            done: [
                "In-depth discussion on drug trafficking related issues.",
                "Deliberations to formulate strategies to neutralize drug trafficking in coordination with other LEAs."
            ]
        },
        {
            issueArea: "Coordination with States",
            done: [
                "(a) Institutional mechanisms at State for financial assistance for improving their enforcement capabilities.",
                "(b) Organizing training modules for other drug LEAs and providing funds and resource persons.",
                "(c) Distribution of DD Kits",
                "(d) Reward proposal"
            ]
        },
        {
            issueArea: "State Level Coordination Committee under Chief Secretary. Anti-Narcotics Task Force headed by an IG level officer. 5 year Action Plan to address narcotics related issues.",
            done: [
                "Being done",
                "Need for improved and more reliable DD kits",
                "Clearing all pending reward proposals"
            ]
        },
        {
            issueArea: "Visits of States by NCB officers",
            done: [
                "DG NCB, DDG’s regularly visit States and meet CSs/ DGPs and other officers to interact on drug related matters.",
                "ZDs of NCB regularly visit States to monitor utilization of Assistance provided to States and for other matters."
            ]
        },
        {
            issueArea: "National Meetings",
            done: [
                "Narcotics Coordination Committees of Secretaries headed by Secretary Revenue. DG, NCB is Convener.",
                "Meeting with DCGI, NC and CCF for submission of returns to INCB.",
                "Meeting with Nodal Officers of 10 illicit poppy growing States.",
                "Multi Agency Centre (MAC) meeting",
                "Central Economic Intelligence Bureau (CEIB) meeting"
            ]
        },
        {
            issueArea: "Coordination meeting held by other agencies",
            done: [
                "State Multi Agency Coordination (SMAC) meeting",
                "Regional Economic Intelligence Council (REIC) meeting",
                "Lead Intelligence Agency (LIA) meeting"
            ]
        },
        {
            issueArea: "MoU",
            done: [
                "MoU Between NCB & RRU",
                "MoU On Establishment of CENC Between NCB & CAPT, Bhopal"
            ]
        }
    ];

    const bilateralAgreements = [
        "Mauritius", "U.S.A.", "Afghanistan", "Myanmar", "Zambia", "UAE", "Bulgaria", "Romania",
        "Egypt", "China", "Italy", "Turkey", "Croatia", "Tajikistan", "Lao, PDR", "Poland",
        "Israel", "Cambodia", "Bangladesh", "Kuwait", "Cyprus", "Russia", "Qatar", "Sri Lanka",
        "France", "Uzbekistan", "Saudi Arabia"
    ];

    const mouList = [
        "U.S.A.", "Iran", "Oman", "Vietnam", "Bhutan", "Pakistan", "Maldives", "Australia",
        "Myanmar", "Germany", "Mozambique", "Thailand", "Nepal", "Singapore", "South Korea",
        "Saudi Arabia", "Indonesia", "Nigeria", "USA Drug Policy"
    ];

    return (
        <div className="about-page legislation-page">
            <PageBanner
                title="National & International"
                highlightWord="Coordination"
                subtitle="NCB coordinates actions taken by various agencies related to drug law enforcement."
                breadcrumbLabel="Coordination"
            />

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {/* Sidebar Navigation */}
                        <div className="col-lg-3 mb-4 legislation-sidebar-wrapper">
                            <div className="legislation-sidebar p-3 bg-white rounded-4 shadow-sm border">
                                <h5 className="fw-bold px-3 mb-4 text-primary">Categories</h5>
                                <div className="nav flex-column nav-pills">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            className={`nav-link text-start mb-2 rounded-3 d-flex align-items-center gap-3 ${activeTab === cat.id ? "active bg-primary shadow-sm" : "text-dark"}`}
                                            onClick={() => setActiveTab(cat.id)}
                                            style={{ transition: 'all 0.3s ease' }}
                                        >
                                            <i className={`bi ${cat.icon} fs-5`}></i>
                                            <span className="fw-semibold">{cat.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="col-lg-9">
                            <div className="legislation-content-card bg-white rounded-4 shadow-sm border p-4">
                                {activeTab === "national" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">National <span>Coordination</span></h3>

                                        <div className="p-4 bg-light rounded-4 border-start border-4 border-primary mb-4">
                                            <ul className="function-list list-unstyled mb-0">
                                                <li className="border-0 py-2"><i className="bi bi-asterisk text-primary me-2"></i> NCB is the Central Authority for exercising powers and functions of the Central Government under NDPS Act.</li>
                                                <li className="border-0 py-2"><i className="bi bi-asterisk text-primary me-2"></i> NCB is the nodal agency for matters pertaining to drug law enforcement in India.</li>
                                                <li className="border-0 py-2"><i className="bi bi-asterisk text-primary me-2"></i> NCB coordinates actions taken by various agencies of Central and State Governments related to drug law enforcement in the country and matters pertaining to drug abuse.</li>
                                            </ul>
                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover align-middle custom-leg-table">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th className="p-3" style={{ width: "35%" }}>Issue Area</th>
                                                        <th className="p-3">What is being done (specific issue of coordination)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {nationalCoordinationData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="p-3 fw-semibold text-dark bg-light-soft">{item.issueArea}</td>
                                                            <td className="p-3">
                                                                <ul className="ps-3 mb-0 text-muted">
                                                                    {item.done.map((line, i) => (
                                                                        <li key={i} className="mb-1">{line}</li>
                                                                    ))}
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "international" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">International <span>Coordination</span></h3>

                                        <p className="text-body mb-3 lead-text">
                                            The illicit drug trade is a global crime that knows no borders. It involves complex international Networks, trafficking routes, and illegal money flows. For India, this challenge is especially serious because of its location between the Golden Crescent and the Golden Triangle—two of the world’s largest drug-producing regions. This makes India both a transit route and a growing target market for narcotics.
                                        </p>
                                        <p className="fw-bold text-vibrant mb-4">
                                            To address this, international coordination is not merely an option but a critical and indispensable national security mandate.
                                        </p>

                                        <div className="nodal-box mb-4">
                                            <p className="mb-0 fw-semibold text-dark">
                                                <i className="bi bi-globe2 me-2 text-primary"></i>
                                                India is fully committed to global cooperation and is a signatory to all three UN Drug Control Conventions (1961, 1971, and 1988), demonstrating unwavering commitment to the global legal standard.
                                            </p>
                                        </div>

                                        <p className="fw-semibold text-dark mb-3">
                                            India actively participates in global and regional organizations to shape its counter-narcotics policy and leverage collective strength to solidify its defence through:
                                        </p>

                                        <div className="row g-3 mb-5">
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-4 border bg-hover-light h-100 shadow-sm transition-all text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div className="icon-rounded bg-primary-soft text-primary mx-auto mb-2">
                                                        <i className="bi bi-people fs-5"></i>
                                                    </div>
                                                    <span className="small fw-semibold text-dark">Bilateral talks and Joint Working Groups with other countries.</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-4 border bg-hover-light h-100 shadow-sm transition-all text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div className="icon-rounded bg-primary-soft text-primary mx-auto mb-2">
                                                        <i className="bi bi-diagram-3 fs-5"></i>
                                                    </div>
                                                    <span className="small fw-semibold text-dark">Collaboration with global organizations like the UNODC and the INCB.</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-4 border bg-hover-light h-100 shadow-sm transition-all text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div className="icon-rounded bg-primary-soft text-primary mx-auto mb-2">
                                                        <i className="bi bi-link-45deg fs-5"></i>
                                                    </div>
                                                    <span className="small fw-semibold text-dark">Active participation in regional platforms such as SAARC and BIMSTEC.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fw-semibold text-dark mb-3">
                                            To support this cooperation, India has built a strong legal and operational framework through:
                                        </p>

                                        <div className="row mb-5">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <div className="d-flex align-items-center p-3 rounded-3 bg-light border">
                                                    <div className="fs-2 text-vibrant me-3 fw-bold">27</div>
                                                    <div>
                                                        <h6 className="fw-bold mb-0">Bilateral Agreements (BAs)</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center p-3 rounded-3 bg-light border">
                                                    <div className="fs-2 text-vibrant me-3 fw-bold">19</div>
                                                    <div>
                                                        <h6 className="fw-bold mb-0">Memoranda of Understanding (MoUs)</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-muted fst-italic mb-4">
                                            These agreements form the foundation of India’s international efforts, enabling real-time information sharing, cooperation in investigations, and mutual legal assistance to effectively combat drug trafficking and related crimes.
                                        </p>

                                        <div className="row g-4 pt-3 border-top">
                                            <div className="col-md-6">
                                                <div className="convention-card h-100">
                                                    <div className="card-decor"></div>
                                                    <div className="card-content-wrap p-4">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="icon-globe-wrap mb-0 me-3" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                                                                <i className="bi bi-file-earmark-ruled"></i>
                                                            </div>
                                                            <h5 className="conv-title mb-0">Bilateral Agreements</h5>
                                                        </div>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {bilateralAgreements.map((country, idx) => (
                                                                <span key={idx} className="badge bg-light text-dark border p-2">
                                                                    {country}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="convention-card h-100">
                                                    <div className="card-decor"></div>
                                                    <div className="card-content-wrap p-4">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="icon-globe-wrap mb-0 me-3" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                                                                <i className="bi bi-handshake"></i>
                                                            </div>
                                                            <h5 className="conv-title mb-0">Memoranda of Understanding</h5>
                                                        </div>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {mouList.map((country, idx) => (
                                                                <span key={idx} className="badge bg-light text-dark border p-2">
                                                                    {country}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coordination;
