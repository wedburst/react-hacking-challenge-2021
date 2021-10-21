import React from "react";
import Rimac from "../assets/img/rimac.png";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className="top-bar fixed-top">
      <img src={Rimac} className="" alt="rimac" />
      <div className="text-right d-flex align-items-center justify-content-end sm-none">
        <p className="color-gray">¿Tienes alguna duda?</p>
        <p className="dudas__phone">
          {" "}
          <FontAwesomeIcon icon={faPhoneAlt} /> (01) 411 6001
        </p>
      </div>
    </div>
  );
};
