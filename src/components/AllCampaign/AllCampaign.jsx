import { useLoaderData } from "react-router-dom";
import CampaignCard from "../CampaignCard/CampaignCard";

const AllCampaign = () => {
    const campaignData = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  my-8">
                  {
                    campaignData.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                  }   
        </div>
    );
};

export default AllCampaign;