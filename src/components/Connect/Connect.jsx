import "./connect.scss"
import DraftsIcon from '@mui/icons-material/Drafts';
export default function Connect(){

    const data = [
        {
            id: 1,
            icon: require("../../assets/icons/location-icon copy.png"),
            title: "Get Direction",
            addition: "Find us on the map"
        },
        {
            id: 2,
            icon: require("../../assets/icons/mailing.png"),
            title: "Appointment",
            addition: "Send us an email"
        },
        {
            id: 3,
            icon: require("../../assets/icons/heart-icon.png"),
            title: "Emergency Service",
            addition: "+998 97 234 34 07"
        },
    ]
    return(
        <section id="connect">
            <div className="connect-wrapper">
                {data.map(item =>
                    <div className="connect-item">
                        <div className="icon">
                            <img src={item.icon} />
                        </div>
                        <div className="addition">
                            <h2>{item.title}</h2>
                            <p>{item.addition}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
