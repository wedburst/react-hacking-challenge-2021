import { types } from "../types/types";

// const initialState = {
//   documento: "00342556",
//   celular: "986624949",
//   placa: "324AB",
// };

const notesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.eventForm:
      return {
        dataTipo_documento: action.payload.tipo_documento,
        dataDocumento: action.payload.documento,
        dataNombre: action.payload.nombre,
        dataCorreo: action.payload.correo,
        dataCelular: action.payload.celular,
        dataPlaca: action.payload.placa,
        dataMarca: action.payload.marca,
        dataYear: action.payload.year,
        dataModelo: action.payload.modelo,
      };
    
    default:
      return state;
  }
};

export default notesReducer;
