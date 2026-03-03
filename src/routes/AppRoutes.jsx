import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OfficersStaff from "../pages/OfficersStaff";
import OrganizationStructure from "../pages/OrganizationStructure";

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />

            <Route
                path="/about"
                element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                }
            />

            <Route
                path="/organization"
                element={
                    <MainLayout>
                        <OrganizationStructure />
                    </MainLayout>
                }
            />

            <Route
                path="/contact"
                element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                }
            />

            <Route
                path="/directory/officers-staff"
                element={
                    <MainLayout>
                        <OfficersStaff />
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default AppRoutes;