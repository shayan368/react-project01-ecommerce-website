import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img from "../../assets/hero.png";

export default function Hero() {
    return (
        <Swiper
            modules={[Navigation]}
            navigation={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
        >
            <SwiperSlide>
                <div className="bg-gray-100 px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
                    <div className="mb-8 lg:mb-0">
                        <p className="text-gray-500 text-sm mb-2">Hot Sale</p>

                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                            Gaming PC <br /> Complete Setup
                        </h1>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            Explore
                        </button>
                    </div>

                    <img
                        src={img}
                        className="w-full max-w-md lg:max-w-xl object-contain"
                    />
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="bg-gray-200 px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
                    <div className="mb-8 lg:mb-0">
                        <p className="text-gray-500 text-sm mb-2">New Arrival</p>

                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                            High-End Laptop <br /> For Creators
                        </h1>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>

                    <img
                        src={img}
                        className="w-full max-w-md lg:max-w-xl object-contain"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}