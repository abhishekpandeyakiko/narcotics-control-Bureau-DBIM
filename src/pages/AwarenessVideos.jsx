import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/AwarenessVideos.scss";

const AwarenessVideos = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Helper to extract YouTube thumbnail from URL (Supports Watch, Shorts, and Embed)
    const getYoutubeThumbnail = (url) => {
        if (!url) return "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg";

        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
        }

        // Fallback for direct ID or complex URLs
        return "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg";
    };

    const videos = useMemo(() => [
        { id: 1, title: "Sachinandan Haridas’ Call to India’s Youth | Say Yes to Life No to Drugs", category: "Campaigns", watchLink: "https://www.youtube.com/shorts/IgMtwhokL7w" },
        { id: 2, title: "Padma Shri Awardee Nagendranath Roy’s Message to India’s Youth | Say Yes to Life No to Drugs", category: "Campaigns", watchLink: "https://www.youtube.com/shorts/mdA5Be6T8vg" },
        { id: 3, title: "Rajyogini BK Sudha on Mission SPANDAN, an initiative by NCB in association with Brahma Kumaris", category: "Campaigns", watchLink: "https://www.youtube.com/shorts/_m8Wna-J5x4" },
        { id: 4, title: "Nasha Mukt Bharat, Video Spot 7 Hindi", category: "Campaigns", watchLink: "https://www.youtube.com/watch?v=77bF2ShJcw0" },
        { id: 5, title: "Nasha Mukt Bharat, Video Spot 9 Hindi", category: "Campaigns", watchLink: "https://www.youtube.com/watch?v=bCcvZDylw6o" },
        { id: 6, title: "Nasha Mukt Bharat, Video Spot 8 Hindi", category: "Campaigns", watchLink: "https://www.youtube.com/watch?v=2-JFvztEeL8" },
        { id: 7, title: "Launch of NMBA Short Film 2022", category: "Campaigns", watchLink: "https://www.youtube.com/watch?v=JzV8y-7vKEM" },
        { id: 8, title: "Short film on Nasha Mukt Bharat Abhiyaan", category: "Campaigns", watchLink: "https://www.youtube.com/watch?v=Fd5clV9SzRE" },
        { id: 9, title: "Message by Dr Sunil Jogi Ji, Padma Shree & Yash Bharti Awardee", category: "Others", watchLink: "https://www.youtube.com/watch?v=Bgtdy_G_7Z8" },
        { id: 10, title: "Message by Ms Malini Awasthi, Folk Singer", category: "Celebrity Messages", watchLink: "https://www.youtube.com/watch?v=_HVh9uKmiLc" },
        { id: 11, title: "Message by Sh Amitabh Bachchan, Actor", category: "Celebrity Messages", watchLink: "https://www.youtube.com/watch?v=LVVP2PtUgzc" },
        { id: 12, title: "Message by Shri Anil Chaudhary, ICC Umpire and Cricket", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=bV0mNhrLKDA" },
        { id: 13, title: "Message by Md Shami, Indian Cricketer & Arjuna Awardee", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=fi3kDTAMAl8" },
        { id: 14, title: "Message by Dr Kumar Vishwas, Poet", category: "Celebrity Messages", watchLink: "https://www.youtube.com/watch?v=AIfjhecjO3I" },
        { id: 15, title: "Alia Bhatt | Actor’s Message Against Drug Abuse #NCB", category: "Celebrity Messages", watchLink: "https://www.youtube.com/watch?v=cl-xRrwjhE8" },
        { id: 16, title: "Message by Sh. Sanjay Mishra, Indian Actor", category: "Celebrity Messages", watchLink: "https://www.youtube.com/watch?v=vDzjoYTCzu8" },
        { id: 17, title: "Message by Sh. Anand Kumar, Super 30, Patna", category: "Others", watchLink: "https://www.youtube.com/watch?v=VY_er23VB1g" },
        { id: 18, title: "Message by Sh. Amit, Paralympian", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=Rsar7xxG01s" },
        { id: 19, title: "Message by Mirabai Chanu, Weightlifter", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=gW_d834BZ0s" },
        { id: 20, title: "Message by Sh. R. B. Ramesh, Chess Coach and Dronacharya Awardee", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=7u20BlXrc6I" },
        { id: 21, title: "Message by Sonika Tandi, Olympic Athlete & Member of Indian Women's Hockey Team", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=uuZN46pgSgk" },
        { id: 22, title: "Message by Shubman Gill, Cricketer", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=IETz9zWvmo0" },
        { id: 23, title: "Message by Sh. Shivendra Singh, Hockey", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=I54WeIcsD9U" },
        { id: 24, title: "Message by Sh. Manpreet Singh, Kabaddi Team", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=mfbfhYHZOkY" },
        { id: 25, title: "Message by Sh. Banwari Lal Purohit, Hon'ble Governor, Punjab & Administrator", category: "Others", watchLink: "https://www.youtube.com/watch?v=4x--LhcJUEM" },
        { id: 26, title: "Message by Sanjeev Rajput, Shooter", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=Sg7q4I5Ylhw" },
        { id: 27, title: "Message by Savita Punia, Hockey Player", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=UJMFrjDCWwQ" },

        { id: 28, title: "Message by Deepa Karmakar, 1st Indian Olympic Gymnast", category: "Sportspersons", watchLink: "https://www.youtube.com/watch?v=WZghUVLnuyU" }
    ], []);

    const filteredVideos = useMemo(() => {
        return videos.filter(v =>
            v.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [videos, searchTerm]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = filteredVideos.slice(indexOfFirstItem, indexOfLastItem);



    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: "smooth" });
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
        <div className="awareness-videos-page">
            <PageBanner
                title="Awareness"
                highlightWord="Videos"
                subtitle="Voices of India united against drugs"
                breadcrumbLabel="Awareness Videos"
            />

            <section className="py-5">
                <div className="container">
                    {/* Header - Using Bootstrap for layout, custom SCSS for unique design elements */}
                    {/* <div className="section-header-v2 text-center mb-5">
                        <span className="top-label">PUBLIC OUTREACH</span>
                        <h2 className="title-text display-6 fw-bold">Public Awareness Library</h2>
                        <div className="section-divider mx-auto">
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <p className="description-text mx-auto lead text-muted">
                            Eminent personalities and achievers from all walks of life join the mission for a drug-free India.
                        </p>
                    </div> */}

                    {/* Controls - Premium Search & Info Layout */}
                    <div className="controls-row-premium row align-items-center mx-0 mb-4 g-3">
                        <div className="col-md mt-0">
                            <h3 className="h6 fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                                Awareness Videos Library
                                <span className="badge rounded-pill bg-light text-primary border px-2 px-md-3">
                                    {filteredVideos.length} Items
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-auto mt-0">
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search videos..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                                {searchTerm && (
                                    <button
                                        className="clear-search-btn"
                                        onClick={() => setSearchTerm("")}
                                        title="Clear search"
                                    >
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Grid Layout or Empty State */}
                    {currentVideos.length > 0 ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-3">
                            {currentVideos.map((video) => (
                                <div className="col" key={video.id}>
                                    <div className="video-card-premium card h-100 border-0 shadow-sm overflow-hidden">
                                        <div className="card-thumb-area position-relative d-flex align-items-center justify-content-center bg-light">
                                            {/* Automatic YouTube Thumbnail extraction */}
                                            <img
                                                src={getYoutubeThumbnail(video.watchLink)}
                                                alt={video.title}
                                                className="thumb-img-youtube"
                                            />

                                            <a href={video.watchLink} target="_blank" rel="noopener noreferrer" className="play-overlay position-absolute inset-0">
                                                <div className="play-btn-circle">
                                                    <i className="bi bi-play-fill"></i>
                                                </div>
                                            </a>
                                            <div className="youtube-logo-mini position-absolute">
                                                <i className="bi bi-youtube"></i>
                                            </div>
                                        </div>
                                        <div className="card-body p-3 d-flex flex-column">
                                            <h3 className="video-title card-title h6 fw-bold mb-3 flex-grow-1">
                                                {video.title}
                                            </h3>
                                            <div className="card-footer-action p-2 mt-auto border-top">
                                                <a href={video.watchLink} target="_blank" rel="noopener noreferrer" className="watch-now-btn d-flex align-items-center gap-2 text-decoration-none fw-bold">
                                                    Watch on YouTube <i className="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row justify-content-center py-5 my-5">
                            <div className="col-lg-7 text-center">
                                <div className="no-results-content bg-white p-5 rounded-4 shadow-sm border border-dashed mx-auto">
                                    <i className="bi bi-search display-1 mb-3 d-block text-muted opacity-25"></i>
                                    <h4 className="fw-bold text-dark mb-2">No Videos Found</h4>
                                    <p className="text-muted mb-4 text-break px-md-5">
                                        We couldn't find any videos matching <strong>"{searchTerm}"</strong>.
                                        Please try different keywords or browse our full library.
                                    </p>
                                    <button className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm" onClick={() => setSearchTerm("")}>
                                        Show All Videos
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Theme-Consistent Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                <div className="page-numbers">
                                    {getPageNumbers().map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => num !== currentPage && handlePageChange(num)}
                                            className={`page-number ${currentPage === num ? 'active' : ''}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
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
};

export default AwarenessVideos;
