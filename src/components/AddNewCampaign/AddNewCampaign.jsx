import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const AddNewCampaign = () => {

    const {user} = useContext(authContext)
    const userEmail = user?.email

    const handleSubmit = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const campaignTitle = e.target.campaignTitle.value;
        const campaignType = e.target.campaignType.value;
        const amount = e.target.amount.value;
        const Deadline = e.target.Deadline.value;
        const campaignData = {
            image,
            campaignTitle,
            campaignType,
            amount,
            Deadline,
            userEmail
        };
        fetch("http://localhost:5000/campaigns", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(campaignData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Campaign Added Successfully",
                        icon: "success",
                        draggable: true,
                    });
                    e.target.reset();
                }
            });
    };

    return (
        <div>
            <h2 className="text-center text-3xl my-5 font-semibold">
                Add New Campaign
            </h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body " onSubmit={handleSubmit}>
                            <div className="form-control ">
                                <label className="label my-2 block ">
                                    <span className="label-text text-xl ">
                                        Image Url
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
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
                                    placeholder="Write Description"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Add Campaign
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCampaign;
