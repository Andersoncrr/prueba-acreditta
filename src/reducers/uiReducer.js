import { types } from "../types/types";

const initialState = {
  search: false,
  reload: false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiDatacharging:
      return {
        ...state,
        search: true,
      };
    case types.uiDataloaded:
      return {
        ...state,
        search: false,
      };
    case types.uiReload:
      return {
        ...state,
        reload: true,
      };
    case types.uiFinishReload:
      return {
        ...state,
        reload: false,
      };

    default:
      return state;
  }
};
