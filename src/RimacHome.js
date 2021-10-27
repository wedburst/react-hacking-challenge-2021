import React, { useState } from "react";
import Rimac from "./assets/img/rimac.png";
import Coche from "./assets/img/coche.svg";
import { Header } from "./components/Header";
import { useForm } from "./hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { eventForm, removeError, setError } from "./actions/formulario";
import { Link } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

const RimacHome = ({ history }) => {

  const baseURL = "https://jsonplaceholder.typicode.com/users/1";

  // GET DATA FROM API 
  const { user } = useFetch({ baseURL });

  const dispatch = useDispatch();
  const [terminos, setTerminos] = useState(false);

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    tipo_documento: "DNI",
    documento: "",
    nombre: "Joel",
    correo: "joel.sanchez@gmail.com",
    celular: "",
    placa: "",
    marca: "Toyota",
    year: "2021",
    modelo: "Corolla"
  });

  const { tipo_documento, documento, celular, placa, marca, year, modelo } = formValues;

  const handleForm = (e) => {
    e.preventDefault();

    if (isValidation()) {
      //vamos a validar
      dispatch(
        eventForm(tipo_documento, documento, user.name, user.email, celular, placa, marca, year, modelo )
      );
      console.log("Datos ", formValues);
      console.log("se envio todo chido! 😊");
      history.push("/armaplan");
    }
  };

  const isValidation = () => {
    if (tipo_documento.trim().length === 0) {
      dispatch(setError("El tipo de documento es requerido"));
      return false;
    } else if (documento === "" || documento.length < 5) {
      dispatch(setError("El documento es requerido"));
      return false;
    } else if (celular === "" || celular.length < 5) {
      dispatch(setError("El celular es incorrecto"));
      return false;
    } else if (placa === "" || placa.trim().length < 5) {
      dispatch(setError("La placa es incorrecto"));
      return false;
    } else if (terminos === false) {
      dispatch(
        setError(
          "Politica de proteccion de datos y los terminos y condiciones son requeridos"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  const handleTerminos = (event) => {
    if (event.target.name === "terminoCondiciones") {
      setTerminos(event.target.checked);
    }
  };

  return (
    <div className="grid-2">
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
          <form action="" onSubmit={handleForm} className="formulario">
            <p className="title-form">Déjanos tus datos</p>
            <div>
              <div className="form-group">
                <div className="d-flex align-items-center">
                  <select
                    name="tipo_documento"
                    id="tipo_documento"
                    className="form-control select-document"
                    onChange={handleInputChange}
                  >
                    <option value="">DNI</option>
                    <option value="">C.E</option>
                  </select>
                  <input
                    type="number"
                    className="form-control bl-0"
                    placeholder="Nro. de doc"
                    name="documento"
                    value={documento}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Celular"
                  name="celular"
                  value={celular}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Placa"
                  name="placa"
                  value={placa}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-24">
                <label className="checkbox">
                  <p className="m-0 label-text">
                    Acepto la{" "}
                    <Link to="/"> Política de Protecciòn de Datos Personales</Link> y
                    los <Link to="/"> Términos y Condiciones.</Link>
                  </p>
                  <input type="checkbox"
                    name="terminoCondiciones"
                    checked={terminos}
                    onChange={handleTerminos}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                {msgError && (
                  <div className="alert alert-danger">{msgError}</div>
                )}
                <button type="submit" className="btn btn-rimac">
                  COTÍZALO
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RimacHome;
