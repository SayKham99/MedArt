
import "./servicetypes.scss"
export default function ServiceTypes(){

    const data = [
        {
            id: 1,
            img: require("../../assets/services1.png"),
            title: "Fever & Flu",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 2,
            img: require("../../assets/services2.png"),
            title: "Dental Service",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 3,
            img: require("../../assets/services3.png"),
            title: "Eye Care",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 4,
            img: require("../../assets/services4.png"),
            title: "General Surgery",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 5,
            img: require("../../assets/services5.png"),
            title: "Pharmarcy",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 6,
            img: require("../../assets/services6.png"),
            title: "Sports Injury",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 7,
            img: require("../../assets/services7.png"),
            title: "Heart Diseases",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 8,
            img: require("../../assets/services8.png"),
            title: "Lung Diseases",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },
        {
            id: 9,
            img: require("../../assets/services9.png"),
            title: "Orthopaedic",
            desc: "One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.\n" +
                "\n",
        },

    ]
    return(
        <section id="serviceTypes">
            <div className="service-wrapper">
                {data.map(item =>
                    <div className="services-item">
                        <div className="service-item-img">
                            <img src={item.img} />
                        </div>
                        <div className="service-item-desc">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <button>Learn More</button>
                    </div>
                )}
            </div>
        </section>
    )
}
