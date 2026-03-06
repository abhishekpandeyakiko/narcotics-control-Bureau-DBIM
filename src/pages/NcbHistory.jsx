import React from "react";
import PageBanner from "../components/PageBanner";
import "../styles/NcbHistory.scss";

function NcbHistory() {
    return (
        <div className="ncb-history-page">
            <PageBanner
                title="History"
                highlightWord="NCB"
                subtitle="The genesis and evolution of the Narcotics Control Bureau"
                breadcrumbLabel="History"
            />

            <section className="history-section pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">

                            <h2 className="section-title text-start mb-4 border-bottom pb-2 uppercase-title">
                                <span><i className="bi bi-clock-history me-2"></i>Established 1986</span>
                                <span className="title-text">HISTORY OF NARCOTICS CONTROL BUREAU</span>
                            </h2>

                            <div className="history-text-content">
                                <p className="history-paragraph first-para">
                                    The National Policy on Narcotic Drugs and Psychotropic Substances is based on the Directive Principles, contained in Article 47 of the Indian Constitution, which direct the State to endeavour to bring about prohibition of the consumption, except for medicinal purposes, of intoxicating drugs injurious to health. The government’s policy on the subject which flows from this constitutional provision is also guided by the international conventions on the subject.
                                </p>

                                <p className="history-paragraph">
                                    India is a signatory to the single Convention on Narcotic Drugs 1961, as amended by the 1972 Protocol,the Conventions on Psychotropic Substances, 1971 and the United Nations Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, 1988.
                                </p>

                                <p className="history-paragraph">
                                    The broad legislative policy is contained in the three Central Acts, viz. Drugs and Cosmetics Act, 1940, The Narcotic Drugs and Psychotropic Substances Act, 1985, and The Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988. The responsibility of drug abuse control, which is a central function, is carried out through a number of Ministries, Departments and Organisations. These include the Ministry of Finance, Department of Revenue which has the nodal co-ordination role as administrator of the Narcotic Drugs and Psychotropic Substances Act, 1985 and the Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988.
                                </p>

                                <p className="history-paragraph">
                                    The Narcotic Drugs and Psychotropic Substances Act, 1985 which came into effect from the 14th November, 1985 made an express provision for constituting a Central Authority for the purpose of exercising the powers and functions of the Central Government under the Act.
                                </p>

                                <div className="highlight-para-container">
                                    <p className="history-paragraph fw-semibold highlight-para">
                                        <i className="bi bi-shield-fill-check me-3 text-vibrant shadow-icon"></i>
                                        In presence of this provision, the Government of India constituted the NARCOTICS CONTROL BUREAU on the 17th of March, 1986. The Bureau, subject to the supervision and control of the Central Government, is to exercise the powers and functions of the Central Government for taking measures with respect to:
                                    </p>
                                </div>

                                <ul className="history-functions-list">
                                    <li>
                                        <i className="bi bi-check-lg list-icon"></i>
                                        Co-ordination of actions by various offices, State Governments and other authorities under the N.D.P.S. Act, Customs Act, Drugs and Cosmetics Act and any other law for the time being in force in connection with the enforcement provisions of the NDPS Act, 1985.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-lg list-icon"></i>
                                        Implementation of the obligation in respect of counter measures against illicit traffic under the various international conventions and protocols that are in force at present or which may be ratified or acceded to by India in future.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-lg list-icon"></i>
                                        Assistance to concerned authorities in foreign countries and concerned international organisations to facilitate coordination and universal action for prevention and suppression of illicit traffic in these drugs and substances.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-lg list-icon"></i>
                                        Coordination of actions taken by the other concerned Ministries, Departments and Organizations in respect of matters relating to drug abuse.
                                    </li>
                                </ul>

                                <div className="zonal-info-card">
                                    <p className="history-paragraph">
                                        <i className="bi bi-geo-alt-fill me-2 text-vibrant"></i>
                                        The Narcotics Control Bureau is the apex coordinating agency. It also functions as an enforcement agency through its zones and sub-zones. Zones located at Ahmedabad, Bangaluru, Chandigarh, Chennai, Delhi, Guwahati, Indore, Jammu, Jodhpur, Kolkata, Lucknow, Mumbai, and Patna. Sub-zones located at Amritsar, Ajmer, Bhubaneswar, Dehradun, Goa, Hyderabad, Imphal, Madurai, Mandi, Mandsaur, Ranchi and Cochin. The zones and sub-zones collect and analyse data related to seizures of narcotic drugs and psychotropic substance, study trends, modus operandi, collect and disseminate intelligence and work in close cooperation with the Customs, State Police and other law enforcement agencies.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NcbHistory;
