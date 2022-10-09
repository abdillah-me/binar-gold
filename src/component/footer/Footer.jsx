import React from "react";
import "./Footer.css";
import IconFB from "../../Assets/icon_facebook.png";
import IconIG from "../../Assets/icon_instagram.png";
import IcoTwit from "../../Assets/icon_twitter.png";
import IcoMail from "../../Assets/icon_mail.png";
import IcoTwich from "../../Assets/icon_twitch.png";

const Footer = () => {
   return (
      <footer id="footer" className="footer mt-5">
         <div className="container">
            <div className="row d-flex justify-content-between">
               <div className="col-md-4">
                  <p className="w-75 fw-bold">
                     Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                  </p>
                  <p className="fw-bold">binarcarrental@gmail.com</p>
                  <p className="fw-bold">081-233-334-808</p>
               </div>
               <div className="col-md-2">
                  <ul className="d-flex flex-column gap-2">
                     <li>Our services</li>
                     <li>Why Us</li>
                     <li>Testimonial</li>
                     <li>FAQ</li>
                  </ul>
               </div>
               <div className="col-md-3">
                  <p className="fw-bold">Connect with us</p>
                  <div className="sosmed d-flex gap-2 mb-3">
                     <img src={IconFB} alt="" />
                     <img src={IconIG} alt="" />
                     <img src={IcoTwit} alt="" />
                     <img src={IcoMail} alt="" />
                     <img src={IcoTwich} alt="" />
                  </div>
               </div>
               <div className="col-md-3 mb-2">
                  <p className="coppy fw-bold">Copyright Binar 2022</p>
                  <img src="img/logo.png" alt="" className="coppy" />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
