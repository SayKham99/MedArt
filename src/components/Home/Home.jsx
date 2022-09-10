import "./home.scss"
import Emergency from "./Emergency/Emergency";
import Services from "./Services/Services";
import Statistics from "./Statistics/Statistic";
import Doctors from "./Dosctors/Doctors";
import HomeNews from "./HomeNews/HomeNews";
import {Link} from "react-router-dom";
export default function Home(){

    return(
        <>
        <section id="home">
            <div className="home-wrapper">
                <div className="sub-titles">
                    <h5>Caring for Life</h5>
                </div>
                <div className="home-titles">
                    <h1>
                        Sizning salomatligingiz biz uchun muhim
                    </h1>
                </div>
                <div className="buttons">
                   <button>Our Services</button>
                    <p></p>
                </div>
            </div>
            <>
            <Emergency />
            </>
        </section>
            <Services />
            <Statistics />
            <Doctors />
            <HomeNews />
        </>
    )
}
