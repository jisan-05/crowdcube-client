import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import Home from "../components/Home/Home";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonation from "../components/MyDonation/MyDonation";
import ErrorPage from "../components/ErrorPage/error-page";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import CampaignCard from "../components/CampaignCard/CampaignCard";
import Details from "../components/Details/Details";
import UpdateCampaign from "../components/UpdateCampaign/UpdateCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://croudcube-server.onrender.com/campaigns"),
            },
            {
                path: "AllCampaign",
                element: <AllCampaign></AllCampaign>,
                loader: () =>
                    fetch("https://croudcube-server.onrender.com/campaigns"),
            },
            {
                path: "AddNewCampaign",
                element: <AddNewCampaign></AddNewCampaign>,
            },
            {
                path: "MyCampaign",
                element: (
                    <PrivetRoute>
                        <MyCampaign></MyCampaign>
                    </PrivetRoute>
                ),
            },
            {
                path: "MyDonation",
                element: (
                    <PrivetRoute>
                        <MyDonation></MyDonation>
                    </PrivetRoute>
                ),
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "campaignCard",
                element: <CampaignCard></CampaignCard>,
            },
            {
                path: "updateCampaign/:id",
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({ params }) =>
                    fetch(
                        `https://croudcube-server.onrender.com/updateCampaigns/${params.id}`
                    ),
            },
            {
                path: "details/:id",
                element: (
                    <PrivetRoute>
                        <Details></Details>
                    </PrivetRoute>
                ),
                loader: async ({ params }) => {
                    const res = await fetch(
                        `https://croudcube-server.onrender.com/campaigns`
                    );
                    const data = await res.json();

                    const singleData = data.find((d) => d._id === params.id);
                    return singleData;
                },
            },
        ],
    },
]);

export default router;
