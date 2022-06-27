import React from "react";
import "./BankOnline.scss";
import apple from "../../assets/images/apple.svg";
import google from "../../assets/images/google.svg";
import phone from "../../assets/images/phonecropped.svg";

function BankOnline() {
  return (
    <div>
      <div className="bankonline__container">
        <h1 className="bankonline__title">Bank online, easily and securely</h1>
        <p className="bankonline__body">
          Manage your banking wherever and whenever you want. Check your
          accounts, pay bills and send money online, all with our mobile banking
          app!
        </p>
        <p className="bankonline__body">
          Your security is our priority – we’ll pay back 100% of any losses from
          unauthorized transactions as outlined in our{" "}
          <span className="bankonline__body--blue">
            Electronic Banking Services Agreement.
          </span>
        </p>
        <div className="image__container">
          <img src={google} className="bankonline__image--scale" />
          <img src={apple} className="bankonline__image" />
        </div>
        <div className="image__phone">
          <img src={phone}></img>
        </div>
      </div>
    </div>
  );
}

export default BankOnline;
