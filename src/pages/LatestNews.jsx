import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/LatestNews.scss";

const newsData = [
    { id: 1, title: "NCB files chargesheet against four in darknet-based drug cartel case", detail: "Click Here To Read" },
    { id: 2, title: "NCB busts international drug trafficking network near India-Myanmar border", detail: "Click Here To Read" },
    { id: 3, title: "NCB advises Indian travellers to seek approval for carrying medicines to Saudi Arabia", detail: "Click Here To Read" },
    { id: 4, title: "NCB seized 1.33 lakh kg of drugs worth about ₹2,000 crore in 2025", detail: "Click Here To Read" },
    { id: 5, title: "NCB Bengaluru arrests 81, seizes 490 kg of narcotics worth Rs 270 crore in 2025", detail: "Click Here To Read" },
    { id: 6, title: "NCB busts cross-border drug racket near Indo-Myanmar border, seizes 7.3 Kg heroin; two held", detail: "Click Here To Read" },
    { id: 7, title: "Modified Truck Carrying 813 Kg Of Ganja Seized In Hyderabad, 3 Arrested", detail: "Click Here To Read" },
    { id: 8, title: "Drugs problem is narco-terrorism, not a mere issue of crime: Shah", detail: "Click Here To Read" },
    { id: 9, title: "NCB busts drug network at Myanmar border, seizes heroin worth Rs 15 crore", detail: "Click Here To Read" },
    { id: 10, title: "NCB secures 7-year jail for three who diverted chemicals for drug-making", detail: "Click Here To Read" },
    { id: 11, title: "NCB’s Chandigarh unit seizes drug money of Rs 52 lakh", detail: "Click Here To Read" },
    { id: 12, title: "2 acquitted in 2018 drugs seizure case", detail: "Click Here To Read" },
    { id: 13, title: "NCB Srinagar Intercepts 0.635 kg of Charas, Arrests Repeat Offender in Anantnag", detail: "Click Here To Read" },
    { id: 14, title: "Punjab: Big fish Chatha in NCB net", detail: "Click Here To Read" },
    { id: 15, title: "NCB busts psychotropic drug export racket in Hyderabad", detail: "Click Here To Read" },
    { id: 16, title: "Pharma company, its employees convicted for ‘illegal diversion’ of meth precursor abroad", detail: "Click Here To Read" },
    { id: 17, title: "NCB sizes ganja worth Rs 85 Lakh at Charbagh Railway Station", detail: "Click Here To Read" },
    { id: 18, title: "NCB Freezes ₹41.64 Lakh Worth Assets Of Navi Mumbai Drug Trafficker Navin Chichkar", detail: "Click Here To Read" },
    { id: 19, title: "NCB destroys 2106kg ganja items", detail: "Click Here To Read" },
    { id: 20, title: "NCB Arrests 5 From AP in Hashish Oil Trafficking Case", detail: "Click Here To Read" },
    { id: 21, title: "Ketamelon drugs expose: NCB files chargesheet; eye on UK Australia links", detail: "Click Here To Read" },
    { id: 22, title: "NCB Chennai freezes Rs 12.33 crore in drug-linked assets", detail: "Click Here To Read" },
    { id: 23, title: "NCB: सऊदी अरब जा रहे हैं तो दवाओं की ऑनलाइन मंजूरी लें, तय सीमा से अधिक मात्रा में है दवा तो होगी कार्रवाई", detail: "Click Here To Read" },
    { id: 24, title: "कानपुर में एनसीबी और आरपीएफ की बड़ी कार्रवाई, विदेशी नशे की महिला तस्कर गिरफ्तार", detail: "Click Here To Read" },
    { id: 25, title: "यूपी में मांग से 700 करोड़ रुपए ज्यादा की कफ सिरप बिकी, जांच के दौरान 52 जिलों में 161 एफआईआर दर्ज", detail: "Click Here To Read" }
];

function LatestNews() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 12;

    // Logic for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setIsTransitioning(true);

        // GIGW 3.0: Providing visual feedback and enough time for transition
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsTransitioning(false);
            window.scrollTo({ top: 300, behavior: "smooth" });
        }, 300); // Reduced to 300ms for a snappier feel
    };

    const getPageNumbers = () => {
        const span = 3;
        let start = currentPage - Math.floor(span / 2);
        start = Math.max(start, 1);
        let end = start + span - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - span + 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="latest-news-page">
            <PageBanner
                title="Latest"
                highlightWord="News"
                subtitle="Daily updates and official news from Narcotics Control Bureau"
                breadcrumbLabel="Latest News"
            />

            <section className="news-section">
                <div className="container">
                    <div className="news-header-v2">
                        <span className="top-label">OFFICIAL UPDATES</span>
                        <h2>Latest Announcements</h2>
                        <div className="section-divider">
                            <span className="line"></span>
                            <span className="dot"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className={`row g-2 news-grid-items ${isTransitioning ? 'transitioning' : ''}`}>
                        {currentItems.map((item) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                <div className="news-card-v2">
                                    <div className="card-icon-wrapper">
                                        <i className="bi bi-link-45deg"></i>
                                    </div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <a href="#" className="btn-view-link">
                                        View Link
                                    </a>
                                </div>
                            </div>
                        ))}
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
                                    {getPageNumbers().map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => num !== currentPage && paginate(num)}
                                            className={`page-number ${currentPage === num ? 'active' : ''}`}
                                        >
                                            {num}
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

export default LatestNews;
