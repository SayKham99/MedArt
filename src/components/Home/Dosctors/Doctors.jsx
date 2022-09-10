import { Swiper, SwiperSlide } from "swiper/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "swiper/css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Images from "../../../assets/doctors.png"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./doctors.scss";

import {  Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Doctors(){

    const data = [
        {
            id: 1,
            name: "Doctor's name",
            img: require("../../../assets/doctor1.png"),
            job: "Neurology"
        },
        {
            id: 2,
            name: "Doctor's name",
            img: require("../../../assets/doctor2.png"),
            job: "Neurology"
        },
        {
            id: 3,
            name: "Doctor's name",
            img: require("../../../assets/doctor3.png"),
            job: "Neurology"
        },
        {
            id: 4,
            name: "Doctor's name",
            img: require("../../../assets/doctor4.png"),
            job: "Neurology"
        },
        {
            id: 5,
            name: "Doctor's name",
            img: require("../../../assets/doctor5.png"),
            job: "Neurology"
        }
    ]
    return(
        <section id="doctors">
            <div className="doctors-wrapper">
                <div className="doctors-title">
                    <div className="doctors-img">
                        <img src={Images} />
                    </div>
                    <div className="doctors-link">
                        <button>See all doctors
                            <span><ArrowRightAltIcon/></span>
                        </button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={100}
                    slidesPerGroup={1}
                    // loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    style={{
                        // "--swiper-navigation-color": "#1F2B6C",
                        "--swiper-pagination-color": "#1F2B6C",
                        "--swiper-pagination-font-size": "2rem"
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1330: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        }
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[  Pagination, Keyboard]}
                    className="mySwiper"
                >
                    {data.map(item =>
                        <SwiperSlide>
                            <div className="doctor-cart" key={item.id}>
                                <div className="doctor-img">
                                    <img src={item.img} />
                                </div>
                                <div className="doctor-info">
                                    <h5>{item.name}</h5>
                                    <h4>{item.job}</h4>

                                    <div className="social-icons">
                                        <div className="icon">
                                            <LinkedInIcon style={{color: "#1F2B6C"}}/>
                                        </div>
                                        <div className="icon">
                                            <FacebookIcon style={{color: "#1F2B6C"}}/>
                                        </div>
                                        <div className="icon">
                                            <InstagramIcon style={{color: "#1F2B6C"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}
