'use client';

import SectionHeaders from "./SectionHeaders";
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { HiStar } from "react-icons/hi";

export default function Reviews() {
    return (
        <div className="flex flex-col mx-auto">
            <div className="mt-28 mx-auto text-center">
                <SectionHeaders
                    subHeader={'customer'}
                    mainHeader={'Reviews'}
                />
            </div>
            <div className="mt-[30px] lg:mt-[55px] w-[1300px] mx-auto">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="py-[30px] mb-12 px-5 rounded-xl bg-primary text-white font-sans shadow-lg shadow-blue-400">
                            <div className="flex items-center gap-[13px]">
                                <img src={'/p1.jpg'}
                                    className="rounded-xl"
                                    height={70} width={70}
                                    alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                                        Sam
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        <HiStar className="w-[18px] h-5 text-yellow-400" />
                                        <HiStar className="w-[18px] h-5 text-yellow-400" />
                                        <HiStar className="w-[18px] h-5 text-yellow-400" />
                                        <HiStar className="w-[18px] h-5 text-yellow-400" />
                                        <HiStar className="w-[18px] h-5 text-yellow-400" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                                &quot;Great ambience, tasty food. One of the best cafe nearby the Southgate area in Madurai.&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-[30px] px-5 rounded-xl bg-primary text-white shadow-lg shadow-blue-400">
                            <div className="flex items-center gap-[13px]">
                                <img src={'/p3.jpeg'}
                                    className="rounded-xl"
                                    height={70} width={70}
                                    alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                                        Rahul
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                                &quot;You can get continental items like pasta, and fast food like pizza, sandwiches, fries, and pastries.&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-[30px] px-5 rounded-xl bg-primary text-white shadow-lg shadow-blue-400">
                            <div className="flex items-center gap-[13px]">
                                <img src={'/p2.jpeg'}
                                    className="rounded-xl"
                                    height={70} width={70}
                                    alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                                        Nithya
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                                &quot;Best Cafe for continental cuisine in madurai. They are also one of the leading bakers in the city...&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="py-[30px] px-5 rounded-xl bg-primary text-white shadow-lg shadow-blue-400">
                            <div className="flex items-center gap-[13px]">
                                <img src={'/p4.jpg'}
                                    className="rounded-xl"
                                    height={70} width={70}
                                    alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                                        Navin
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                        <HiStar className="text-yellow-400 w-[18px] h-5" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                                &quot;This is a good place with cozy interiors and a themed lighting and seating. Good ambience.&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}