import React from "react";
import AutoTyper from "./AutoTyper";
import cv from '../assets/mosininterviewcv.pdf'
function Navigation() {
  return (
    <section id="main">
      <nav>
        <a href=".index.html" class="logo">
        &#60;/ mozix &#62;
        </a>
        <div className="toggle"></div>
        <ul className="menu">
          <li className="">
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="name">
        <p>Hey</p>
        <h1>
          I'm <font color="#126bf0">Mosin</font>
        </h1>
        <p className="details">{<AutoTyper />}</p>

        <a href={cv} class="cv-btn" download="mosin-cv" target="_blank"  rel="noreferrer">
          Download Resume
        </a>
      </div>

      <a href="#about">
        <div className="black-line"></div>
      </a>

      <div class="social">
        {/* <a href="https://www.facebook.com/rishabhraj21234">
          <i className="fab fa-facebook-f"></i>
        </a> */}
        <a href="https://www.instagram.com/meltingxconcert/" target="blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/mozix5" target="blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://wa.me/919867431605" target="blank">
          <i className="social-icon fab fa-whatsapp"></i>
        </a>
        <a href="tel:9867431605" target="blank">
          <i className="social-icon fas fa-phone"></i>
        </a>
      </div>
    </section>
  );
}

export default Navigation;
