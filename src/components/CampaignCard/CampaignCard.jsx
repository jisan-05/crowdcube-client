import React from "react";
import { NavLink } from "react-router-dom";

const CampaignCard = ({campaign}) => {
    const { _id,Deadline,amount,campaignType,campaignTitle,image} = campaign;
    return (
        <div>
            <div className="card bg-base-100 full shadow-xl m-5">
                <figure>
                    <img
                        src={image}
                        className="w-full object-cover h-60"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {campaignTitle}</h2>
                    <p>Campaign Type : {campaignType}</p>
                    <p>Deadline : {Deadline}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/details/${_id}`} className="btn btn-primary">See More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
