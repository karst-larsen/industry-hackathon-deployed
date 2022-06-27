import React from "react";
import "./BottomFooter.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function BottomFooter() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <h1 className="footer__title">Contact Us</h1>
        <ul className="options__list">
          <li className="options__list-item">Email</li>
          <li className="options__list-item">Phone</li>
          <li className="options__list-item">Book Appointment</li>
          <li className="options__list-item">Find a Branch</li>
          <li className="options__list-item">Report Lost/Stolen Debit Card</li>
          <li className="options__list-item">Report Lost/Stolen Credit Card</li>
          <li className="options__list-item">Report Fraud</li>
          <li className="options__list-item">Modern Slavery act Statement</li>
        </ul>
        <hr className="border"></hr>
        <ul className="about__list">
          <li className="about__list-item">Privacy</li>
          <li className="about__list-item">Legal</li>
          <li className="about__list-item">Security</li>
          <li className="about__list-item">Careers</li>
          <li className="about__list-item">Investor Relations</li>
          <li className="about__list-item">Accessibility</li>
          <li className="about__list-item">Support</li>
          <li className="about__list-item">Site Map</li>
          <li className="about__list-item">CDIC Member</li>
          <li className="about__list-item"></li>
        </ul>
        <hr className="border"></hr>
        <ul className="footer__icons">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaRss />
            <FaYoutube />
          </IconContext.Provider>
        </ul>
      </div>
    </section>
  );
}

export default BottomFooter;
