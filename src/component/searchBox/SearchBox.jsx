import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
   return (
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
                  <option value="3">Dipinjam</option>
               </select>
            </div>
            <div className="button-cari d-flex justify-content-center">
               <button className="main-button-search align-self-end rounded-1">
                  <a href="/hasil-cari">Cari Mobil</a>
               </button>
            </div>
         </div>
      </div>
   );
};

export default SearchBox;
