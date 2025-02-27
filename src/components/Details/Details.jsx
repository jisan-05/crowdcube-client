import { useLoaderData } from "react-router-dom";

const Details = () => {
    const singleData = useLoaderData();
    const { _id, Deadline, amount, campaignType, campaignTitle, image } =
        singleData;
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{campaignTitle}</h1>
                        <p className="mb-5">
                         Amount :{amount}
                        </p>
                        <p>CampaignType : {campaignType}</p>
                        <p>Deadline : {Deadline}</p>
                        <button className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
