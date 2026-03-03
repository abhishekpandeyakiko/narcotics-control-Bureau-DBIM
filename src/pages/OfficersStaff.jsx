import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/Directory.scss";

const OfficersStaff = () => {
    const allPersonnel = [
        { name: "Shri Anurag Garg", designation: "Director General", email: "dg-ncb@nic.in" },
        { name: "Shri Vineet Vinayak", designation: "Additional Director General", email: "adg-ncb@gov.in" },
        { name: "Chief Vigilance Officer (CVO)", designation: "Chief Vigilance Officer (CVO)", email: "cvo-ncb@nic.in" },
        { name: "Shri Maneesh Kumar", designation: "Dy. Director General (Western Region)", email: "ddgwr-ncb@gov.in" },
        { name: "Shri. T. G. Venkatesh", designation: "Dy. Director General (Special Wing)", email: "ddgsplwing-ncb@gov.in" },
        { name: "Dy. Director General (Personnel & Administration)", designation: "Dy. Director General (Personnel & Administration)", email: "ddgc-ncb@nic.in" },
        { name: "Shri R. Sudhakar", designation: "Dy. Director General (North Eastern Region)", email: "ddgner-ncb@nic.in" },
        { name: "Dy. Director General (Southern Region)", designation: "Dy. Director General (Southern Region)", email: "office-ddgsr-ncb@gov.in" },
        { name: "Shri Anand Prakash Tiwari", designation: "Dy. Director General (Northern Region)", email: "ddgnr-ncb@nic.in" },
        { name: "Shri Sambit Mishra", designation: "Dy. Director General (North Western Region)", email: "ddgnwr-ncb@gov.in" },
        { name: "Shri Neeraj Kumar Gupta", designation: "Dy. Director General (Operations, Enforcement & Operational Coordination)", email: "ddge-ncb@nic.in" },
        { name: "Shri. Vishal M. Sanap", designation: "Dy. Director General (South Western Region)", email: "ddgsw-ncb@gov.in" },
        { name: "Shri Hitesh Godara", designation: "Dy. Director General (Eastern Region)", email: "ddger-ncb@gov.in" },
        { name: "Shri Nabarun dhar", designation: "IFA, NCB", email: "ifa.cbiho@cbi.gov.in" },
        { name: "Shri Nilotpal Mrinal", designation: "Additional Director (Personnel & Administration)", email: "dda-ncb@nic.in" },
        { name: "Dr. Shanteshwar Swami", designation: "Additional Director (Operations)", email: "addldops-ncb@gov.in" },
        { name: "Additional Director (Amritsar)", designation: "Additional Director (Amritsar)", email: "zdasrzu-ncb@gov.in" },
        { name: "Shri Shailesh Kumar Dattatray Jambotkar", designation: "Additional Director (Digital Initiatives)", email: "dddi-ncb@nic.in" },
        { name: "Additional Director, Kolkata Zonal Unit", designation: "Additional Director, Kolkata Zonal Unit", email: "zdkzu-ncb@nic.in" },
        { name: "Shri Kuldeep Sharma", designation: "Zonal Director Bhubaneswar", email: "zdbbsr-ncb@gov.in" },
        { name: "Shri Gyanendra Kumar Singh", designation: "Dy. Director (Operations)", email: "ddi-ncb@nic.in" },
        { name: "Dr. Anees C.", designation: "Dy. Director (International Coordination)", email: "ddic-ncb@gov.in" },
        { name: "Dy. Director (Capacity Building)", designation: "Dy. Director (Capacity Building)", email: "ddcb-ncb@gov.in" },
        { name: "Dy. Director (Vigilance)", designation: "Dy. Director (Vigilance)", email: "ddvig-ncb@gov.in" },
        { name: "Shri Vikash Kumar", designation: "Dy. Director (Coord.)", email: "ddp-ncb@nic.in" },
        { name: "Shri Prakash Ranjan Mishra", designation: "Additional Director Guwahati Zonal Unit", email: "zdghtzu-ncb@nic.in" },
        { name: "Zonal Director Agartala", designation: "Zonal Director Agartala", email: "zdagzu-ncb@gov.in" },
        { name: "Zonal Director Imphal", designation: "Zonal Director Imphal", email: "zdimphal-ncb@gov.in" },
        { name: "Zonal Director Itanagar", designation: "Zonal Director Itanagar", email: "zditzu-ncb@gov.in" },
        { name: "Zonal Director Siliguri", designation: "Zonal Director Siliguri", email: "zdslg-ncb@gov.in" },
        { name: "Shri Patil Ketan Baliram", designation: "Additional Director, Ahmedabad Zonal Unit", email: "zdazu-ncb@nic.in" },
        { name: "Shri Shailendra Kr Mishra", designation: "Zonal Director Lucknow", email: "zdvzu-ncb@gov.in" },
        { name: "Zonal Director Gorakhpur", designation: "Zonal Director Gorakhpur", email: "zdgkp@gov.in" },
        { name: "Shri Amanjit Singh", designation: "Additional Director Chandigarh Zonal Unit", email: "zdczu-ncb@nic.in" },
        { name: "Zonal Director Jammu", designation: "Zonal Director Jammu", email: "zdjmzu-ncb@nic.in" },
        { name: "Zonal Director Srinagar", designation: "Zonal Director Srinagar", email: "zdsnr-ncb@gov.in" },
        { name: "Shri P. Aravindhan", designation: "Additional Director, Chennai Zonal Unit", email: "zdszu-ncb@nic.in" },
        { name: "Zonal Director Hyderabad", designation: "Zonal Director Hyderabad", email: "zdhzu-ncb@gov.in" },
        { name: "Shri V G Kurup", designation: "Zonal Director Cochin", email: "zdcnzu-ncb@gov.in" },
        { name: "Shri Pankaj Kumar Dwivedi", designation: "Zonal Director Vishakhapatnam", email: "zdvszu-ncb@gov.in" },
        { name: "Shri Sachin Ghorpade", designation: "Zonal Director Bangalore", email: "zdblzu-ncb@nic.in" },
        { name: "Zonal Director Goa", designation: "Zonal Director Goa", email: "zdgoa-ncb@gov.in" },
        { name: "Shri Ritesh Ranjan", designation: "Zonal Director Indore", email: "zdindzu@nic.in" },
        { name: "Zonal Director Bhopal", designation: "Zonal Director Bhopal", email: "zdbzu-ncb@gov.in" },
        { name: "Shri Ghanshyam Soni", designation: "Zonal Director Jaipur", email: "zdjpzu-ncb@gov.in" },
        { name: "Zonal Director Jodhpur", designation: "Zonal Director Jodhpur", email: "zdjzu-ncb@nic.in" },
        { name: "Shri Deepak Hilori", designation: "Zonal Director, Delhi Zonal Unit", email: "zddzu-ncb@nic.in" },
        { name: "Shri Devanand", designation: "Zonal Director Dehradun", email: "ddnzu-ncb@gov.in" },
        { name: "Shri Amit Ghawate", designation: "Additional Director, Mumbai Zonal Unit", email: "mzu-ncb@nic.in" },
        { name: "Shri Ravi Shanker Joshi", designation: "Zonal Director Patna", email: "zdpzu-ncb@nic.in" },
        { name: "Zonal Director Ranchi", designation: "Zonal Director Ranchi", email: "zdranchi-ncb@gov.in" },
        { name: "Zonal Director Raipur", designation: "Zonal Director Raipur", email: "zdrzu-ncb@gov.in" }
    ];

    const [searchTerm, setSearchTerm] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 10;

    const filteredPersonnel = allPersonnel.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Reset to first page when search changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    // Pagination Calculations
    const totalPages = Math.ceil(filteredPersonnel.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPersonnel.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Smooth scroll to top of table
        document.querySelector('.directory-section-header')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="directory-page">
            <PageBanner
                title="Personnel &"
                highlightWord="Staff Directory"
                subtitle="Narcotics Control Bureau, India | Ministry of Home Affairs"
                breadcrumbLabel="Officers & Staff Directory"
            />

            <section className="directory-intro-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="section-title-modern">Operations & <span>Command</span></h2>
                            <p className="lead-text-modern">
                                The Narcotics Control Bureau is structured to provide effective leadership and operational excellence across India. Our dedicated officers and staff form the backbone of our mission to combat drug trafficking and illicit drug use.
                            </p>
                            <p className="text-body-modern">
                                This directory provides contact information for the Headquarters leadership and Zonal Directors across the nation, ensuring seamless coordination between various enforcement wings and international agencies.
                            </p>
                            <div className="mt-4">
                                <span className="badge-official"><i className="bi bi-shield-check"></i> Official Directory</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hq-image-container ms-lg-4">
                                <img src="/ncb_officers_meeting.png" alt="NCB Officers Meeting" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="directory-main-section">
                <div className="container">
                    <div className="directory-card-wrapper">
                        {/* Modern Table Header with Search */}
                        <div className="directory-section-header">
                            <div className="header-title-box">
                                <h2>Staff <span>Directory</span></h2>
                                <div className="header-meta">
                                    <span className="record-count">{filteredPersonnel.length} Active Records</span>
                                    <span className="source-tag">Official NCB Data</span>
                                </div>
                            </div>

                            <div className="directory-search-modern">
                                <div className="search-input-pill">
                                    <i className="bi bi-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search name, designation..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {searchTerm && (
                                        <button className="clear-search" onClick={() => setSearchTerm("")}>
                                            <i className="bi bi-x-circle-fill"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="table-outer-container">
                            <div className="table-responsive">
                                <table className="table table-hover directory-table-modern">
                                    <thead>
                                        <tr>
                                            <th>S No.</th>
                                            <th><i className="bi bi-person"></i> Officer Name</th>
                                            <th><i className="bi bi-briefcase"></i> Designation / Office</th>
                                            <th><i className="bi bi-envelope"></i> Email Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.length > 0 ? (
                                            currentItems.map((officer, index) => (
                                                <tr key={index}>
                                                    <td className="name-cell">
                                                        {indexOfFirstItem + index + 1}
                                                    </td>
                                                    <td className="name-cell">
                                                        {officer.name}
                                                    </td>
                                                    <td className="designation-cell">
                                                        {officer.designation}
                                                    </td>
                                                    <td className="email-cell">
                                                        <a href={`mailto:${officer.email}`} className="email-link">
                                                            {officer.email}
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="no-data-state">
                                                    <div className="empty-info">
                                                        <i className="bi bi-search"></i>
                                                        <p>No results match "<strong>{searchTerm}</strong>"</p>
                                                        <button onClick={() => setSearchTerm("")}>Reset Search</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="directory-pagination">
                                    <button
                                        className="pagination-btn arrow"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        aria-label="Previous Page"
                                    >
                                        <i className="bi bi-chevron-left"></i>
                                    </button>

                                    <div className="page-numbers">
                                        {(() => {
                                            let start = Math.max(1, currentPage - 1);
                                            let end = Math.min(totalPages, start + 2);
                                            if (end === totalPages) {
                                                start = Math.max(1, end - 2);
                                            }
                                            const pages = [];
                                            for (let i = start; i <= end; i++) pages.push(i);

                                            return pages.map((pageNum) => (
                                                <button
                                                    key={pageNum}
                                                    className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                                                    onClick={() => handlePageChange(pageNum)}
                                                >
                                                    {pageNum}
                                                </button>
                                            ));
                                        })()}
                                    </div>

                                    <button
                                        className="pagination-btn arrow"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        aria-label="Next Page"
                                    >
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfficersStaff;
