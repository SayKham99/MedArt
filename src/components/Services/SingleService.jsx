
import img from "../../assets/services10.png";
import Vektor from "../../assets/Vector.png";
import "./singleservise.scss";
export default function SingleService(){
    return(
        <section id="singleservice">
            <div className="singleservice-wrapper">
                <div className="singleService-img">
                    <img src={img} />
                </div>
                <div className="singleService-desc">
                    <img src={Vektor} />
                    <p>Historically, drugs were discovered through
                        identifying the active ingredient from
                        traditional remedies or by serendipitous
                        discovery. Later chemical libraries of
                        synthetic small molecules.
                    </p>
                    <div className="desc001">
                        <h2>Mildred Payne</h2>
                        <div></div>
                    </div>
                    <small>Allergist</small>
                </div>
            </div>
        </section>
    )
}
