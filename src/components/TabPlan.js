import React from "react";
// import Accordion from "react-bootstrap/Accordion";

import { Accordion } from "react-bootstrap";

import NumOne from "../assets/img/1.png";
import NumTwo from "../assets/img/2.png";
import NumThree from "../assets/img/3.png";

import CircleRemove from "../assets/img/circle_remove.png";
import CircleAdd from "../assets/img/circle_add.png";

export const TabPlan = () => {
  return (
    <>
      <nav className="content__tab">
        <a href="#" className="tab__nav tab__active">
          <div>protege a tu auto</div>
        </a>
        <a href="#" className="tab__nav ">
          <div>protege a los que te rodean</div>
        </a>
        <a href="#" className="tab__nav ">
          <div>mejora tu plan</div>
        </a>
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
                <div className="d-flex align-items-center">
                  <img src={CircleRemove} alt="circle button" />
                  <p className="accordion__text_title">QUITAR</p>
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
                <div className="d-flex align-items-center">
                  <img src={CircleAdd} alt="circle button" />
                  <p className="accordion__text_title">AGREGAR</p>
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
                <div className="d-flex align-items-center">
                  <img src={CircleAdd} alt="circle button" />
                  <p className="accordion__text_title">AGREGAR</p>
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
    </>
  );
};
