import "./services.scss";
import ServiceTypes from "./ServiceTypes";
import SingleService from "./SingleService";
export default function Services(){
    return(
        <section id="services">
            <div className="services-wrapper">
                <div className="services-header">
                    <div className="services-title">
                        <h1>Our Services</h1>
                        <h5>Detail About Our Services</h5>
                    </div>
                </div>
            </div>
            <div className="service-body">
                <ServiceTypes/>
                <SingleService />
            </div>
        </section>
    )
}
