import React from "react";
import PageBanner from "../components/PageBanner";

function Contact() {
    return (
        <div className="contact-page">
            <PageBanner
                title="Contact"
                highlightWord="Us"
                subtitle="Get in touch with NCB Headquarters and Zonal Units"
                breadcrumbLabel="Contact Us"
            />
            <div className="container py-5">
                <p>Contact details and form will go here.</p>
            </div>
        </div>
    );
}

export default Contact;