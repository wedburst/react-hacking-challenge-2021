import React from "react";
import Rimac from "./assets/img/rimac.png";
import Coche from "./assets/img/coche.svg";
import Chica from "./assets/img/chica.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";

const handleForm = () => {};

const RimacHome = () => {
  return (
    <div class="grid-2">
      <div className="image sm-bg-rimac">
        <div className="w-100">
          <img src={Rimac} className="logo-rimac mt-24" alt="rimac" />
        </div>
        <div className="">
          <img src={Coche} className="img-fluid sm-none" alt="coche" />
          <p className="nuevo sm-mt-40">¡NUEVO!</p>
          <p className="titulo-seguro sm-none">
            <span className="gris">Seguro</span> Vehicular <br /> Tracking
          </p>
          <p className="titulo-seguro-sm">
            <span className="gris">Seguro Vehicular</span> <br /> Tracking
          </p>

          <p className="roboto color-gray font-14 sm-76">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </div>
        <div className="w-100 sm-none">
          <h1 className="copyright">© 2020 RIMAC Seguros y Reaseguros.</h1>
        </div>
        <div className="chica-position"></div>
      </div>
      <div className="form mt-24 w-100">
        <Header />

        <div className="d-flex justify-content-center">
          <form action="" onSubmit="handleForm" className="formulario">
            <p className="title-form">Déjanos tus datos</p>
            <div>
              <div className="form-group">
                <div className="d-flex align-items-center">
                  <select
                    name=""
                    id=""
                    className="form-control select-document"
                  >
                    <option value="">DNI</option>
                    <option value="">C.E</option>
                  </select>
                  <input
                    type="text"
                    className="form-control bl-0"
                    placeholder="Nro. de doc"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Celular"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Placa"
                />
              </div>
              <div className="mt-24">
                <label class="checkbox">
                  <p className="m-0 label-text">
                    Acepto la{" "}
                    <a href="#">Política de Protecciòn de Datos Personales</a> y
                    los <a href="#">Términos y Condiciones.</a>
                  </p>
                  <input type="checkbox" checked="checked" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div>
                <Link to="armaplan" className="btn btn-rimac">
                  COTÍZALO
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RimacHome;
