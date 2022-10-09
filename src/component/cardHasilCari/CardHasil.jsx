import React from "react";
import "./CardHasil.css";

const CardHasil = ({ hasilMobil }) => {
   return (
      <div id="hasil" class="hasil">
         <div class="container">
            <div class="row card-hasil-pencarian gap-3 mb-5 justify-content-between">
               {hasilMobil
                  .filter((hasilMobil) => hasilMobil.name !== null)
                  .map((hasilMobil) => (
                     <div class="card card-hasil-mobil mb-2">
                        <img src={hasilMobil.image} class="card-img-top img" alt="..." />
                        <div class="card-body">
                           <span class="fs-6">{hasilMobil.name}</span>
                           <h5 class="card-title fw-bold">Rp.{hasilMobil.price} / hari</h5>
                           <p class="card-text fs-6">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                              quo beatae sint fuga aperiam non perferendis. Repudiandae veritatis
                              labore eius!
                           </p>
                           <a href="#pilihMobil" class="btn btn-success w-100">
                              Pilih Mobil
                           </a>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default CardHasil;
