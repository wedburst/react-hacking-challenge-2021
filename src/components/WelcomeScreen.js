import React from "react";
import { Header } from "./Header";

import JoseImage from "../assets/img/jose.svg";

export const WelcomeScreen = () => {
  return (
    <div>
      <Header />
      <div className="container padding-rimac">
        <div className="row mt-48 d-flex align-items-center">
          <div className="col-sm-12 col-lg-6">
            <img src={JoseImage} className="img-fluid sm-none" alt="Jose" />
            <div className="jose__sm__screen"></div>
          </div>
          <div className="col-sm-12 col-lg-6 parrafo-bienvenida sm-mt-welcome p-5">
            <p>¡Te damos la bienvenida!</p>
            <p>Cuenta con nosotros para proteger tu vehículo</p>
            <p className="mt-16">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking
              a tu correo: <br /> joel.sanchez@gmail.com
            </p>
            <button className="btn btn-rimac">cómo usar mi seguro</button>
          </div>
        </div>
      </div>
    </div>
  );
};
