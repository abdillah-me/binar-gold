import React from "react";
import "./FooterBoxSearch.css";
import { Link } from "react-router-dom";

const FooterBoxSearch = () => {
   return (
      <footer id="footer" className="footer mt-5 position-relative">
         <div className="container">
            {/* <!-- search box --> */}
            <div className="card-box position-absolute">
               <div className="row search-box">
                  <div className="namMobil">
                     <label for="" className="mb-2">
                        Nama Mobil
                     </label>
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Ketik nama/tipe mobil"
                        aria-label="default input example"
                     />
                  </div>
                  <div className="col-md-3">
                     <label for="" className="mb-2">
                        Kategori
                     </label>
                     <select className="form-select" aria-label="Default select example">
                        <option selected>Masukan Kapasitas Mobil</option>
                        <option value="1">2 - 4 Orang</option>
                        <option value="2">4 - 6 Orang</option>
                        <option value="3">6 - 8 Orang</option>
                     </select>
                  </div>
                  <div className="col-md-3">
                     <label for="" className="mb-2">
                        Harga
                     </label>
                     <select className="form-select" aria-label="Default select example">
                        <option selected>Masukan Harga Sewa per Hari</option>
                        <option value="1">Rp. 400.000</option>
                        <option value="2">Rp. 400.000 - Rp. 600.000</option>
                        <option value="3">Rp. 400.000</option>
                     </select>
                  </div>
                  <div className="status">
                     <label for="" className="mb-2">
                        Status
                     </label>
                     <select className="form-select" aria-label="Default select example">
                        <option value="1">Disewa</option>
                        <option value="2">Dibeli</option>
                        <option value="3">Dipinjamkan</option>
                     </select>
                  </div>
                  <div className="button-cari d-flex justify-content-center">
                     <button className="main-button-search align-self-end rounded-1">
                        <Link to="hasil-mobil" style={{ textDecoration: "none", color: "white" }}>
                           Cari Mobil
                        </Link>
                     </button>
                  </div>
               </div>
            </div>
            {/* <!-- search box end --> */}
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
                     <img src="img/icon_facebook.png" alt="" />
                     <img src="img/icon_instagram.png" alt="" />
                     <img src="img/icon_twitter.png" alt="" />
                     <img src="img/icon_mail.png" alt="" />
                     <img src="img/icon_twitch.png" alt="" />
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

export default FooterBoxSearch;
