import React from "react";
import Rimac from "../assets/img/rimac.png";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="top-bar fixed-top">
      <Link to="/">
       <img src={Rimac} className="" alt="rimac" />
      </Link>
      <div className="text-right d-flex align-items-center justify-content-end sm-none">
        <p className="color-gray">¿Tienes alguna duda?</p>
        <p className="dudas__phone">
          {" "}
          <FontAwesomeIcon icon={faPhoneAlt} /> (01) 411 6001
        </p>
      </div>
      <div className="sm-block">
        <p className="dudas__phone">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/>
          <span style={{marginLeft: '4px'}}>Llámanos</span>
        </p>
      </div>
    </div>
  );
};
