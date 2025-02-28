import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto">
            <Outlet />
        </div>
        <Footer />
    </div>
    );
};

export default MainLayout;