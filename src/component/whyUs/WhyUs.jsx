import React from "react";
import "./WhyUs.css";
import Jempol from "../../Assets/jempol.png";
import PriceIco from "../../Assets/icon_price.png";
import Ico24Hrs from "../../Assets/icon_24hrs.png";
import IcoProfesional from "../../Assets/icon_professional.png";

const WhyUs = () => {
   return (
      <div id="why" className="why my-5">
         <div className="container">
            <div className="title">
               <h3 className="fw-bold">Why Us?</h3>
               <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="card-why">
               <div className="row">
                  <div className="col-md-3">
                     <div className="card p-3 d-flex flex-column mb-3">
                        <img src={Jempol} alt="" />
                        <h6 className="fw-bold my-2">Mobil Lengkap</h6>
                        <p>
                           Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat,
                           siap digunakan
                        </p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="card p-3 d-flex flex-column mb-3">
                        <img src={PriceIco} alt="" />
                        <h6 className="fw-bold my-2">Harga Murah</h6>
                        <p>
                           Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                           lain
                        </p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="card p-3 d-flex flex-column mb-3">
                        <img src={Ico24Hrs} alt="" />
                        <h6 className="fw-bold my-2">Layanan 24 Jam</h6>
                        <p>
                           Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                           akhir minggu
                        </p>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="card p-3 d-flex flex-column mb-3">
                        <img src={IcoProfesional} alt="" />
                        <h6 className="fw-bold my-2">Sopir Profesional</h6>
                        <p>
                           Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                           waktu
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WhyUs;
