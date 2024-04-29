import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import VerticleTextAnimation from './VerticleTextAnimation';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import Button from './Button';


const EventComponent = () => {
    return (
        <>
            <div className="bg-[#15181b] pb-10">
                <div className='px-16'>
                    <Navbar dark={true} />
                </div>
                <div className="large-text absolute w-[300px] h-[650px] top-20 text-white/[20%] left-12 text-9xl font-bold break-words">
                    <h1>ASTRIX</h1>
                    <h1 className="mt-16">EVENTS</h1>
                </div>

                <div className="w-full flex justify-between gap-6">
                    <div className="w-3/5">
                        <div className="slider mt-14">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 1000,

                                }}
                                centeredSlides={true}
                                className="mySwiper"
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <img src="./img/eventSlide1.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./img/eventSlide2.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./img/eventSlide3.png" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./img/eventSlide4.png" alt="" />
                                </SwiperSlide>
                            </Swiper>
                            <Button />
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <div className="content-wrapper px-7">
                            <h3 className='text-gray-200 font-bold text-lg'>Explore Youre First  Event</h3>
                            <h1 className='text-gray-100 font-bold text-4xl capitalize mt-16'>event name</h1>
                            <div className="flex text-gray-200 text-sm gap-6 items-center mt-6">
                                <div className='flex items-center gap-2'>
                                    <FaLocationDot />
                                    <span>Venue</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdAlarm />
                                    <span>04/3/2024 @19:00</span>
                                </div>
                            </div>
                            <p className='text-gray-300 mt-5 text-base pe-20'>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
                            <h3 className='text-xl font-semibold text-gray-200 mt-6 capitalize'>artist lineup</h3>
                            <div className='flex mt-4 items-center'>
                                <img src="./img/artist1.png" className='rounded-md object-cover h-28' alt="" />
                                <img src="./img/artist2.png" className='rounded-md object-cover h-36' alt="" />
                                <img src="./img/artist3.png" className='rounded-md object-cover h-28' alt="" />
                            </div>

                            <div className='flex justify-between mt-12 items-end pe-12'>
                                <img src="./img/barcode.png" className='h-20' alt="" />
                                <button className='py-1 px-4 bg-[#ffca5f] rounded-3xl font-bold capitalize text-gray-900'>join waitlist</button>
                            </div>
                        </div>
                    </div>
                    <VerticleTextAnimation />
                </div>
            </div>
        </>
    )
}

export default EventComponent
