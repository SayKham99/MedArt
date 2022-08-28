import {Link} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./navbar.scss";

export default function Navbar(){

    const data = [
        {
            name: "Emergency",
            title: "+998999883500",
            icon: require("../../assets/icons/phone-icon.png")
        },
        {
            name: "Working-hours",
            title: "09:00 - 20: 00",
            icon: require("../../assets/icons/clock-icon.png")
        },
        {
            name: "Location",
            title: "Some place",
            icon: require("../../assets/icons/location-icon.png")
        }
    ];
    const data1 = [
        {
            id:1,
            icon: <LinkedInIcon style={{fontSize: "16px"}}/>
        },
        {
            id:2,
            icon: <FacebookIcon style={{fontSize: "16px"}}/>
        },
        {
            id:3,
            icon: <InstagramIcon style={{fontSize: "16px"}}/>
        }

    ];

    return(
        <section id="navbar">
            <div className="nav-wrapper">
                <div className="nav-info">
                    <ul className="navbar-nav">
                        {data.map(item =>
                            <li className="nav-item">
                            <span>
                                <img src={item.icon} />
                            </span>
                                <p>
                                    {item.name}
                                    <p className="title">{item.title}</p>
                                </p>

                            </li>
                        )}
                    </ul>
                </div>
                <div className="social-media">
                    <ul>
                        {data1.map( item =>
                            <li key={item.id}>
                                {item.icon}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
