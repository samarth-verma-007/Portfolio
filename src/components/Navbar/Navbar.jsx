import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      
      <div className="n-left">
        <div className="n-name">Dark Mode</div>
        <Toggle />
      </div>
      
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link class="desc" to="/" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link class="desc" to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link class="desc" to="works" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li> */}
            <li>
              <Link class="desc" to="testimonial" spy={true} smooth={true}>
                Education
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
