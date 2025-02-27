import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyCampaign = () => {
    const { user } = useContext(authContext);
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/campaigns/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setCampaign(data));
    }, [user?.email]);
    console.log("campaign data", campaign);
    return (
        <div>
            <h3 className="text-center m-4 text-2xl font-semibold">My All Campaign - {campaign.length}</h3>
            <div className="overflow-x-auto mx-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>    
                            <th>No.</th>
                            <th>Campaign Title</th>
                            <th>Campaign Type</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaign.map((camp,idx) => (
                            <tr className="bg-base-200">
                                <td>{1+idx}</td>
                                <td>{camp.campaignTitle}</td>
                                <td>{camp.campaignType}</td>
                                <td>{camp.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;
