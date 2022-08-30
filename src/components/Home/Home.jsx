import "./home.scss"
import Emergency from "./Emergency/Emergency";
import Services from "./Services/Services";
import Statistics from "./Statistics/Statistic";
import About from "./AboutUs/About"
export default function Home(){
    return(
        <>
        <section id="home">
            <div className="home-wrapper">
                <div className="sub-titles">
                    <h5>Caring for Life</h5>
                </div>
                <div className="home-titles">
                    <h1>Leading the Way
                        in Medical Excellence</h1>
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
            <About/>
        </>
    )
}
