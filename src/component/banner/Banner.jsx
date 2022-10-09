import React from "react";
import "./Banner.css";

const Banner = () => {
   return (
      <div id="banner" className="banner">
         <div className="container">
            <div className="item text-center rounded">
               <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
               <p className="mt-3 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
               </p>
               <button className="main-button py-2 px-4 rounded">Mulai Sewa Mobil</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
