import React from "react";
import "./Service.css";
import ImgService from "../../Assets/img_service.png";
import Check from "../../Assets/check.png";

const service = () => {
   return (
      <div id="service" className="service my-5">
         <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
               <div className="col-md-5 col-12">
                  <img src={ImgService} alt="" className="img-service" />
               </div>
               <div className="col-md-5">
                  <h3 className="fw-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                  <p className="my-4">
                     Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
                     dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik
                     untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                  </p>
                  <ul className="list-service">
                     <li className="d-flex gap-2">
                        <img src={Check} alt="" />
                        <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                     </li>
                     <li className="d-flex gap-2">
                        <img src={Check} alt="" />
                        <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                     </li>
                     <li className="d-flex gap-2">
                        <img src={Check} alt="" />
                        <p>Sewa Mobil Jangka Panjang Bulanan</p>
                     </li>
                     <li className="d-flex gap-2">
                        <img src={Check} alt="" />
                        <p>Gratis Antar - Jemput Mobil di Bandara</p>
                     </li>
                     <li className="d-flex gap-2">
                        <img src={Check} alt="" />
                        <p>Layanan Airport Transfer / Drop In Out</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default service;
