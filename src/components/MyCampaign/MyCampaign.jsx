import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCampaign = () => {
    const { user } = useContext(authContext);
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/campaigns/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setCampaign(data));
    }, [user?.email]);
    console.log("campaign data", campaign);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/campaign/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)

                // Remove the deleted campaign from the state
                setCampaign(campaign.filter((camp) => camp._id !== id));

                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Campaign Deleted Successful",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div>
            <h3 className="text-center m-4 text-2xl font-semibold">
                My All Campaign - {campaign.length}
            </h3>
            <div className="overflow-x-auto mx-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Campaign Title</th>
                            <th>Campaign Type</th>
                            <th>amount</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaign.map((camp, idx) => (
                            <tr key={idx} className="bg-base-200">
                                <td>{1 + idx}</td>
                                <td>{camp.campaignTitle}</td>
                                <td>{camp.campaignType}</td>
                                <td>{camp.amount}</td>
                                <td>
                                    <button
                                        className="btn btn-error text-white"
                                        onClick={() => handleDelete(camp._id)}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/UpdateCampaign/${camp._id}`}>
                                        <button className="mx-3 btn bg-blue-600 text-white">
                                            Edit
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;
