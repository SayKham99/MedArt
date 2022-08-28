import "./emergency.scss";
import users from "../../../assets/icons/user.png"
import Clock from "../../../assets/icons/watch1.png";
export default function Emergency(){
    return(
        <section id="emergency">
            <div className="emergency-wrapper">
                <div className="emergency-left">
                    <div className="emergency-head">
                        <div className="emergency-title">
                            <img src={users} />
                            <h4>Emergency Service</h4>
                        </div>
                        <div className="emergency-desc">
                            <p>An emergency department (ED), also known as an accident & emergency department (A&E), emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment.</p>
                        </div>
                        <div className="call">
                            <h4>Call: +998999883500</h4>
                        </div>
                    </div>
                </div>
                <div className="emergency-right">
                    <div className="emergency-head">
                    <div className="emergency-title">
                        <img src={Clock} />
                        <h4>Opening hours</h4>
                    </div>
                    <div className="emergency-desc">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    <div className="working-hours">
                        <p>Mon-Fri</p>
                        <p>08:00 - 21:00</p>
                    </div>
                    <div className="working-hours">
                        <p>Mon-Fri</p>
                        <p>08:00 - 21:00</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
