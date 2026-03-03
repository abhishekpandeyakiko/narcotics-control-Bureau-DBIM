import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/OrganizationStructure.scss";

// Leaf Node Component for Zonal and Section units
const LeafNode = ({ type, label }) => (
    <div className="leaf-container">
        <div className="node-connector"></div>
        <div className={`node ${type}`}>{label}</div>
    </div>
);

function OrganizationStructurePage() {
    // Left side regional blocks
    const regionalDDGs = [
        {
            title: "Dy. Director General North Western Region Amritsar",
            zones: ["Amritsar Zone", "Chandigarh Zone", "Jammu Zone", "Srinagar Zone"]
        },
        {
            title: "Dy. Director General Northern Region Delhi",
            zones: ["Delhi Zone", "Dehradun Zone", "Gorakhpur Zone", "Lucknow Zone"]
        },
        {
            title: "Dy. Director General Western Region Ahmedabad",
            zones: ["Ahmedabad Zone", "Bhopal Zone", "Indore Zone", "Jaipur Zone", "Jodhpur Zone"]
        }
    ];

    // Central HQ specific units
    const hqDDGs = [
        {
            title: "Dy. Director General (P & A)",
            sections: ["Admin Section", "Establishment Section", "Rajbhasha Section", "Capacity Building", "International Coordination Cell", "Vigilance Section", "Coordination Section"]
        },
        {
            title: "Dy. Director General (OEC)",
            sections: ["Operation Section", "Intelligence Section", "Enforcement Section"]
        },
        {
            title: "Dy. Director General (Special Wing & Awareness)",
            sections: ["Special Wing", "Awareness Section", "Legal Section"]
        }
    ];

    // Right side regional blocks
    const regionalDDGsRight = [
        {
            title: "Dy. Director General South Western Region Mumbai",
            zones: ["Bangalore Zone", "Goa Zone", "Mumbai Zone"]
        },
        {
            title: "Dy. Director General Southern Region Chennai",
            zones: ["Chennai Zone", "Cochin Zone", "Hyderabad Zone", "Visakhapatnam Zone"]
        },
        {
            title: "Dy. Director General Eastern Region Kolkata",
            zones: ["Bhubaneswar Zone", "Kolkata Zone", "Patna Zone", "Ranchi Zone", "Raipur Zone"]
        },
        {
            title: "Dy. Director General North Eastern Region Guwahati",
            zones: ["Agartala Zone", "Guwahati Zone", "Imphal Zone", "Itanagar Zone", "Siliguri Zone"]
        }
    ];

    return (
        <div className="organization-structure-page">
            <PageBanner
                title="Organization"
                highlightWord="Structure"
                subtitle="The Hierarchical Command and Regional Network of NCB"
                breadcrumbLabel="Organization Structure"
            />

            <div className="org-structure-wrapper">
                <section className="chart-intro-section">
                    <div className="container">
                        <div className="intro-card">
                            <h2 className="intro-title">Our Command Hierarchy</h2>
                            <div className="intro-divider"></div>
                            <p className="intro-description">
                                The Narcotics Control Bureau operates through a structured system of command, with its headquarters in New Delhi and a nationwide network of regional and zonal offices coordinating drug law enforcement.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container-fluid">
                    <div className="org-chart-container">
                        <div className="org-inner">
                            <div className="org-tree">
                                <ul>
                                    <li>
                                        <div className="node dg">Director General</div>
                                        <ul>
                                            <li>
                                                <div className="node adg">Additional Director General</div>
                                                <ul>
                                                    {/* Left Regional Blocks */}
                                                    {regionalDDGs.map((ddg, index) => (
                                                        <li key={index}>
                                                            <div className="node ddg">{ddg.title}</div>
                                                            {ddg.zones && ddg.zones.map((zone, zIdx) => (
                                                                <LeafNode key={zIdx} type="zone" label={zone} />
                                                            ))}
                                                        </li>
                                                    ))}

                                                    {/* Center HQ Block */}
                                                    <li>
                                                        <div className="node hq">Headquarter</div>
                                                        <ul>
                                                            {hqDDGs.map((ddg, index) => (
                                                                <li key={index}>
                                                                    <div className="node ddg">{ddg.title}</div>
                                                                    {ddg.sections && ddg.sections.map((sec, sIdx) => (
                                                                        <LeafNode key={sIdx} type="section" label={sec} />
                                                                    ))}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>

                                                    {/* Right Regional Blocks */}
                                                    {regionalDDGsRight.map((ddg, index) => (
                                                        <li key={index}>
                                                            <div className="node ddg">{ddg.title}</div>
                                                            {ddg.zones && ddg.zones.map((zone, zIdx) => (
                                                                <LeafNode key={zIdx} type="zone" label={zone} />
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrganizationStructurePage;
