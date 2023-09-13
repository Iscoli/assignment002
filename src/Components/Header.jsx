import React from "react";
import Search from "./atom/Search";

function Header() {
  return (
    <div className="background-container">
      <div className="background-text">
        <div>
          <Search />
        </div>
        <h3>
          John wick 3: <br></br> Parabellum
        </h3>
      </div>
    </div>
  );
}

export default Header;
