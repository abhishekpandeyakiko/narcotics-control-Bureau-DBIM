import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/Directory.scss";

const formerHeadsData = [
    {
        "id": 1,
        "name": "Shri B.V.Kumar",
        "designation": "IC & CS",
        "tenure": "08.05.1986 - 09.11.1988"
    },
    {
        "id": 2,
        "name": "Shri M.M.Bhatnagar",
        "designation": "IC & CS",
        "tenure": "10.11.1988 - 15.07.1990"
    },
    {
        "id": 3,
        "name": "Shri C.Chakraborty",
        "designation": "IPS",
        "tenure": "16.07.1990 - 31.12.1992"
    },
    {
        "id": 4,
        "name": "Shri H.P.Kumar",
        "designation": "IPS (DDG IN-CHARGE)",
        "tenure": "01.01.1993 - 16.09.1993"
    },
    {
        "id": 5,
        "name": "Shri Joginder Singh",
        "designation": "IPS",
        "tenure": "17.09.1993 - 31.01.1995"
    },
    {
        "id": 6,
        "name": "Shri H.P.Kumar",
        "designation": "IPS",
        "tenure": "01.03.1995 - 05.01.2001"
    },
    {
        "id": 7,
        "name": "Shri A.K. Pande",
        "designation": "IC & CS",
        "tenure": "06.01.2001 - 12.03.2001"
    },
    {
        "id": 8,
        "name": "Shri Gopal Achari",
        "designation": "IPS",
        "tenure": "12.03.2001 - 30.11.2001"
    },
    {
        "id": 9,
        "name": "Shri M.K.Singh",
        "designation": "IPS",
        "tenure": "30.11.2001 - 30.07.2004"
    },
    {
        "id": 10,
        "name": "Shri Rajiv Walia",
        "designation": "IAS (DDG IN-CHARGE)",
        "tenure": "30.07.2004 - 24.08.2004"
    },
    {
        "id": 11,
        "name": "Shri Swaraj Puri",
        "designation": "IPS",
        "tenure": "24.11.2004 - 31.03.2005"
    },
    {
        "id": 12,
        "name": "Shri Rakesh",
        "designation": "IAS",
        "tenure": "01.04.2005 - 14.10.2005"
    },
    {
        "id": 13,
        "name": "Shri K.C.Verma",
        "designation": "IPS",
        "tenure": "14.10.2005 - 15.04.2008"
    },
    {
        "id": 14,
        "name": "Shri M.L.Kumawat",
        "designation": "IPS",
        "tenure": "15.04.2008 - 17.12.2008"
    },
    {
        "id": 15,
        "name": "Shri O.P.S. Malik",
        "designation": "IPS",
        "tenure": "17.12.2008 - 31.07.2012"
    },
    {
        "id": 16,
        "name": "Shri Ajay Chadha",
        "designation": "IPS",
        "tenure": "01.08.2012 - 05.12.2012"
    },
    {
        "id": 17,
        "name": "Shri Rajiv Metha",
        "designation": "IPS",
        "tenure": "06.12.2012 - 19.02.2015"
    },
    {
        "id": 18,
        "name": "Shri B.B Mishra",
        "designation": "IPS (DDG IN-CHARGE)",
        "tenure": "20.02.2015 - 31.03.2015"
    },
    {
        "id": 19,
        "name": "Shri Ashok Prasad",
        "designation": "IPS",
        "tenure": "01.04.2015 - 31.01.2016"
    },
    {
        "id": 20,
        "name": "Shri R.R Bhatnagar",
        "designation": "IPS",
        "tenure": "10.02.2016 - 28.04.2017"
    },
    {
        "id": 21,
        "name": "Shri Abhay",
        "designation": "IPS",
        "tenure": "02.01.2018 - 01.08.2019"
    },
    {
        "id": 22,
        "name": "Shri Rakesh Asthana",
        "designation": "IPS",
        "tenure": "01.08.2019 - 19.07.2021"
    },
    {
        "id": 23,
        "name": "Shri Satya Narayan Pradhan",
        "designation": "IPS",
        "tenure": "29.07.2021 - 31.08.2024"
    },
    {
        "id": 24,
        "name": "Shri Anish Dayal Singh",
        "designation": "IPS",
        "tenure": "05.09.2024 - 18.09.2024"
    }
];

const FormerHeads = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredHeads = formerHeadsData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tenure.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Calculations
    const totalPages = Math.ceil(filteredHeads.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredHeads.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        document.querySelector('.directory-section-header')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="directory-page">
            <PageBanner
                title="Historical"
                highlightWord="Leadership"
                subtitle="Former Heads of Narcotics Control Bureau, India | Ministry of Home Affairs"
                breadcrumbLabel="Former heads"
            />

            <section className="directory-intro-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2 className="section-title-modern">Legacy of <span>Command</span></h2>
                            <p className="lead-text-modern">
                                The Narcotics Control Bureau has been led by distinguished officers from across India's premier services, primarily the Indian Police Service (IPS) and the Indian Revenue Service (Customs & Central Excise).
                            </p>
                            <p className="text-body-modern">
                                This roll of honor commemorates the leadership and vision of those who have steered the Bureau since its inception on 17th March 1986, contributing to the nation's fight against drug trafficking and illicit narcotic trade.
                            </p>
                            <div className="mt-4">
                                <span className="badge-official"><i className="bi bi-clock-history"></i> Roll of Honor</span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hq-image-container ms-lg-4">
                                <img src="/ncb_seal_modern.svg" alt="NCB Seal" style={{ objectFit: 'contain', padding: '40px', background: '#f8fafc' }} />
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
                                <h2>Former <span>Heads</span></h2>
                                <div className="header-meta">
                                    <span className="record-count">{formerHeadsData.length} Distinguished Officers</span>
                                    <span className="source-tag">NCB Historical Archive</span>
                                </div>
                            </div>

                            <div className="directory-search-modern">
                                <div className="search-input-pill">
                                    <i className="bi bi-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search by name, year..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1);
                                        }}
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
                                            <th><i className="bi bi-briefcase"></i> Designation / Service</th>
                                            <th><i className="bi bi-calendar3"></i> Period of Tenure</th>
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
                                                        <span className="fw-bold">{officer.tenure}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="no-data-state">
                                                    <div className="empty-info">
                                                        <i className="bi bi-search"></i>
                                                        <p>No records found for "<strong>{searchTerm}</strong>"</p>
                                                        <button onClick={() => setSearchTerm("")}>View All</button>
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
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                            // Show only current page +/- 1 and first/last
                                            if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                                                        onClick={() => handlePageChange(pageNum)}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                                                return <span key={pageNum} className="pagination-ellipsis">...</span>;
                                            }
                                            return null;
                                        })}
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

                    <div className="historical-note mt-4 text-center">
                        <p className="text-muted small">
                            <i className="bi bi-info-circle me-1"></i> Data sourced from the official history records of Narcotics Control Bureau, Headquarters, New Delhi.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormerHeads;
