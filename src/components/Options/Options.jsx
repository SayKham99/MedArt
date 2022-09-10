
import "./option.scss";

export default function Options(){

    const data = [
        {
            id: 1,
            title: "Best Monitoring System",
            desc: "Despite advances in technology and understanding\n" +
                "of biological systems, drug discovery is still a lengthy\n" +
                "expensive.",
            icon: require("../../assets/icons/options1.png"),
            img:require('../../assets/optionsImage1.png')
        },
        {
            id: 2,
            title: "Best Monitoring System",
            desc: "Despite advances in technology and understanding\n" +
                "of biological systems, drug discovery is still a lengthy\n" +
                "expensive.",
            icon: require("../../assets/icons/options2.png"),
            img:require('../../assets/optionsImage2.png')
        },
        {
            id: 3,
            title: "Best Monitoring System",
            desc: "Despite advances in technology and understanding\n" +
                "of biological systems, drug discovery is still a lengthy\n" +
                "expensive.",
            icon: require("../../assets/icons/options3.png"),
            img:require('../../assets/optionsImage3.png')
        },
    ]
    return(
        <section id="options">
            <div className="options-wrapper">
                {data.map(item =>
                    <div className="options-item" style={{background: `url(${item.img})`}}>
                        <div className="options-img">
                            <img src={item.icon} />
                        </div>
                        <div className="options-title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="options-desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>

    )
}
