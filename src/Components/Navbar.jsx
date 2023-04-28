import React from "react";
import "./Navbar.css";
import imgg from "../logo.png"

// import img from "./"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

  function toggleDropdown() {
    var dropdown = document.querySelector('.drop');
    dropdown.classList.toggle('show');
  }
  function hideDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('show');
  }
  return (
    <>
      <header className="header" style={{ color: "#746464cf" }}>
        <FontAwesomeIcon icon={faPhone} /> +91-9836913164 (India) &nbsp; &nbsp;<FontAwesomeIcon icon={faPhone} />    +1-917-730-4660 (U.S.)
      </header>
      <nav>
        <img src={imgg} alt="Logo" style={{ "margin-left": "15px" }} width="150" height="50" />
        <div>
          <ul id="navbar">
            <li>
              <a onMouseOver={toggleDropdown}> Industry Expertise </a>
              <span class="drop-down-icon"></span>
              <svg onClick={toggleDropdown} class="rotate-90" viewBox="0 0 30 48" version="1.1" xmlns="https://www.w3.org/2000/svg" width="10" height="10" preserveAspectRatio>

                <path d="M0 4.7c1.8-1.8 3.4-3.4 4.9-4.9 8 8 16.1 16 24.2 24 -8.1 8-16.1 16-24.2 24 -1.5-1.5-3.1-3.1-4.7-4.7C6.5 36.7 12.9 30.4 19.4 24 12.8 17.5 6.4 11.1 0 4.7z"></path>
              </svg>
              <div class="dropdown drop">
                <div onMouseLeave={hideDropdown} class="dropdown-menu" >
                  <a href="./home" class="dropdown-item" >Consumer Oriented Sector</a>
                  <a href="./home" class="dropdown-item">Life Science</a>
                  <a href="./home" class="dropdown-item">Technology Sector</a>
                  <a href="./home" class="dropdown-item">Chemical material & Energy</a>
                  <a href="./home" class="dropdown-item">Defence Aerospace & Automotive</a>
                  <a href="./home" class="dropdown-item">Banking,Financial Services & Insurance Sector</a>
                </div>
              </div>
            </li>
            <li>
              <a href="index.html"> Solutions </a>
              <span class="drop-down-icon"></span>
              <svg class="rotate-90" viewBox="0 0 30 48" version="1.1" xmlns="https://www.w3.org/2000/svg" width="10" height="10" preserveAspectRatio>

                <path d="M0 4.7c1.8-1.8 3.4-3.4 4.9-4.9 8 8 16.1 16 24.2 24 -8.1 8-16.1 16-24.2 24 -1.5-1.5-3.1-3.1-4.7-4.7C6.5 36.7 12.9 30.4 19.4 24 12.8 17.5 6.4 11.1 0 4.7z"></path>
              </svg>
            </li>

            <li>
              <a href="index.html"> Resources </a>
            </li>
            <li>
              <a href="index.html"> About Us </a>
            </li>
            <li>
              <a href="index.html"> AIM Box </a>
            </li>
            <li>
              <a href="index.html"> Contact Us </a>
            </li>
            <li>
              <form>
                <input type="text" placeholder="Search..." className="search-input" />
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
