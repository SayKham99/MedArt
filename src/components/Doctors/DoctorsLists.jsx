import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./doctorsLists.scss";

export default function Doctors(){

    const data = [
        {
            id: 1,
            name: "Doctor's name",
            img: require("../../assets/doctor1.png"),
            job: "Neurology"
        },
        {
            id: 2,
            name: "Doctor's name",
            img: require("../../assets/doctor2.png"),
            job: "Neurology"
        },
        {
            id: 3,
            name: "Doctor's name",
            img: require("../../assets/doctor3.png"),
            job: "Neurology"
        },
        {
            id: 4,
            name: "Doctor's name",
            img: require("../../assets/doctor4.png"),
            job: "Neurology"
        },
        {
            id: 5,
            name: "Doctor's name",
            img: require("../../assets/doctor5.png"),
            job: "Neurology"
        }
    ]
    return(
        <section id="docotrsLists">
            <div className="doctorsLists-wrapper">
                {data.map(item =>
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
                )}
            </div>
        </section>
    )
}
