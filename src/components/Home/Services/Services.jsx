import "./services.scss";
import Title from "../../../assets/Screen Shot 2022-08-27 at 6.56.59 PM.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Services(){

    const data = [
        {
            id: 1,
            icon: require("../../../assets/icons/lungs.png"),
            title: "Traumatology",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
        {
            id: 2,
            icon: require("../../../assets/icons/hand.png"),
            title: "Surgey",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
        {
            id: 3,
            icon: require("../../../assets/icons/heart.png"),
            title: "Gynecology",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
        {
            id: 4,
            icon: require("../../../assets/icons/pichoq.png"),
            title: "Urology",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
        {
            id: 5,
            icon: require("../../../assets/icons/temper.png"),
            title: "Pediatric Urology",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
        {
            id: 6,
            icon: require("../../../assets/icons/heart.png"),
            title: "Traumatology",
            desc: "One of the key classifications is between traditional small molecule drugs; usually derived from chemical synthesis."
        },
    ]
    return(
        <section id="sevices">
            <div className="services-wrapper">
                <div className="title">
                    <img src={Title} />
                </div>
                <div className="services-items">
                    {data.map(item =>
                        <div className="services-item">
                                <img src={item.icon} />
                                <h2 className="title">
                                    {item.title}
                                </h2>
                            <p className="desc">
                                {item.desc}
                            </p>
                            <button>Learn More <span><ArrowRightAltIcon /></span></button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
