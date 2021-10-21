import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faArrowCircleRight,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useStep } from "react-hooks-helper";
import Rimac from "../assets/img/rimac.png";
import Progress from "../assets/img/progress.png";
import Arrow from "../assets/img/arrow.svg";
import ArrowRight from "../assets/img/gl_arrow_right.svg";

export const StepsForm = () => {
  const {
    index,
    navigation: { previous, next, go },
  } = useStep({ steps: 3 });

  return (
    <div>
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
      <div className="grid-step">
        <div className="bg-lateral">
          <div>
            <div className="">
              <div className={index === 0 ? "activeSteps" : "step-number"}>
                <span>1</span>
                <p className="ml-16">Datos del auto</p>
              </div>
            </div>
            <div className="relative">
              <img src={Progress} className="" alt="Progress" />
            </div>
            <div className="mt-48">
              <div className={index === 1 ? "activeSteps" : "step-number"}>
                <span>2</span>
                <p className="ml-16">Arma tu plan</p>
              </div>
            </div>
          </div>
        </div>
        <p className="padding-rimac">
          <div className="d-flex alig-items-center">
            <img src={Arrow} alt="Arrow" />
            <p className="ml-16 d-flex align-items-center volver">volver</p>
          </div>
          <div className="saludo">
            <p>
              ¡Hola, <span>Juan!</span>
            </p>
            <p className="datos__text roboto">Completa los datos de tu auto</p>
          </div>
          <div className="row mt-32">
            <div className="col-md-6">
              <form action="">
                <div className="form-group">
                  <select name="" id="" className="form-control select-auto">
                    <option value="">2019</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="" id="" className="form-control select-auto">
                    <option value="">Wolkswagen</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="auto">¿Tu auto es a gas?</p>
                  <div className="d-flex">
                    <label className="d-flex align-items-center">
                      <input type="radio" name="light" checked />
                      <span class="design"></span>
                      <span class="ml-16">Si</span>
                    </label>
                    <label className="d-flex align-items-center ml-32">
                      <input type="radio" name="light" checked />
                      <span class="design"></span>
                      <span class="ml-16">No</span>
                    </label>
                  </div>
                </div>
                <div className="border-bottom mt-18"></div>
                <div className="d-flex align-item-center justify-content-between mt-40">
                    <div className="d-flex justify-content-center flex-column">
                        <p className="suma__asegurada">Indica la suma asegurada</p>
                        <p className="min__max">MIN $12,500 | MAX $16,500</p>
                    </div>
                    <div className="">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div>
                  <button className="btn btn-rimac">CONTINUAR <img src={ArrowRight} alt="ArrowRight"/></button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <p>AYUDA</p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};
