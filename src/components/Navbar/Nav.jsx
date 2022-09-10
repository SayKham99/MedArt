import {useEffect, useState} from "react";
import logo from "../../assets/icons/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./nav.scss"
import {NavLink, Link} from "react-router-dom";

export default function Nav() {

    const [open, setOpen] = useState(false);

    const changeMobile = function () {
        setOpen(open === false ? true : false);
    }
    return (
          <section id="nav">
              <div className="nav-wrapper">
                  <div className="logo">
                      <Link to="/">
                      <img src={logo}/>
                      </Link>
                  </div>
                  <div className={open ? "is-open" : "bars"}>
                      <ul>
                          <NavLink to={'/'} activeClass="active">
                              <li>Home</li>
                          </NavLink>
                          <NavLink to={'/about'} activeClass="active">
                              <li>About Us</li>
                          </NavLink>
                          <NavLink to={'/services'} activeClass="active">
                              <li>Services</li>
                          </NavLink>
                          <NavLink to={'/doctors'} activeClass="active">
                              <li>Doctors</li>
                          </NavLink>
                          <NavLink to={'/news'} activeClass="active">
                              <li>News</li>
                          </NavLink>
                          <NavLink to={'/blogs'} activeClass="active">
                              <li>Blog</li>
                          </NavLink>
                          <NavLink to={'/contact'} activeClass="active">
                              <li>Contact</li>
                          </NavLink>
                          <div className="make-button">
                              <button>Appointment</button>
                          </div>
                      </ul>
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
