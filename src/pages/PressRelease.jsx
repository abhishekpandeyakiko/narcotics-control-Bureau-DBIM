import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import "../styles/LatestNews.scss"; // Reusing the same beautiful styles

const pressReleaseData = [
    { id: 1, title: "NCB SECURES MAJOR CONVICTION IN PSEUDOEPHEDRINE DIVERSION CASE INVOLVING ALPS LIFE SCIENCES", detail: "View", date: "12th January, 2026", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 2, title: "UNION HOME MINISTER AND MINISTER OF COOPERATION, SHRI AMIT SHAH CHAIRS 9TH APEX LEVEL MEETING OF NCORD IN NEW DELHI", detail: "Download", date: "09th January, 2026", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 3, title: "Year End Press Release - 2025", detail: "View", date: "07th January, 2026", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 4, title: "SAUDI ARABIA INTRODUCES MANDATORY ONLINE CLEARANCE FOR CARRYING MEDICINES; TRAVELLERS ADVISED TO CHECK RESTRICTED DRUGS LIST", detail: "Download", date: "02nd January, 2026", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 5, title: "UNION HOME MINISTER AND MINISTER OF COOPERATION SHRI AMIT SHAH CONGRATULATES JOINT TEAM OF NCB AND DELHI POLICE FOR BUSTING MEGA TRANS-NATIONAL METHAMPHETAMINE CARTEL UNDER OPERATION “CRYSTAL FORTRESS”", detail: "View", date: "23rd November, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 6, title: "NCB SEIZES OVER 28 KG OF HIGH-GRADE HYDROPONIC GANJA AT CHENNAI INTERNATIONAL AIRPORT; TWO WOMEN ARRESTED", detail: "Download", date: "15th November, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 7, title: "NCB ACHIEVES CONVICTION OF 219 DRUG TRAFFICKERS IN 103 NDPS CASES IN 2025.", detail: "View", date: "08th November, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 8, title: "NCB & CBSE ORGANISE AWARENESS DRIVE IN A DELHI SCHOOL TO FOSTER A DRUG-FREE SCHOOL ENVIRONMENT", detail: "Download", date: "24th October, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 9, title: "2nd ANTF Conference of Heads of States & UTs concludes in New Delhi with renewed pledge for a Drug-Free India", detail: "Download", date: "18th September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 10, title: "NCB gets published INTERPOL silver notice to trace assets of Dubai based fugitive in 2024 Delhi cocaine recovery case", detail: "Download", date: "04th September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 11, title: "NCB-CBSE MoU Signing Ceremony and Awareness Program on Prevention of Substance Abuse", detail: "Download", date: "03rd September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 12, title: "SEIZURE OF 5.618 KG COCAINE WORTH 60 CRORES AT CHENNAI INTERNATIONAL AIRPORT, TAMIL NADU", detail: "Download", date: "02nd September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 13, title: "Drug Traffickers Sentenced to 20 Years Rigorous Imprisonment", detail: "Download", date: "01st September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 14, title: "PROPERTIES OF DRUG SYNDICATE KINGPIN WORTH Rs 2.36 CRORES FREEZED", detail: "Download", date: "01st September, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 15, title: "Seizure of 4.166 Kg Opium: NCB Jodhpur Busts Trafficking Module, Four Arrested", detail: "Download", date: "18th AUGUST, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 16, title: "NCB Apprehends Long-Hunted Absconders in Landmark Heroin & Opium Cases Decades-Long Vigilance Pays Off", detail: "Download", date: "13th AUGUST, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 17, title: "Drug Traffickers sentenced to 03 Years Rigorous Imprisonment", detail: "Download", date: "08th AUGUST, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 18, title: "Drug Traffickers sentenced to 20 Years Rigorous Imprisonment", detail: "Download", date: "31st JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 19, title: "Apprehension of Accused by NCB Jammu", detail: "Download", date: "31st JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 20, title: "Apprehension of absconder by NCB Chennai", detail: "Download", date: "29th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 21, title: "Busting of clandestine labs", detail: "Download", date: "27th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 22, title: "Drug traffickers sentenced to 15 years rigorous imprisonment", detail: "Download", date: "23rd JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 23, title: "NCB secures 10 years rigorous imprisonment to accused in 2021 Patiala opium recovery case", detail: "Download", date: "22nd JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 24, title: "Drug traffickers sentenced to 10 years rigorous imprisonment", detail: "Download", date: "21st JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 25, title: "NCB Srinagar busts major poppy straw smuggling network; two arrested", detail: "Download", date: "13th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 26, title: "NCB secures freezing of illegally acquired property worth ₹7.81 crores in amphetamine case", detail: "Download", date: "11th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 27, title: "NCB Bengaluru busts African drug syndicate; 9 Kg Methamphetamine seized in two operations", detail: "Download", date: "11th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 28, title: "Busting of a clandestine lab manufacturing Mephedrone by NCB Jodhpur Zonal Unit", detail: "Download", date: "08th JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 29, title: "OPERATION-MED MAX-PIB", detail: "Download", date: "2nd JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 30, title: "Drug Traffickers sentenced to 20 Years Rigorous Imprisonment", detail: "Download", date: "1st JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 31, title: "NCB Busts Top Darknet Drug Vendor \"Ketamelon\" in operation MELON", detail: "Download", date: "1st JULY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 32, title: "NCB Organizes Nationwide Nasha Mukt Pakhwada (fortnightly) a campaign against drug abuse", detail: "Download", date: "26th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 33, title: "DETENTION OF ACCUSED UNDER PIT NDPS ACT, 1988 BY NCB KOLKATA", detail: "Download", date: "25th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 34, title: "NCB Launches Nationwide Cyclothons and Bike Rallies to Promote a Drug-Free India", detail: "Download", date: "22nd JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 35, title: "\"NCB SECURE FREEZING OF ILLEGALLY ACQUIRED PROPERTY IN 1.47 KGS METHAMPHETAMINE SEIZURE CASE\", CHENNAI", detail: "Download", date: "10th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 36, title: "12 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, PATNA", detail: "Download", date: "9th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 37, title: "FREEZING OF PROPERTIES HAVING REGISTERED VALUE OF ₹5.33 CRORES, JAMMU", detail: "Download", date: "9th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 38, title: "\"NCB SECURES FREEZING OF ILLEGALLY ACQUIRED PROPERTY WORTH ₹ 9.20 CRORES IN AMPHETAMINE TRAFFICKING CASE\", HEAD QUARTER", detail: "Download", date: "8th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 39, title: "\"DISMANTLING OF A CLANDESTINE PHARMA MANUFACTURING UNIT BY NCB DELHI ZONAL UNIT\", DELHI", detail: "Download", date: "7th JUNE, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 40, title: "10 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, CHENNAI", detail: "Download", date: "30th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 41, title: "20 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, PATNA", detail: "Download", date: "29th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 42, title: "FREEZING OF PROPERTIES HAVING REGISTERED VALUE OF WORTH ₹ 2.01 CRORES, JODHPUR", detail: "Download", date: "29th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 43, title: "10 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, GUWAHATI", detail: "Download", date: "29th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 44, title: "\"DEPORTATION OF A KINGPIN BEHIND THE TRANS-NATIONAL DRUG TRAFFICKING SYNDICATE FROM MALAYSIA\", MUMBAI", detail: "Download", date: "28th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 45, title: "SEIZURE OF 296.204 KILOGRAMS GANJA ,03 ARRESTED, JODHPUR", detail: "Download", date: "22nd MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 46, title: "SEIZURE OF 6 KGS GANJA AT CENTRAL RAILWAY STATION, CHENNAI", detail: "Download", date: "21st MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 47, title: "DETENTION OF FAISAL JAVED SHAIKH UNDER PIT NDPS ACT, 1988, MUMBAI", detail: "Download", date: "20th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 48, title: "FREEZING OF PROPERTIES HAVE A REGISTERED VALUE OF RS. 2.07 CRORE, DELHI", detail: "Download", date: "20th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 49, title: "NCB SECURES DEPORTATION OF ABSCONDING ACCUSED FROM UAE IN MAJOR NARCOTICS CASE, BENGALURU", detail: "Download", date: "12th MAY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 50, title: "NCB SEIZES 10.068 KG OF CHARAS AND ARRESTS TWO PERSONS, LUCKNOW", detail: "Download", date: "28th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 51, title: "NCB SEIZES 5 KG OF CHARAS AND ARRESTS ONE PERSONS, GORAKHPUR", detail: "Download", date: "28th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 52, title: "NCB SEIZES 3.5 KG OF OPIUM AND ARRESTS TWO PERSO, LUCKNOW", detail: "Download", date: "28th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 53, title: "\"NCB SEIZES 1.36 CRORE PSYCHOTROPIC TABLETS FROM HIMACHAL PRADESH & DELHI AND 11,693 CBCS BOTTLES & 2.9 KG OF TRAMADOL POWDER FROM HARIDWAR\", AMRITSAR", detail: "Download", date: "26th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 54, title: "10 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, PATNA", detail: "Download", date: "20th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 55, title: "15 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, INDORE", detail: "Download", date: "13th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 56, title: "10 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, AHMEDABAD", detail: "Download", date: "11th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 57, title: "\"NCB SEIZES 30.4 KG METHAMPHETAMINE TABLETS (YABA) WORTH RS24.32 CRORES AND ARRESTS THREE PERSONS IN TWO CASES\", GUWAHATI", detail: "Download", date: "10th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 58, title: "\"NCB UNEARTH AN INTERNATIONAL SYNDICATE WITH SEIZURE OF 50 BLOTS OF LSD\", COCHIN", detail: "Download", date: "8th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 59, title: "NCB SEIZES 118 KGS OF GANJA AND ARRESTS FOUR PERSONS, KOLKATA", detail: "Download", date: "8th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 60, title: "10 YEARS OF RIGOROUS IMPRISONMENT IN DRUG SMUGGLING CASE, INDORE", detail: "Download", date: "8th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 61, title: "NCB ACHIVES 17 CONVICTIONS IN 15 DAYS, GUWAHATI, CHANDIGARH, RANCHI, COCHIN, CHENNAI", detail: "Download", date: "8th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 62, title: "APPREHENSION OF ABSCONDER BY NCB AHMEDABAD", detail: "Download", date: "8th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 63, title: "COMPETENT AUTHORITY CONFIRMS THE FREEZING ORDER OF ILLEGALLY ACQUIRED PROPERTIES WORTH RS35.5 LAKHS, JODHPUR", detail: "Download", date: "7th APRIL, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 64, title: "PRESS NOTE PITNDPS, HEAD QUARTER", detail: "Download", date: "27th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 65, title: "BUSTING OF CLANDESTINE LAB AND SEIZURE OF 46.8 KG OF MEPHEDRONE (MD), MUMBAI", detail: "Download", date: "26th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 66, title: "FREEZING ORDER OF ILLEGALLY ACQUIRED PROPERTIES WORTH RS 42 LAKHS CONFIRMED BY SAFEMA, HYDERABAD", detail: "Download", date: "25th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 67, title: "FREEZING ORDER ISSUED IN SEIZURE OF 3.056 KGS METHAMPHETAMINE EFFECTED IN NOVEMBER 2023, CHENNAI", detail: "Download", date: "17th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 68, title: "FREEZING ORDER ISSUED IN SEIZURE OF 6.924 KGS METHAMPHETAMINE EFFECTED IN JULY 2024, CHENNAI", detail: "Download", date: "17th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 69, title: "DRUG TRAFFICKER SENTENCED TO 12 YEARS RIGOROUS IMPRISONMENT IN AHMEDABAD", detail: "Download", date: "17th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 70, title: "SEIZURE OF 7200 BOTTLES (963.432 KGS) OF CBCS, 01 ARRESTED IN MUMBAI", detail: "Download", date: "6th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 71, title: "BUSTING OF INTERNATIONAL DRUG CARTEL IN MUMBAI", detail: "Download", date: "5th MARCH, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 72, title: "REGIONAL CONFERENCE ON ‘DRUG TRAFFICKING AND NATIONAL SECURITY’ HELD ON 11th JANUARY, 2025 IN NEW DELHI: CHAIRED BY HON'BLE UNION HOME MINISTER", detail: "Download", date: "11th JANUARY, 2025", image: "/press_release_thumbnail_1772533750322.png" },
    { id: 73, title: "7th APEX LEVEL MEETING OF NCORD HELD ON 18th JULY, 2024 IN NEW DELHI: CHAIRED BY HON'BLE UNION HOME MINISTER", detail: "Download", date: "18th JULY, 2024", image: "/press_release_thumbnail_1772533750322.png" }
];

