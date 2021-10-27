import { types } from "../types/types";

export const eventForm = (
  tipo_documento,
  documento,
  nombre,
  correo,
  celular,
  placa,
  marca, year, modelo
) => ({
  type: types.eventForm,
  payload: {
    tipo_documento,
    documento,
    nombre,
    correo,
    celular,
    placa,
    marca, year, modelo
  },
});

export const sendMonto = (montoBase) => ({
  type: types.sendMonto,
  payload:{
    montoBase
  }

})

export const setError = (err) => ({
  type: types.uisetError,
  payload: err,
});

export const removeError = (err) => ({
  type: types.uiremoveError,
});
