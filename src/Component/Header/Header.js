import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


import CISLogo from "../../Assest/Logo/CISLogo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.config({ logLevel: 0 });
gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const location = useLocation();
  
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (showNavbar) {

      gsap.fromTo('.mobileSidebarContainer', {
        display: 'block',
        width: "0%",
        opacity: 0
      }, {
        width: "100%",
        opacity: 1,
        ease: "power3.inOut",
        duration: 0.8
      });
    }
  }, [showNavbar]);


  return (
    <header>



<div className="navData">
       
        <NavLink to="/" className="logo">
        <img src={CISLogo} alt="logo"></img>
      </NavLink>
      


        <div className="navOpener" onClick={() => setShowNavbar(!showNavbar)}>
          <MenuIcon />
        </div>
      </div>

      <div className="header-container">
      <NavLink to="/" className="logo">
        <img src={CISLogo} alt="logo"></img>
      </NavLink>
      <div class="menu">
        <NavLink
          to="/why-cisassist"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
        >
          <p>Why CISAssist?</p>
        </NavLink>

        {/* <NavLink
          to="/self-assesment"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
        >
          <p>Self Assessment</p>
        </NavLink> */}

        <NavLink
          to="/refer-a-friend"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
        >
          <p>Refer a friend</p>
        </NavLink>

        {/* <NavLink
          to="/faqs"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
        >
          <p>FAQs</p>
        </NavLink> */}

         <NavLink to="/make-a-claim"   className={({ isActive }) => (isActive ? "activeLink link" : "link")}     >
         <p>Make a claim</p>
        </NavLink> 
      </div>
      </div>
      {showNavbar && (
        <div
          className="mobileSidebarContainer"
          onClick={(e) => {
            if (e.target.classList.contains("mobileSidebarContainer")) {
              setShowNavbar(false);
            }
          }}
        >
          <div className="mobileViewSidebar">

<div className="sidebar-header">
<NavLink to="/" className="logo">
        <img src={CISLogo} alt="logo"></img>
      </NavLink>
      


        <div className="cross"   onClick={() => setShowNavbar(!showNavbar)} >
         <CloseIcon/>
        </div>

</div>

            <div className="nav-links">
            
        <NavLink
          to="/why-cisassist"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
          onClick={() => setShowNavbar(!showNavbar)}
               
        >
          <p>Why CISAssist?</p>
        </NavLink>
{/* 
        <NavLink
          to="/self-assesment"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <p>Self Assessment</p>
        </NavLink> */}

        <NavLink
          to="/refer-a-friend"
          className={({ isActive }) => (isActive ? "activeLink link" : "link")}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <p>Refer a friend</p>
        </NavLink>
        <NavLink to="/make-a-claim"   onClick={() => setShowNavbar(!showNavbar)}>
          <p>Make a claim</p>
        </NavLink> 
             
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
