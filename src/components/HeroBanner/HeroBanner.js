import React from "react";
import "./HeroBanner.scss";
import { FaChevronRight } from "react-icons/fa";
import bulb from "../../assets/icons/bulb-icon.svg";
import { IconContext } from "react-icons/lib";
import { HiArrowNarrowLeft } from "react-icons/hi";
function HeroBanner() {
  return (
    <div className="hero">
      <div className="hero__primary">
        <div className="hero__wrapper">
          <div className="hero__image">
            <div className="hero__button">
              <IconContext.Provider value={{ size: "20px" }}>
                <HiArrowNarrowLeft />
              </IconContext.Provider>
              Newcomers to Canada
            </div>
          </div>
          <div className="floating-title"></div>

          <div className="hero__title-container">
            <h1 className="hero__title-text">
              Banking for permanent residents and foreign workers in Canada
            </h1>
          </div>

          <div className="info__container">
            <div className="info__top">
              Make the most of your new life in Canada. With the BMO NewStart
              <sup>® </sup>
              Program, you get special banking offers and advice to make the
              transition to your new home as smooth as possible.
            </div>
            <div className="info__bottom">
              <div className="info__bottom-icon">
                <img src={bulb} alt="bulb icon"></img>
              </div>
              <div className="info__bottom-right-container">
                <div className="info__bottom-title">
                  No monthly fee banking for a year{" "}
                  <span className="asterix">*69</span>
                </div>
                <p>
                  Save $260 <span className="asterix">*69</span> in fees when
                  you get unlimited chequing with the Performance chequing
                  account and a small safety deposit box free for one year.{" "}
                  <span className="asterix">*69</span>
                </p>
                <div className="info__bottom-learn">
                  <p>Learn More</p>
                  <IconContext.Provider value={{ color: "#0075be" }}>
                    <FaChevronRight />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
