import React from "react";
import "./Testimonail.css";
import ImgProfile from "../../Assets/img_photo.png";
import Rate from "../../Assets/Rate.png";

const Testimonail = () => {
   return (
      <div id="testimoni" className="testimoni my-5">
         <div className="container">
            <div className="title text-center">
               <h3>Testimonial</h3>
               <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row d-flex align-items-center p-5">
                        <div className="col-md-1">
                           <img src={ImgProfile} alt="" />
                        </div>
                        <div className="col-md-11">
                           <img src={Rate} alt="" />
                           <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod”
                           </p>
                           <p className="fw-light">John Dee 32, Bromo</p>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row d-flex align-items-center p-5">
                        <div className="col-md-1">
                           <img src={ImgProfile} alt="" />
                        </div>
                        <div className="col-md-11">
                           <img src={Rate} alt="" />
                           <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod”
                           </p>
                           <p className="fw-light">John Dee 32, Bromo</p>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row d-flex align-items-center p-5">
                        <div className="col-md-1">
                           <img src={ImgProfile} alt="" />
                        </div>
                        <div className="col-md-11">
                           <img src={Rate} alt="" />
                           <p>
                              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod”
                           </p>
                           <p className="fw-light">John Dee 32, Bromo</p>
                        </div>
                     </div>
                  </div>
               </div>
               <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
               >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
               >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Testimonail;
