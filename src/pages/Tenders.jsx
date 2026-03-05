import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/LatestNews.scss"; // Reusing the premium styles

const tendersData = [
    {
        id: 1,
        title: "GeM bid for the procurement of a flatbed scanner for the NAFIS System in NCB.",
        date: "05th March, 2026",
        lastDate: "25th March, 2026",
        status: "Active",
        fileSize: "450 KB",
        type: "GeM Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/gem27bidding8982070.pdf"
    },
    {
        id: 2,
        title: "GeM bid for the procurement of a live scanner and single digit scanner for the NAFIS System in NCB.",
        date: "04th March, 2026",
        lastDate: "26th March, 2026",
        status: "Active",
        fileSize: "520 KB",
        type: "GeM Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/gem27bdding8983046.pdf"
    },
    {
        id: 3,
        title: "GeM bid for the Design and Development of PREP portal on Milestone Basis",
        date: "01st March, 2026",
        lastDate: "20th March, 2026",
        status: "Active",
        fileSize: "880 KB",
        type: "GeM Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/gembid8908387.pdf"
    },
    {
        id: 4,
        title: "Gem bid for establishment of intelligence data fusion centre in NCB on milestone basis (Extended till 27/01/2026 09:00 AM).",
        date: "15th January, 2026",
        lastDate: "27th January, 2026",
        status: "Extended",
        fileSize: "1.2 MB",
        type: "GeM Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/7052694_IDFC_GEM_Bid.pdf"
    },
    {
        id: 5,
        title: "Invitation of Online Bid For Procurement and Installation of CMS at 16 Locations",
        date: "25th February, 2026",
        lastDate: "15th March, 2026",
        status: "Active",
        fileSize: "640 KB",
        type: "Online Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/cmsgembid.pdf"
    },
    {
        id: 6,
        title: "GeM Bid for the Design, Development and Maintenance of the NCB Official Website on a Milestone Basis",
        date: "20th February, 2026",
        lastDate: "12th March, 2026",
        status: "Active",
        fileSize: "950 KB",
        type: "GeM Bid",
        pdfUrl: "https://narcoticsindia.nic.in/tender/gemitagency.pdf"
    }
];

function Tenders() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 4;

    const filteredData = tendersData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsTransitioning(false);
            window.scrollTo({ top: 400, behavior: "smooth" });
        }, 300);
    };

    return (
        <div className="archive-press-page">
            <PageBanner
                title="Active"
                highlightWord="Tenders"
                subtitle="Procurement opportunities, GeM bids, and strategic development projects for the Bureau."
                breadcrumbLabel="Tenders"
            />

            <section className="archive-main-section">
                <div className="container">
                    {/* Search Panel */}
                    <div className="archive-filter-panel mt-4">
                        <div className="row g-3 align-items-end">
                            <div className="col-lg-8 col-md-12">
                                <label>Search Tenders</label>
                                <input
                                    type="text"
                                    placeholder="Search by tender title or keyword..."
                                    className="archive-input"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="action-btns-row d-flex gap-2">
                                    <button className="btn-archive-search w-100">Search</button>
                                    <button className="btn-archive-reset w-100" onClick={() => { setSearchTerm(""); setCurrentPage(1); }}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="archive-note">
                        Note: All bids are subject to the terms and conditions mentioned in the respective tender documents.
                    </div>

                    <div className={`row g-4 archive-grid ${isTransitioning ? 'transitioning' : ''}`}>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                    <div className="archive-card">
                                        <div className="card-top-visual">
                                            <img src="/ncb_seal_modern.svg" className="main-doc-img" alt="NCB Logo" />
                                            <span className={`archive-date-badge ${item.status === 'Extended' ? 'bg-warning text-dark' : ''}`}>
                                                Last Date: {item.lastDate}
                                            </span>
                                            {item.id === 1 && <div className="new-badge-archive">new</div>}
                                        </div>
                                        <div className="card-info-body">
                                            <div className="tender-meta-tag mb-2">
                                                <span className="badge bg-light text-primary border">{item.type}</span>
                                            </div>
                                            <h3 className="release-title">
                                                {item.title}
                                            </h3>
                                            <div className="card-footer-flex">
                                                <div className="meta-compact">
                                                    <div className="meta-item-mini">
                                                        <i className="bi bi-hdd-fill"></i>
                                                        <span>{item.fileSize}</span>
                                                    </div>
                                                    <div className="meta-item-mini">
                                                        <i className="bi bi-translate"></i>
                                                        <span>EN</span>
                                                    </div>
                                                </div>
                                                <div className="archive-card-actions">
                                                    <button
                                                        onClick={() => window.open(item.pdfUrl, '_blank')}
                                                        className="btn-download-doc"
                                                    >
                                                        <i className="bi bi-file-earmark-pdf"></i> DOWNLOAD
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <div className="no-results py-5">
                                    <i className="bi bi-search display-1 text-muted opacity-25"></i>
                                    <p className="mt-3 lead text-muted">No tenders found matching your search term: <strong>{searchTerm}</strong></p>
                                    <button className="btn btn-outline-primary rounded-pill px-4 mt-2" onClick={() => setSearchTerm("")}>View All Tenders</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pagination UI */}
                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                <div className="page-numbers">
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => (i + 1) !== currentPage && paginate(i + 1)}
                                            className={`page-number ${(i + 1) === currentPage ? 'active' : ''}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Tenders;

