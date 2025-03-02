import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const campaignData = useLoaderData();
    console.log(campaignData);

    const {
        _id,
        image,
        campaignTitle,
        campaignType,
        amount,
        Deadline,
        userEmail,
    } = campaignData;

    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const campaignTitle = e.target.campaignTitle.value;
        const campaignType = e.target.campaignType.value;
        const amount = e.target.amount.value;
        const Deadline = e.target.Deadline.value;
        const UpdateCampaignData = {
            image,
            campaignTitle,
            campaignType,
            amount,
            Deadline,
            userEmail,
        };
        fetch(`https://croudcube-server.onrender.com/updateCampaigns/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UpdateCampaignData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Campaign Update Successfully",
                        icon: "success",
                        draggable: true,
                    });
                }
            });
    };

    return (
        <div>
            <h2 className="text-center text-3xl my-5 font-semibold">
                Update Your Campaign
            </h2>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body " onSubmit={handleUpdate}>
                            <div className="form-control ">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl ">
                                        Image Url
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    placeholder="Campaign Image URL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl ">
                                        Campaign title
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={campaignTitle}
                                    name="campaignTitle"
                                    placeholder="Campaign title"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl  ">
                                        Campaign type
                                    </span>
                                </label>
                                <select
                                    className="select w-full max-w-xs"
                                    defaultValue={campaignType}
                                    name="campaignType"
                                >
                                    <option disabled selected>
                                        Select Campaign type
                                    </option>
                                    <option value="personal issue">
                                        Personal Issue
                                    </option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative ideas">
                                        Creative Ideas
                                    </option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl ">
                                        Minimum donation amount
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="amount"
                                    defaultValue={amount}
                                    placeholder="Write Description"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl ">
                                        Deadline
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="Deadline"
                                    defaultValue={Deadline}
                                    placeholder="Write Description"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">
                                    Update Campaign
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;
