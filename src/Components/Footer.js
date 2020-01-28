import React from "react";
import "./Footer.css";
import Logo from "../MJLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="row footcontent">
        <div className="col">
            <img className="logo" alt="Mary Jacobs Logo" src={Logo} ></img>
        </div>
        <div className="col">
            <p>A Homework Assignent</p>
            <p>Built with REACT by</p>
            <a alt="Mary Jacobs portfolio link" href="https://themaryjacobs.github.io/ThePortfolio/" rel="noopener noreferrer" target="_blank" ><h3>Mary Jacobs</h3></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;