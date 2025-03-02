import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {

    const navigate = useNavigate()

    const singleData = useLoaderData();
    const { _id, Deadline, amount, campaignType, campaignTitle, image } =
        singleData;
    const { user } = useContext(authContext);
    const donateEmail = user.email;
    const handleDonate = () => {
        const donateData = {
        
            Deadline,
            amount,
            campaignType,
            campaignTitle,
            image,
            donateEmail,
        };
        fetch(`http://localhost:5000/campaignsDonate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donateData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Donate Successfully",
                        icon: "success",
                        draggable: true,
                    });
                    navigate("/MyDonation")
                }
            });
    };

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            {campaignTitle}
                        </h1>
                        <p className="mb-5">Amount :{amount}</p>
                        <p>CampaignType : {campaignType}</p>
                        <p>Deadline : {Deadline}</p>
                        <button
                            className="btn btn-primary"
                            onClick={handleDonate}
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
