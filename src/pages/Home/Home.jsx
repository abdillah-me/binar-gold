import React from "react";
import Banner from "../../component/banner/Banner";
import Footer from "../../component/footer/Footer";
import HeroSection from "../../component/heroSection/HeroSection";
import Navbar from "../../component/navbar/Navbar";
import Question from "../../component/question/Question";
import Service from "../../component/serviceSection/Service";
import Testimonail from "../../component/testimonial/Testimonail";
import WhyUs from "../../component/whyUs/WhyUs";

const Home = () => {
   return (
      <div id="homePage">
         <Navbar />
         <HeroSection dataTo="/cari-mobil" display={{ display: "block" }} />
         <Service />
         <WhyUs />
         <Testimonail />
         <Banner />
         <Question />
         <Footer />
      </div>
   );
};

export default Home;
