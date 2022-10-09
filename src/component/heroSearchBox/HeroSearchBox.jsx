import React from "react";
import SearchBox from "../searchBox/SearchBox";
import "./HeroSearchBox.css";

const HeroSearchBox = () => {
   return (
      <div id="hero" className="hero position-relative d-flex">
         <div className="conatiner">
            <SearchBox />
         </div>
      </div>
   );
};

export default HeroSearchBox;
