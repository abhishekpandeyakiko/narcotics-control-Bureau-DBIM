import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OfficersStaff from "../pages/OfficersStaff";
import OrganizationStructure from "../pages/OrganizationStructure";
import LatestNews from "../pages/LatestNews";
import RTI from "../pages/RTI";
import Tenders from "../pages/Tenders";
import PressRelease from "../pages/PressRelease";
import AwarenessVideos from "../pages/AwarenessVideos";
import PhotoGallery from "../pages/PhotoGallery";
import VideoGallery from "../pages/VideoGallery";
import FormerHeads from "../pages/FormerHeads";
import Legislations from "../pages/Legislations";
import NcbHistory from "../pages/NcbHistory";
import MottoMissionVision from "../pages/MottoMissionVision";
import Coordination from "../pages/Coordination";
import MouCbse from "../pages/MouCbse";
import Vigilance from "../pages/Vigilance";
import NotFound from "../pages/NotFound";

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
                path="/vigilance"
                element={
                    <MainLayout>
                        <Vigilance />
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
                path="/ncb-history"
                element={
                    <MainLayout>
                        <NcbHistory />
                    </MainLayout>
                }
            />

            <Route
                path="/media/latest-news"
                element={
                    <MainLayout>
                        <LatestNews />
                    </MainLayout>
                }
            />

            <Route
                path="/media/press-release"
                element={
                    <MainLayout>
                        <PressRelease />
                    </MainLayout>
                }
            />

            <Route
                path="/media/photo-gallery"
                element={
                    <MainLayout>
                        <PhotoGallery />
                    </MainLayout>
                }
            />

            <Route
                path="/media/video-gallery"
                element={
                    <MainLayout>
                        <VideoGallery />
                    </MainLayout>
                }
            />

            <Route
                path="/media/awareness-videos"
                element={
                    <MainLayout>
                        <AwarenessVideos />
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
                path="/rti"
                element={
                    <MainLayout>
                        <RTI />
                    </MainLayout>
                }
            />

            <Route
                path="/tenders"
                element={
                    <MainLayout>
                        <Tenders />
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
            <Route
                path="/media/former-head"
                element={
                    <MainLayout>
                        <FormerHeads />
                    </MainLayout>
                }
            />
            <Route
                path="/legislations"
                element={
                    <MainLayout>
                        <Legislations />
                    </MainLayout>
                }
            />
            <Route
                path="/motto-mission-vision"
                element={
                    <MainLayout>
                        <MottoMissionVision />
                    </MainLayout>
                }
            />
            <Route
                path="/coordination"
                element={
                    <MainLayout>
                        <Coordination />
                    </MainLayout>
                }
            />
            <Route
                path="/bilateral-agreements"
                element={
                    <MainLayout>
                        <Coordination />
                    </MainLayout>
                }
            />
            <Route
                path="/mou"
                element={
                    <MainLayout>
                        <MouCbse />
                    </MainLayout>
                }
            />
            <Route
                path="/awareness/cbse-mou"
                element={
                    <MainLayout>
                        <MouCbse />
                    </MainLayout>
                }
            />
            <Route
                path="*"
                element={
                    <MainLayout>
                        <NotFound />
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default AppRoutes;