import { types } from "../types/types";

const montoReducer = (state = {}, action) => {
  switch (action.type){
    case types.sendMonto:
      return{
        dataMontoBase: action.payload.montoBase
      }

      default:
        return state;
  }

}

export default montoReducer;