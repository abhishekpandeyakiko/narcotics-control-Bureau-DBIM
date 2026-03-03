import React from "react";
import PageBanner from "../components/PageBanner";

function NotFound() {
    return (
        <div className="not-found-page">
            <PageBanner
                title="404"
                highlightWord="Page Not Found"
                subtitle="The page you are looking for does not exist."
                breadcrumbLabel="404"
            />
            <div className="container py-5 text-center">
                <h2>Opps! Page not found</h2>
                <p>Please check the URL or return to the home page.</p>
            </div>
        </div>
    );
}

export default NotFound;