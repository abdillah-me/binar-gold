import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../component/navbar/Navbar";
import HeroSection from "../../component/heroSection/HeroSection";
import FooterBoxSearch from "../../component/footerBoxSearch/FooterBoxSearch";

const CariMobil = () => {
   return (
      <div id="cariMobil">
         <Navbar />
         <HeroSection dataTo="/hasil-cari" display={{ display: "none" }} />
         <FooterBoxSearch />
      </div>
   );
};

export default CariMobil;
