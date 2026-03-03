import React from "react";
import PageBanner from "../components/PageBanner";

function Tenders() {
    return (
        <div className="tenders-page">
            <PageBanner
                title="Active"
                highlightWord="Tenders"
                subtitle="Procurement opportunities and bidding information"
                breadcrumbLabel="Tenders"
            />
            <div className="container py-5">
                <div className="card shadow-sm border-0 p-4">
                    <h2 className="mb-4">Recent Tenders</h2>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>Tender ID</th>
                                    <th>Description</th>
                                    <th>Last Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NCB/2026/T001</td>
                                    <td>Supply of forensic investigative kits</td>
                                    <td>March 25, 2026</td>
                                    <td><button className="btn btn-sm btn-outline-primary">Download PDF</button></td>
                                </tr>
                                <tr>
                                    <td>NCB/2026/T002</td>
                                    <td>Maintenance of surveillance equipment</td>
                                    <td>April 05, 2026</td>
                                    <td><button className="btn btn-sm btn-outline-primary">Download PDF</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tenders;
