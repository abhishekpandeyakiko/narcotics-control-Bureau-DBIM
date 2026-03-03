import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.scss";

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;