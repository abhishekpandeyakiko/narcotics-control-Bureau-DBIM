import React from 'react';
import PageBanner from '../components/PageBanner';

const MouCbse = () => {
    return (
        <div className="about-page">
            <PageBanner
                title="MoU with"
                highlightWord="CBSE"
                subtitle="Strengthening cooperation in creating a drug-free school environment."
                breadcrumbLabel="NCB-CBSE MoU"
            />

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-primary-subtle content-fade-in">
                                <div className="text-center mb-5">
                                    <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-4 mb-3 fw-bold border border-primary-subtle shadow-sm" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        <i className="bi bi-shield-check me-2"></i>OFFICIAL PARTNERSHIP
                                    </span>
                                    <h2 className="fw-bold text-dark display-5 mb-1" style={{ letterSpacing: '-1px' }}>
                                        Narcotics Control Bureau <span className="text-vibrant">&</span> CBSE
                                    </h2>
                                    <p className="text-vibrant fw-bold text-uppercase mt-0" style={{ letterSpacing: '5px', fontSize: '1rem' }}>
                                        Landmark Memorandum of Understanding
                                    </p>
                                    <div className="mx-auto mt-4" style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #1e5ba3, #00d2ff)', borderRadius: '10px' }}></div>
                                </div>

                                <p className="lead-text text-dark fw-semibold mb-4 text-justify" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    The Narcotics Control Bureau (NCB) and Central Board of Secondary Education (CBSE), today signed a landmark Memorandum of Understanding (MoU) at the CBSE Headquarters, Dwarka, New Delhi, to strengthen cooperation in creating drug-free school environment and raising awareness against substance abuse.
                                </p>

                                <div className="p-4 rounded-4 border-start border-4 border-primary shadow-sm mb-4 position-relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f8fafc, #ffffff)' }}>
                                    <i className="bi bi-quote position-absolute text-primary opacity-10" style={{ fontSize: '4rem', top: '-10px', right: '10px' }}></i>
                                    <p className="mb-0 text-dark fw-medium" style={{ fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>
                                        The MoU was signed by Shri Anurag Garg, IPS, Director General, NCB and Shri Rahul Singh, IAS, Chairperson, CBSE in the presence of more than 500 school principals and counsellors associated with CBSE affiliated schools of NCR.
                                    </p>
                                </div>

                                <p className="text-muted mb-5" style={{ lineHeight: "1.8", fontSize: '1.05rem', textAlign: 'justify' }}>
                                    In his address, Shri Anurag Garg, Director General, NCB, highlighted the crucial role of educational institutions in combating the menace of drugs and reaffirmed NCB’s support in conducting awareness campaigns, workshops, and counselling programs. He also informed about the <strong>MANAS helpline – 1933</strong>, where any citizen can provide information regarding drug trafficking as well as seek assistance for counselling or rehabilitation, with complete assurance that their identity will be kept confidential throughout the process. DG, NCB also discussed the increasing use of vapes, which can serve as a gateway to nicotine and narcotics addiction. He further informed that the manufacture, production, import, export, transport, and advertisement of vapes are prohibited and punishable under law, and requested that related information be shared with law enforcement authorities.
                                </p>

                                <hr className="my-5 opacity-25" />

                                <div className="row align-items-stretch g-3">
                                    <div className="col-lg-7">
                                        <div className="d-flex flex-column gap-3 h-100">
                                            <h5 className="fw-bold text-dark mb-1">MoU Signing Ceremony Highlights</h5>
                                            <div className="image-wrapper rounded-4 overflow-hidden border-0 h-100 flex-grow-1 position-relative" style={{ minHeight: '250px', maxHeight: '270px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                                                <img src="/cbse_mou_signing.png" alt="NCB and CBSE MoU Signing" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }} />
                                                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                                                    <span className="badge bg-vibrant text-white border-0 py-2 px-3 shadow-lg" style={{ fontSize: '0.8rem', borderRadius: '10px' }}>
                                                        <i className="bi bi-camera-fill me-2"></i>MoU Signing Ceremony Highlights
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card-decor-box p-3 rounded-4 text-center h-100 d-flex flex-column justify-content-center align-items-center shadow-sm"
                                            style={{
                                                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                                border: '1px solid rgba(30, 91, 163, 0.12)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                            <div className="icon-globe-wrap mb-2 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '56px',
                                                    height: '56px',
                                                    background: 'rgba(30, 91, 163, 0.08)',
                                                    borderRadius: '14px',
                                                    color: '#1e5ba3',
                                                    fontSize: '1.8rem',
                                                    boxShadow: '0 4px 12px rgba(30, 91, 163, 0.08)'
                                                }}>
                                                <i className="bi bi-file-earmark-pdf-fill"></i>
                                            </div>
                                            <h5 className="fw-bold mb-1 text-dark" style={{ letterSpacing: '-0.3px', fontSize: '1.1rem' }}>Official Release</h5>
                                            <p className="text-muted mb-3 px-2" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                                Detailed documentation of the landmark NCB-CBSE partnership.
                                            </p>

                                            <div className="w-100 mt-auto" style={{ position: 'relative', zIndex: 2 }}>
                                                <a href="#" className="btn-view-link w-100 py-2 mb-2 d-flex align-items-center justify-content-center shadow-sm" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem' }}>
                                                    <i className="bi bi-cloud-arrow-down-fill me-2 fs-5"></i>
                                                    DOWNLOAD PDF
                                                </a>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <span className="d-flex align-items-center gap-1 text-muted small fw-bold">
                                                        <i className="bi bi-hdd-stack-fill text-primary"></i> 2.4 MB
                                                    </span>
                                                    <span className="d-flex align-items-center gap-1 text-muted small fw-bold">
                                                        <i className="bi bi-globe text-success"></i> EN/HI
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MouCbse;
