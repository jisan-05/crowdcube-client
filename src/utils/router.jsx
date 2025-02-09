import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import Home from "../components/Home/Home";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonation from "../components/MyDonation/MyDonation";
import ErrorPage from "../components/ErrorPage/error-page";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
        ,
        {
            path:"AllCampaign",
            element:<AllCampaign></AllCampaign>
        },
        {
            path:"AddNewCampaign",
            element:<AddNewCampaign></AddNewCampaign>
        },
        {
            path:"MyCampaign",
            element:<MyCampaign></MyCampaign>
        },
        {
            path:"MyDonation",
            element:<MyDonation></MyDonation>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        }

      ]
    },



  ]);

  export default router;