import CONSTANTS from "./constants";

import { INITIAL_STATE } from '../constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.SET_VALUES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
