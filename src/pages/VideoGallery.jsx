import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/VideoGallery.scss";

const VideoGallery = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const itemsPerPage = 12;

    const getYoutubeThumbnail = (url) => {
        if (!url || !url.includes("youtu")) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
        }
        return null;
    };

    const videos = useMemo(() => [
        { id: 1, title: "Documentary Film on NCB (Hindi)", url: "https://narcoticsindia.nic.in/assets/videos/ncbfilm12mhin.mp4", type: "Documentary", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/1.jpg" },
        { id: 2, title: "Documentary Film on NCB (English)", url: "https://narcoticsindia.nic.in/assets/videos/ncbfilm12meng.mp4", type: "Documentary", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/2.jpg" },
        { id: 3, title: "Short Documentary Film on NCB (Hindi)", url: "https://narcoticsindia.nic.in/assets/videos/ncbfilm06mhin.mp4", type: "Documentary", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/3.jpg" },
        { id: 4, title: "Short Documentary Film on NCB (English)", url: "https://narcoticsindia.nic.in/assets/videos/ncbfilm06meng.mp4", type: "Documentary", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/4.jpg" },
        { id: 5, title: "Film on National Narcotics Canine Pool (NAR-K9)", url: "https://narcoticsindia.nic.in/assets/videos/filmnark9.mp4", type: "Documentary", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/13.jpg" },
        { id: 6, title: "Film on NCB's Digital Initiative", url: "https://narcoticsindia.nic.in/assets/videos/ncbdigint.mp4", type: "Awareness", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/6.jpg" },
        { id: 7, title: "Message from Hon'ble HM Sh. Amit Shah", url: "https://narcoticsindia.nic.in/assets/videos/hmmessage.mp4", type: "Official", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/14.jpg" },
        { id: 8, title: "Message from DG NCB Sh. Satya Narayan Pradhan", url: "https://narcoticsindia.nic.in/assets/videos/dgmj22.mp4", type: "Official", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/8.jpg" },
        { id: 9, title: "Interaction regarding Awareness on 'Drug Abuse'", url: "https://narcoticsindia.nic.in/assets/videos/dgiit.mp4", type: "Seminar", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/15.jpg" },
        { id: 10, title: "NCB - Vision & Mission", url: "https://narcoticsindia.nic.in/assets/videos/vision.mp4", type: "Official", thumbnail: "https://narcoticsindia.nic.in/gallery/random_gallery/9.jpg" },
        { id: 11, title: "Sachinandan Haridas’ Call to Youth", url: "https://www.youtube.com/shorts/IgMtwhokL7w", type: "YouTube", thumbnail: null },
        { id: 12, title: "Padma Shri Nagendranath Roy’s Message", url: "https://www.youtube.com/shorts/mdA5Be6T8vg", type: "YouTube", thumbnail: null },
        { id: 13, title: "Nasha Mukt Bharat Spot 7", url: "https://www.youtube.com/watch?v=77bF2ShJcw0", type: "YouTube", thumbnail: null },
        { id: 14, title: "Nasha Mukt Bharat Spot 9", url: "https://www.youtube.com/watch?v=bCcvZDylw6o", type: "YouTube", thumbnail: null },
        { id: 15, title: "Launch of NMBA Short Film 2022", url: "https://www.youtube.com/watch?v=JzV8y-7vKEM", type: "YouTube", thumbnail: null },
        { id: 16, title: "Short film on Nasha Mukt Bharat Abhiyaan", url: "https://www.youtube.com/watch?v=Fd5clV9SzRE", type: "YouTube", thumbnail: null },
        { id: 17, title: "Message by Sh. Amitabh Bachchan, Actor", url: "https://www.youtube.com/watch?v=LVVP2PtUgzc", type: "YouTube", thumbnail: null },
        { id: 18, title: "Message by Alia Bhatt | Actor's Message", url: "https://www.youtube.com/watch?v=cl-xRrwjhE8", type: "YouTube", thumbnail: null },
        { id: 19, title: "Message by Sh. Akshay Kumar, Actor", url: "https://www.youtube.com/watch?v=yNaz1Kgegng", type: "YouTube", thumbnail: null },
        { id: 20, title: "Message by Ms. Saina Nehwal, Sportsperson", url: "https://www.youtube.com/watch?v=7gFX47ol5Sc", type: "YouTube", thumbnail: null }
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
        <div className="video-gallery-page">
            <PageBanner
                title="Video"
                highlightWord="Gallery"
                subtitle="Official documentaries, messages and initiatives"
                breadcrumbLabel="Video Gallery"
            />

            <section className="py-5">
                <div className="container">
                    {/* <div className="section-header-v2 text-center mb-5">
                        <span className="top-label">VISUAL MEDIA</span>
                        <h2 className="title-text display-6 fw-bold">Official Video Library</h2>
                        <div className="section-divider mx-auto">
                            <div className="line"></div>
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <p className="mx-auto lead text-muted" style={{ maxWidth: "800px" }}>
                            Explore our comprehensive collection of documentaries, expert interactions, and official messages from high-ranking officials.
                        </p>
                    </div> */}

                    {/* Controls */}
                    <div className="controls-row-premium row align-items-center mx-0 mb-4 g-3">
                        <div className="col-md mt-0">
                            <h3 className="h6 fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                                Video Gallery Archive
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
                                    <div className="video-card-premium card h-100 border-0 shadow-sm overflow-hidden" onClick={() => setSelectedVideo(video)}>
                                        <div className="card-thumb-area position-relative d-flex align-items-center justify-content-center bg-light">
                                            <img
                                                src={video.type === "YouTube" ? getYoutubeThumbnail(video.url) : video.thumbnail}
                                                alt={video.title}
                                                className="thumb-img"
                                            />
                                            <div className="play-overlay position-absolute inset-0">
                                                <div className="play-btn-circle">
                                                    <i className="bi bi-play-fill"></i>
                                                </div>
                                            </div>
                                            <div className="video-type-badge position-absolute">
                                                {video.type}
                                            </div>
                                        </div>
                                        <div className="card-body p-3 pb-2 d-flex flex-column">
                                            <h3 className="video-title card-title h6 fw-bold mb-3 flex-grow-1">
                                                {video.title}
                                            </h3>
                                            <div className="card-footer p-0 mt-auto border-top bg-transparent">
                                                <div className="watch-btn d-flex align-items-center gap-2 fw-bold">
                                                    Watch Now <i className="bi bi-arrow-right-short fs-4"></i>
                                                </div>
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
                                        Please try different keywords.
                                    </p>
                                    <button className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm" onClick={() => setSearchTerm("")}>
                                        Show All Videos
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? "disabled" : ""}`}
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
                                            className={`page-number ${currentPage === num ? "active" : ""}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className={`page-control ${currentPage === totalPages ? "disabled" : ""}`}
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

            {/* Video Modal (Player) */}
            {selectedVideo && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.9)" }} onClick={() => setSelectedVideo(null)}>
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content border-0 bg-transparent">
                            <div className="modal-body p-0 position-relative">
                                <button className="position-fixed top-0 end-0 m-4 btn btn-link text-white text-decoration-none fs-2 z-3" onClick={() => setSelectedVideo(null)}>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <div className="video-wrapper ratio ratio-16x9">
                                    {selectedVideo.type === "YouTube" ? (
                                        <iframe
                                            src={selectedVideo.url.replace("watch?v=", "embed/").replace("shorts/", "embed/")}
                                            title={selectedVideo.title}
                                            allowFullScreen
                                            className="rounded-4 shadow-lg"
                                        ></iframe>
                                    ) : (
                                        <video
                                            controls
                                            autoPlay
                                            className="rounded-4 shadow-lg bg-black"
                                            src={selectedVideo.url}
                                        ></video>
                                    )}
                                </div>
                                <div className="mt-3 text-white text-center">
                                    <h4 className="fw-bold">{selectedVideo.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
