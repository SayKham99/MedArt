import DoctorsLists from "./DoctorsLists"
import "./doctors.scss"
import Certificates from "./Certificates";
export default function Doctors(){
    return(
        <section id="doctorsSection">
            <div className="doctorsSection-title">
                <div className="doctorsSection-title-wrapper">
                    <h1>Our Services</h1>
                    <h5>Detail About Our Services</h5>
                </div>
            </div>
            <div className="doctorsSection-wrapper">
                <DoctorsLists />
                <Certificates />
            </div>
        </section>
    )
}
