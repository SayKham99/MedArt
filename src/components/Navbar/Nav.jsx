import {useEffect, useState} from "react";
import logo from "../../assets/icons/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./nav.scss"
import {NavLink} from "react-router-dom";

export default function Nav() {

    const [open, setOpen] = useState(false);

    const changeMobile = function () {
        setOpen(open === false ? true : false);
    }
    return (
          <section id="nav">
              <div className="nav-wrapper">
                  <div className="logo">
                      <img src={logo}/>
                  </div>
                  <div className={open ? "is-open" : "bars"}>
                      <ul>
                          <NavLink to={'/'}>
                              <li>Home</li>
                          </NavLink>
                          <NavLink to={'/about'}>
                              <li>About Us</li>
                          </NavLink>
                          <NavLink to={'/'}>
                              <li>Services</li>
                          </NavLink>
                          <NavLink to={'/'}>
                              <li>Doctors
                              </li>
                          </NavLink>
                          <NavLink to={'/'}>
                              <li>News</li>
                          </NavLink>
                          <NavLink to={'/'}>
                              <li>Blog</li>
                          </NavLink>
                          <NavLink to={'/'}>
                              <li>Contact</li>
                          </NavLink>
                      </ul>
                  </div>
                  <div className="make-button">
                      <button>Appointment</button>
                  </div>
                  <div className="hamburger" onClick={changeMobile}>
                   <span className="icon">
                       {open ? <CloseIcon/> : <MenuIcon/>}
                   </span>
                  </div>
              </div>
          </section>
    )
}
