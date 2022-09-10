
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testemonialImg from "../../assets/testemonial.png";
import "./testemonial.scss";
import Vektop from "../../assets/Vector.png"


export default function Testemonial(){

    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et."
        },
    ]

    return(
        <section id="testemonial">
            <div className="testemonial-wrapper">
                <div className="testemonial-title">
                    <img src={testemonialImg}/>
                </div>
                <div className="testemonial-body">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        style={{
                            "--swiper-navigation-color": "#1F2B6C",
                            "--swiper-pagination-color": "#1F2B6C",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {data.map(item =>
                            <SwiperSlide key={item.id}>
                                <div className="testimonial-cart" style={{marginBottom: "30px"}}>
                                    <div className="backtick">
                                        <img src={Vektop} />
                                    </div>
                                    <div className="testemonial-desc">
                                        {item.title}
                                    </div>
                                    <div className="line"></div>
                                    <p className='author'>John Dev</p>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