function PressRelease() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchMonth, setSearchMonth] = useState("All");
    const [searchYear, setSearchYear] = useState("All");

    const itemsPerPage = 12;

    const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = ["All", "2026", "2025", "2024", "2023"];

    const filteredData = pressReleaseData.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchesMonth = searchMonth === "All" || item.date.includes(searchMonth);
        const matchesYear = searchYear === "All" || item.date.includes(searchYear);
        return matchesTitle && matchesMonth && matchesYear;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleSearch = () => {
        setCurrentPage(1);
    };

    const handleReset = () => {
        setSearchTitle("");
        setSearchMonth("All");
        setSearchYear("All");
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsTransitioning(false);
            window.scrollTo({ top: 400, behavior: "smooth" });
        }, 300);
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
        <div className="archive-press-page">
            <PageBanner
                title="Press &"
                highlightWord="Media"
                subtitle="Explore official statements, case breakthroughs, and strategic narcotic control updates directly from the Bureau."
                breadcrumbLabel="Press Release"
            />

            <section className="archive-main-section">
                <div className="container">
                    <div className="archive-header-v2">
                        <span className="top-label">OFFICIAL ARCHIVE</span>
                        <h2>Archive Press Release</h2>
                        <div className="divider-v3">
                            <span className="line"></span>
                            <span className="dot"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    {/* Search & Filter Box */}
                    <div className="archive-filter-panel">
                        <div className="row g-3 align-items-end">
                            <div className="col-lg-4 col-md-12">
                                <label>Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter the Title"
                                    className="archive-input"
                                    value={searchTitle}
                                    onChange={(e) => setSearchTitle(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <label>Month</label>
                                <select
                                    className="archive-select"
                                    value={searchMonth}
                                    onChange={(e) => setSearchMonth(e.target.value)}
                                >
                                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <label>Year</label>
                                <select
                                    className="archive-select"
                                    value={searchYear}
                                    onChange={(e) => setSearchYear(e.target.value)}
                                >
                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="action-btns-row d-flex gap-2">
                                    <button className="btn-archive-search w-100" onClick={handleSearch}>Search</button>
                                    <button className="btn-archive-reset w-100" onClick={handleReset}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="archive-note">
                        Note: The table below provides references to PDF in any of the two languages either English or Hindi
                    </div>

                    <div className={`row g-4 archive-grid ${isTransitioning ? 'transitioning' : ''}`}>
                        {currentItems.map((item) => (
                            <div className="col-lg-3 col-md-6" key={item.id}>
                                <div className="archive-card">
                                    <div className="card-top-visual">
                                        <img src="/ncb_seal_modern.svg" className="main-doc-img" alt="NCB Logo" />
                                        <span className="archive-date-badge">{item.date}</span>
                                        {item.id === 1 && <div className="new-badge-archive">new</div>}
                                    </div>
                                    <div className="card-info-body">
                                        <h3 className="release-title">
                                            {item.title}
                                        </h3>
                                        <div className="card-footer-flex">
                                            <div className="meta-compact">
                                                <div className="meta-item-mini">
                                                    <i className="bi bi-hdd-fill"></i>
                                                    <span>184 KB</span>
                                                </div>
                                                <div className="meta-item-mini">
                                                    <i className="bi bi-translate"></i>
                                                    <span>EN</span>
                                                </div>
                                            </div>
                                            <div className="archive-card-actions">
                                                {item.detail === "Download" ? (
                                                    <button className="btn-download-doc">
                                                        <i className="bi bi-file-earmark-pdf"></i> DOWNLOAD
                                                    </button>
                                                ) : (
                                                    <button className="btn-view-doc">
                                                        <i className="bi bi-eye"></i> VIEW
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
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

export default PressRelease;
