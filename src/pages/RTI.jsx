import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/RTI.scss";

function RTI() {
    return (
        <div className="rti-page">
            <PageBanner
                title="Right To"
                highlightWord="Information"
                subtitle="Ensuring transparency and accountability in our operations"
                breadcrumbLabel="RTI"
            />

            <section className="rti-content-section">
                <div className="container">
                    <div className="rti-header-v2">
                        <span className="top-label">TRANSPARENCY</span>
                        <h2>Right to Information</h2>
                        <div className="divider-v3">
                            <span className="line"></span>
                            <span className="dot"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="rti-container">
                        <div className="act-header">
                            <span className="hindi-title">सूचना का अधिकार अधिनियम, 2005</span>
                            <span className="hindi-subtitle">(2005 का अधिनियम संख्यांक 22, दिनांक 21.06.2005)</span>
                            <span className="hindi-subtitle">(सा.का.नि. 347, दिनांक 8.10.2005 द्वारा यथासंशोधित)</span>

                            <span className="english-title">RIGHT TO INFORMATION ACT, 2005</span>
                            <span className="english-subtitle">( Act No 22 of 2005, dt. 21-6-2005)</span>
                            <span className="english-subtitle">( As amended vide GSR 347, dt. 8-10-2005)</span>
                        </div>

                        <div className="preamble-box">
                            <p>
                                An Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities, in order to promote transparency and accountability in the working of every public authority, the constitution of Central Information Commission and State Information Commissions and for matter connected therewith or incidental thereto.
                            </p>
                        </div>

                        <div className="section-highlight">
                            <h3>Section -24 of RTI Act, 2005:</h3>
                            <span className="subsection-title">Sec. 24 : Act not to apply to certain organizations.-</span>
                        </div>

                        <div className="legal-text">
                            <ul>
                                <li>
                                    <span className="clause-number">(1)</span>
                                    Nothing contained in this Act shall apply to the intelligence and security organizations specified in the Second Schedule, being organization established by the Central Government or any information furnished by such organizations to that Government:

                                    <div className="proviso">
                                        <strong>Provided:</strong>
                                        Information pertaining to the allegations of corruption and human rights violations shall not be excluded under this sub-section.
                                    </div>
                                    <div className="proviso">
                                        <strong>Provided Further:</strong>
                                        In the case of information sought for is in respect of allegations of violation of human rights, the information shall only be provided after the approval of the Central Information Commission, and notwithstanding anything contained in Section 7, such information shall be provided within forty five days from the date of the receipt of request.
                                    </div>
                                </li>

                                <li>
                                    <span className="clause-number">(2)</span>
                                    The central Government may, by notification in the Official Gazette, amend the Schedule by including therein any other intelligence or security organization established by that Government or omitting there from any organization already specified therein and on the publication of such notification, such organization shall be deemed to be included in or, as the case may be, omitted from the Schedule.
                                </li>

                                <li>
                                    <span className="clause-number">(3)</span>
                                    Every notification issued under sub-section (2) shall be laid before each Hose of Parliament.
                                </li>

                                <li>
                                    <span className="clause-number">(4)</span>
                                    Nothing contained in this Act shall apply to such intelligence and security organization being organization established by the State Government, as that Government may, from time to time, by notification in the Official Gazette, specify:

                                    <div className="proviso">
                                        <strong>Provided:</strong>
                                        Information pertaining to the allegations of corruption and human rights violations shall not be excluded under this sub-section.
                                    </div>
                                    <div className="proviso">
                                        <strong>Provided Further:</strong>
                                        In the case of information sought for is in respect of allegations of violation of human rights, the information shall only be provided after approval of the State Information Commission and, notwithstanding anything contained in Section 7, such information shall be provided within forty-five days from the date of the receipt of request.
                                    </div>
                                </li>

                                <li>
                                    <span className="clause-number">(5)</span>
                                    Every notification issued under sub-section (4) shall be laid before the State Legislature.
                                </li>
                            </ul>
                        </div>

                        <div className="statement-box">
                            <p>
                                NCB is exempted from the purview of RTI Act, to the extent as provided under Section 24 and second schedule of RTI Act 2005, unless the information sought pertains to the allegations of corruption and human rights violations.
                            </p>
                        </div>

                        <div className="info-footer">
                            <p>List of CPIOs and ACPIOs is available on News and Events Section of Home page</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RTI;
