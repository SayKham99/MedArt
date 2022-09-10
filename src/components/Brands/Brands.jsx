import Brand1 from "../../assets/brand1.png";
import Brand2 from "../../assets/brand2.png";
import Brand3 from "../../assets/brand3.png";
import "./brands.scss";
export default function Brands(){
    return(
        <section id="brands">
            <div className="marquee">
                <div className="marquee--inner">
                        <span>
                            <div className="orb">
                                <img src={Brand1}/>
                            </div>
                            <div className="orb red">
                                <img src={Brand2}/>
                            </div>
                            <div className="orb ">
                                <img src={Brand3}/>
                            </div>

                        </span>
                        <span>
                            <div className="orb">
                                <img src={Brand1}/>
                            </div>
                            <div className="orb red">
                                <img src={Brand2}/>
                            </div>
                            <div className="orb ">
                                <img src={Brand3}/>
                            </div>

                        </span>

                </div>
            </div>
        </section>
    )
}
