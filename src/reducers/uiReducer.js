import { types } from "../types/types";

const initialState = {
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uisetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiremoveError:
      return {
        ...state,
        msgError: null,
      };

    default:
      return state;
  }
};
