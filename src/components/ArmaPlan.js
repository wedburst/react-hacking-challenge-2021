import React from "react";
import { useStep } from "react-hooks-helper";
import Progress from "../assets/img/progress.png";
import Arrow from "../assets/img/arrow.svg";

import JuanRimac from "../assets/img/juan.svg";

import Add from "../assets/img/gl_add.png";
import Remove from "../assets/img/gl_remove.png";
import { TabPlan } from "./TabPlan";

import CheckMark from "../assets/img/ic_check.svg";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const ArmaPlan = () => {
  const {
    index,
    navigation: { previous, next, go },
  } = useStep({ steps: 3 });

  return (
    <div>
      <div className="grid-step">
        <div className="bg-lateral">
          <div>
            <div className="">
              <div className={index === 1 ? "activeSteps" : "step-number"}>
                <div className="number">1</div>
                <p className="ml-16">Datos del auto</p>
              </div>
            </div>
            <div className="relative">
              <img src={Progress} className="" alt="Progress" />
            </div>
            <div className="mt-48">
              <div className={index === 0 ? "activeSteps" : "step-number"}>
                <div className="number">2</div>
                <p className="ml-16">Arma tu plan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-rimac">
          <div className="d-flex alig-items-center">
            <img src={Arrow} alt="Arrow" />
            <p className="ml-16 d-flex align-items-center volver">volver</p>
          </div>
          <div className="saludo">
            <p>
              ¡Hola, <span>Juan!</span>
            </p>
            <p className="datos__text roboto">
              Conoce las coberturas para tu plan
            </p>
          </div>
          {/* Juan */}
          <div className="card__juan">
            <div className="card__text">
              <p>Placa: C2U-114</p>
              <p>Wolkswagen 2019 Golf</p>
            </div>
            <img src={JuanRimac} alt="Juan Rimac" />
          </div>
          <div className="sum__security d-flex align-items-center">
            <div className="w-70Rimac">
              <p>Indica la suma asegurada</p>
              <div>
                <p>MIN $12,500 | MAX $16,500</p>
              </div>
            </div>
            <div className="d-flex align-items-center border-rimac rounded">
              <button className="btn">
                <img src={Remove} alt="add more" />
              </button>
              <input
                type="number"
                className="form-control text-center"
                style={{ border: "0px" }}
                value="14.300"
              />
              <button className="btn">
                <img src={Add} alt="add more" />
              </button>
            </div>
          </div>
          <hr style={{ marginTop: "45px" }} className="d-sm-none" />
          <div className="mt-55">
            <p className="tab__title">Agrega o quita coberturas</p>
          </div>
          <TabPlan />
          {/* Fin */}
        </div>
        <div className="lateral__plan">
          <p>Monto</p>
          <p>$35.00</p>
          <p>mensuales</p>
          <hr />
          <p className="title_include">El precio incluye:</p>
          <div style={{ marginTop: "12px" }}>
            <div className="d-flex align-items-center">
              <img src={CheckMark} alt="checkmark" />
              <div className="margin__left__check">
                <p>Llanta de respuesto</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={CheckMark} alt="checkmark" />
              <div className="margin__left__check">
                <p>Analisis de motor</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={CheckMark} alt="checkmark" />
              <div className="margin__left__check">
                <p>Aros gratis</p>
              </div>
            </div>
            <div>
              <Link
                to="bienvenido"
                className="btn btn-rimac"
                style={{ width: "100%" }}
              >
                LO QUIERO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
