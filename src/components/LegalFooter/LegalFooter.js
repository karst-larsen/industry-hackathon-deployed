import React from "react";
import "./LegalFooter.scss";
import { FaChevronUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function LegalFooter() {
  const [currentShow, setCurrentShow] = useState(false);

  return (
    <div>
      <section className="legal">
        <div className="legal__wrapper">
          <div className="legal__header">
            <div className="legal__title">Legal</div>
            {currentShow ? (
              <IconContext.Provider value={{ color: "white" }}>
                <FaChevronUp
                  className="legal__arrow"
                  onClick={() => {
                    setCurrentShow((currentShow) => !currentShow);
                  }}
                />
              </IconContext.Provider>
            ) : null}
            {currentShow ? null : (
              <IconContext.Provider value={{ color: "white" }}>
                <FaChevronDown
                  className="legal__arrow"
                  onClick={() => {
                    setCurrentShow((currentShow) => !currentShow);
                  }}
                />
              </IconContext.Provider>
            )}
          </div>
          {currentShow ? (
            <div className="legal__text">
              <div className="legal__body">
                ®* The Western Union name, logo and related Trademarks and
                Service Marks are owned by Western Union Holdings Inc., and are
                used with permission.
              </div>
              <div className="legal__body">
                ®§ Interac e-Transfer is a registered trademark of Interac Inc.
                Used under license.{" "}
              </div>
              <div className="legal__body">
                * We guarantee your interest rate for the selected fixed rate
                mortgage type and term for up to 130 days from the rate
                guarantee start date. If the mortgage is not funded within the
                130-day period, the interest rate guarantee expires. Applicable
                to residential mortgages only and subject to Bank of Montreal
                standard lending criteria for residential properties. Longest
                rate guarantee of any major Canadian bank as of January 17,
                2022.{" "}
              </div>
              <div className="legal__body legal__body--terms">
                ** Terms and conditions
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default LegalFooter;
