import React from "react";
import HeroImg from "../../Assets/img_car.png";
import "./HeroSection.css";

const HeroSection = (props) => {
   return (
      <div id="hero" className="hero position-relative d-flex">
         <div className="container d-flex align-items-center">
            <div className="row">
               <div className="col-md-6 col-12">
                  <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p className="my-4">
                     Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                     dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil
                     selama 24 jam.
                  </p>
                  <button className="px-4 py-2 main-button" style={props.display}>
                     <a href={props.dataTo}>Mulai Sewa Mobil</a>
                  </button>
               </div>
               <div className="col-md-6 col-12">
                  <img src={HeroImg} alt="" className="position-absolute bottom-0 end-0" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
