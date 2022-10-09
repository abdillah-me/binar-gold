import React, { useEffect, useState } from "react";
import "./HasilCari.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardHasil from "../../component/cardHasilCari/CardHasil";

const HasilCari = () => {
   const [hasilMobil, setHasilMobil] = useState(null);
   const [isPending, setIsPending] = useState(true);
   useEffect(() => {
      fetch("https://bootcamp-rent-car.herokuapp.com/admin/car")
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            setIsPending(false);
            setHasilMobil(data);
         });
   }, []);
   return (
      <div id="hasilCari">
         <Navbar />
         {isPending && (
            <div style={{ margin: "0 auto" }}>
               <h4>Loading...</h4>{" "}
            </div>
         )}
         {hasilMobil && <CardHasil hasilMobil={hasilMobil} />}
         <Footer />
      </div>
   );
};

export default HasilCari;
