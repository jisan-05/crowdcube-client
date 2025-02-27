import img1 from "../../assets/slide1.avif";
import img2 from "../../assets/slide2.avif";
import img3 from "../../assets/slide3.avif";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../CampaignCard/CampaignCard";

const Home = () => {
    const campaignData = useLoaderData();
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={img3}
                            className="h-[600px] w-full object-cover"
                            alt=""
                        />
                        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold bg-[rgba(28, 28, 28, 0.90)] ">
                            Transform Your Passion into Impact
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={img2}
                            className="h-[600px] w-full object-cover"
                            alt=""
                        />
                        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold bg-[rgba(28, 28, 28, 0.90)] ">
                            Support Innovators and Change-Makers
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={img1}
                            className="h-[600px] w-full object-cover"
                            alt=""
                        />
                        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold bg-[rgba(28, 28, 28, 0.90)] ">
                            Join the Movement, Fund the Future
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <h3 className="text-center text-4xl my-5">Running Campaigns</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  my-8">
                {campaignData.map((campaign) => (
                    <CampaignCard
                        key={campaign._id}
                        campaign={campaign}
                    ></CampaignCard>
                ))}
            </div>
        </div>
    );
};

export default Home;
