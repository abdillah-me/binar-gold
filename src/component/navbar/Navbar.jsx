import React from "react";
import LogoBrand from "../../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
   return (
      <nav id="navbar" className="navbar navbar-expand-lg sticky-top">
         <div className="container d-flex">
            <a className="navbar-brand" href="#home">
               <img src={LogoBrand} alt="" />
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="offcanvas"
               data-bs-target="#offcanvasNavbar"
               aria-controls="offcanvasNavbar"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="offcanvas offcanvas-end"
               tabindex="-1"
               id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel"
            >
               <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                     BCR
                  </h5>
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="offcanvas"
                     aria-label="Close"
                  ></button>
               </div>
               <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#ourService">
                           Our Service
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="whyUs">
                           Why Us
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="testimoni">
                           Testimonial
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="faq">
                           FAQ
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
