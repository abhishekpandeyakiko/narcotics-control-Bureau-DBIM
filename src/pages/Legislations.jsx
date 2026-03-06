import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/About.scss";

const Legislations = () => {
    const [activeTab, setActiveTab] = useState("acts");

    const categories = [
        { id: "directive", label: "Directive Principles", icon: "bi-info-circle" },
        { id: "acts", label: "Acts & Amendments", icon: "bi-shield-check" },
        { id: "orders", label: "RCS Orders", icon: "bi-file-earmark-text" },
        { id: "notifications", label: "Notifications", icon: "bi-bell" },
        { id: "conventions", label: "International Conventions", icon: "bi-globe" },
    ];

    const data = {
        acts: [
            { title: "Narcotic Drugs and Psychotropic Substances (NDPS) ACT, 1985", type: "Main Act", link: "#" },
            { title: "NDPS (AMENDMENT) ACT, 1989", type: "Amendment", link: "#" },
            { title: "NDPS (AMENDMENT) ACT, 2001", type: "Amendment", link: "#" },
            { title: "NDPS (AMENDMENT) ACT, 2014", type: "Amendment", link: "#" },
            { title: "NDPS (AMENDMENT) ACT, 2021", type: "Amendment", link: "#" },
            { title: "Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances (PITNDPS) ACT, 1988", type: "Main Act", link: "#" },
        ],
        orders: [
            { title: "The NDPS (Regulation of Controlled Substances) Order, 2013", date: "2013", link: "#" },
            { title: "RCS Order 2013 amendment dated 23 September 2013", date: "23 Sept 2013", link: "#" },
            { title: "RCS Order 2013 amendment dated 27 February 2018", date: "27 Feb 2018", link: "#" },
            { title: "RCS Order 2013 amendment dated 14 October 2019", date: "14 Oct 2019", link: "#" },
        ],
        notifications: [
            { title: "Notification for inclusion of Mephedrone under Psychotropic Substance", desc: "Psychotropic Substance list update", link: "#" },
            { title: "Notification for inclusion of Multiple Substances under Psychotropic Substance", desc: "Bulk substances listing", link: "#" },
            { title: "Notification for inclusion of Ketamine under Psychotropic Substance", desc: "Scheduling amendment", link: "#" },
            { title: "Notification for inclusion of Treamadol under Psychotropic Substance dated 13 July 2018", desc: "13 July 2018 Inclusion", link: "#" },
            { title: "Notification for inclusion of New Psychotropic Substance 2016", desc: "NPS 2016 List", link: "#" },
            { title: "Notification for inclusion of New Psychotropic Substance 2017", desc: "NPS 2017 List", link: "#" },
        ],
        conventions: [
            { title: "UN Convention 1988", desc: "Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances", link: "#" },
            { title: "UN Convention 1971", desc: "Convention on Psychotropic Substances", link: "#" },
            { title: "UN Convention 1961", desc: "Single Convention on Narcotic Drugs", link: "#" },
            { title: "SAARC Convention", desc: "NCRDS (Narcotic Drugs and Psychotropic Substances)", link: "#" },
        ]
    };

    return (
        <div className="about-page legislation-page">
            <PageBanner
                title="Legislations &"
                highlightWord="Directive Principles"
                subtitle="Comprehensive legal framework for narcotics control in India"
                breadcrumbLabel="Legislations"
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
                                {activeTab === "directive" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">Constitutional <span>Directive Principles</span></h3>
                                        <div className="nodal-box mb-4">
                                            <h4 className="h5 fw-bold text-vibrant mb-3"><i className="bi bi-quote me-2"></i>Article 47</h4>
                                            <p className="lead-text fs-5 italic">
                                                "The State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health."
                                            </p>
                                        </div>
                                        <p className="text-body mt-4">
                                            The Government's policy on drug demand reduction and control is directly derived from the Directive Principles of State Policy. This constitutional provision mandates the state to protect public health by controlling substances that cause harm to the society.
                                        </p>
                                        <div className="p-4 bg-light rounded-4 border-start border-4 border-primary mt-4">
                                            <h5 className="fw-bold mb-3">Key Policy Pillars:</h5>
                                            <ul className="function-list list-unstyled">
                                                <li className="border-0 py-1"><i className="bi bi-check-circle-fill text-primary"></i> Balancing medical necessity with social protection</li>
                                                <li className="border-0 py-1"><i className="bi bi-check-circle-fill text-primary"></i> Prevention of drug abuse through strict regulation</li>
                                                <li className="border-0 py-1"><i className="bi bi-check-circle-fill text-primary"></i> International cooperation in narcotics control</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "acts" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">Acts & <span>Amendments</span></h3>
                                        <div className="table-responsive">
                                            <table className="table table-hover align-middle custom-leg-table">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th className="border-0 p-3">Title of the Act</th>
                                                        <th className="border-0 p-3 text-center">Type</th>
                                                        <th className="border-0 p-3 text-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.acts.map((act, i) => (
                                                        <tr key={i}>
                                                            <td className="p-3 fw-semibold text-dark">{act.title}</td>
                                                            <td className="p-3 text-center">
                                                                <span className={`badge rounded-pill ${act.type === 'Main Act' ? 'bg-primary-soft text-primary' : 'bg-secondary-soft text-secondary'}`}>
                                                                    {act.type}
                                                                </span>
                                                            </td>
                                                            <td className="p-3 text-end">
                                                                <button className="btn-view-pdf-modern ms-auto">
                                                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                                                    <span>VIEW PDF</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "orders" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">RCS <span>Orders</span></h3>
                                        <p className="text-muted mb-4">Regulation of Controlled Substances (RCS) Orders and subsequent amendments.</p>
                                        <div className="row g-4">
                                            {data.orders.map((order, i) => (
                                                <div className="col-12" key={i}>
                                                    <div className="d-flex align-items-center justify-content-between p-3 rounded-4 border bg-hover-light transition-all shadow-sm">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="icon-rounded bg-primary-soft text-primary">
                                                                <i className="bi bi-file-earmark-ruled fs-5"></i>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0 fw-bold">{order.title}</h6>
                                                                <small className="text-muted">Effective Date: {order.date}</small>
                                                            </div>
                                                        </div>
                                                        <button className="btn-view-pdf-modern">
                                                            <i className="bi bi-file-earmark-pdf-fill"></i>
                                                            <span>VIEW PDF</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "notifications" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">Legal <span>Notifications</span></h3>
                                        <div className="list-group list-group-flush">
                                            {data.notifications.map((notif, i) => (
                                                <div key={i} className="list-group-item px-0 py-4 border-bottom d-flex align-items-start gap-3">
                                                    <div className="badge-notif bg-primary-soft text-primary mt-1">
                                                        <i className="bi bi-pin-angle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="fw-bold mb-1">{notif.title}</h6>
                                                        <p className="small text-muted mb-0">{notif.desc}</p>
                                                    </div>
                                                    <button className="btn-view-pdf-modern mt-2">
                                                        <i className="bi bi-file-earmark-pdf-fill"></i>
                                                        <span>VIEW PDF</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "conventions" && (
                                    <div className="content-fade-in">
                                        <h3 className="section-title mb-4">International <span>Conventions</span></h3>
                                        <div className="row g-4">
                                            {data.conventions.map((conv, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <div className="convention-card h-100">
                                                        <div className="card-decor"></div>
                                                        <div className="card-content-wrap">
                                                            <div className="icon-globe-wrap">
                                                                <i className="bi bi-globe2"></i>
                                                            </div>
                                                            <h5 className="conv-title">{conv.title}</h5>
                                                            <p className="conv-desc">{conv.desc}</p>
                                                            <div className="mt-auto pt-3">
                                                                <button className="btn-view-pdf-modern w-100">
                                                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                                                    <span>VIEW PDF</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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

export default Legislations;
