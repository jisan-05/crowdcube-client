import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* This is Navbar  */}
            <div className="bg-base-200">
                <div className="container mx-auto">
                    <Navbar />
                </div>
            </div>

            {/* This is Outlet  */}
            <div className="flex-grow container mx-auto">
                <Outlet />
            </div>

            {/* This is Footer  */}
            <div className="bg-base-300 text-base-content">
                <div className="container mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
