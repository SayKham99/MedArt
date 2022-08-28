
import {useEffect, useState} from "react";
import logo from "../../assets/icons/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./nav.scss"
export default function Nav(){

    const [open, setOpen] = useState(false);

    const changeMobile = function (){
        setOpen(open === false ? true : false);
    }
    return(
        <section id="nav">
           <div className="nav-wrapper">
               <div className="logo">
                <img src={logo} />
               </div>
               <div className={open ? "is-open" : "bars"}>
                   <ul>
                       <li>Home</li>
                       <li>About Us</li>
                       <li>Services</li>
                       <li>Doctors</li>
                       <li>News</li>
                       <li>Blog</li>
                       <li>Contact</li>
                   </ul>
               </div>
               <div className="make-button">
                   <button>Appointment</button>
               </div>
               <div className="hamburger" onClick={changeMobile}>
                   <span className="icon">
                       {open ? <CloseIcon /> : <MenuIcon />}
                   </span>
               </div>
           </div>
        </section>
    )
}
