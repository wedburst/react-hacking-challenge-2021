import React,{ useState } from "react";
import { useStep } from "react-hooks-helper";
import Progress from "../assets/img/progress.png";
import Arrow from "../assets/img/arrow.svg";

import JuanRimac from "../assets/img/juan.svg";

import Add from "../assets/img/gl_add.png";
import Remove from "../assets/img/gl_remove.png";

import CheckMark from "../assets/img/ic_check.svg";
import { Header } from "./Header";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {useCounter} from "../hooks/useCounter"

// tab
import { Accordion } from "react-bootstrap";

import NumOne from "../assets/img/1.png";
import NumTwo from "../assets/img/2.png";
import NumThree from "../assets/img/3.png";

import CircleRemove from "../assets/img/circle_remove.png";
import CircleAdd from "../assets/img/circle_add.png";
import { sendMonto } from "../actions/formulario";
export const ArmaPlan = () => {
  const dispatch = useDispatch();

    // Tab
    const [llantaRobadaToggle, setToggle] = useState(false);
    const toggleLlantas = () => setToggle(!llantaRobadaToggle);
  
    const [choqueLuzRoja, setChoqueLuzRoja] = useState(false);
    const toggleChoqueLuzRoja = () => setChoqueLuzRoja(!choqueLuzRoja);
  
    const [atropelloToggle, setAtropelloToggle] = useState(false);
    const toggleAtropelloToggle = () => setAtropelloToggle(!atropelloToggle);
  
    const { dataNombre, dataPlaca } = useSelector((state) => state.form);


  const {
    index,
    navigation: { previous, next, go },
  } = useStep({ steps: 3 });

  const {counter, increment, decrement} = useCounter(12500);

  let montoBase;
  let llantaRobada = 15;
  let choqueLuz = 20;
  let atroPello = 50

  let monto = llantaRobada + choqueLuz + atroPello;

  montoBase = monto;

  if(montoBase){
    if(llantaRobadaToggle === false){
      montoBase -= llantaRobada;
    }

    if(choqueLuzRoja === false || counter >= 16000){
      montoBase -= choqueLuz;
    }

    if(atropelloToggle === false){
      montoBase -= atroPello;
    }

    montoBase += 20;

  }


  const handleMonto = () => {
    console.log('Hola monto ', montoBase);
    dispatch(sendMonto(montoBase))
  }
  
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
          <Link
            to="/"
            className="d-flex alig-items-center"
            style={{ width: "fit-content" }}
          >
            <img src={Arrow} alt="Arrow" />
            <p className="ml-16 d-flex align-items-center volver">volver</p>
            </Link>
          <div className="saludo">
            <p>
              ¡Hola, <span>{dataNombre}!</span>
            </p>
            <p className="datos__text roboto">
              Conoce las coberturas para tu plan
            </p>
          </div>
          {/* Juan */}
          <div className="card__juan">
            <div className="card__text">
              <p>Placa: {dataPlaca}</p>
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
              <button className="btn" onClick={ () => decrement(100) }
              disabled={counter <= 12500}>
                <img src={Remove} alt="add more" />
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={counter}
                style={{width: '87px'}}
              />
              <button className="btn" onClick={ () => increment(100) }>
                <img src={Add} alt="add more"/>
              </button>
            </div>
          </div>
          <hr style={{ marginTop: "45px" }} className="d-sm-none" />
          <div className="mt-55">
            <p className="tab__title">Agrega o quita coberturas</p>
          </div>
          {/* TAB */}
          <nav className="content__tab">
        <Link to="/" className="tab__nav tab__active">
          <div>protege a tu auto</div>
        </Link>
        <Link to="/" className="tab__nav ">
          <div>protege a los que te rodean</div>
        </Link>
        <Link to="/" className="tab__nav ">
          <div>mejora tu plan</div>
        </Link>
      </nav>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center">
              <img
                src={NumOne}
                alt="icono llanta"
                style={{ marginRight: "24px" }}
              />{" "}
              <div>
                <div style={{ marginBottom: "16px" }}>Llanta robada</div>
                <div className="d-flex align-items-center" onClick={toggleLlantas}>
                  
                  {llantaRobadaToggle ? (
                    <>
                      <img src={CircleRemove} alt="circle button" />
                      <p className="accordion__text_title">QUITAR</p>
                    </>
                  ) : (
                    <>
                      <img src={CircleAdd} alt="circle button" />
                      <p className="accordion__text_title">AGREGAR</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            He salido de casa a las cuatro menos cinco para ir a la academia de
            ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,
            na llego a la academia que está en el centro del pueblo en una plaza
            medio-grande y dejo donde siempre la bici atada con una pitón a un
            sitio de esos de poner las bicis y mucho más
          </Accordion.Body>
        </Accordion.Item>
        {
          counter < 16000 ? 
          (
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <img
                    src={NumTwo}
                    alt="icono llanta"
                    style={{ marginRight: "24px" }}
                  />{" "}
                  <div>
                    <div style={{ marginBottom: "16px" }}>
                      Choque y/o pasarte la luz roja
                    </div>
                    <div className="d-flex align-items-center" onClick={toggleChoqueLuzRoja}>
                    {choqueLuzRoja ? (
                    <>
                      <img src={CircleRemove} alt="circle button" />
                      <p className="accordion__text_title">QUITAR</p>
                    </>
                  ) : (
                    <>
                      <img src={CircleAdd} alt="circle button" />
                      <p className="accordion__text_title">AGREGAR</p>
                    </>
                  )}
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          )
          :
          null
        }
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="d-flex align-items-center">
              <img
                src={NumThree}
                alt="icono llanta"
                style={{ marginRight: "24px" }}
              />{" "}
              <div>
                <div style={{ marginBottom: "16px" }}>
                  Atropello en la vía Evitamiento
                </div>
                <div className="d-flex align-items-center" onClick={toggleAtropelloToggle}>
                {atropelloToggle ? (
                    <>
                      <img src={CircleRemove} alt="circle button" />
                      <p className="accordion__text_title">QUITAR</p>
                    </>
                  ) : (
                    <>
                      <img src={CircleAdd} alt="circle button" />
                      <p className="accordion__text_title">AGREGAR</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
          {/* Fin */}
        </div>
        <div className="lateral__plan">
          <p>Monto</p>
          <p>{montoBase.toFixed(2)}</p>
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
                onClick={handleMonto}
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
