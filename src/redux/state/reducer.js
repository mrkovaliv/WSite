import CONSTANTS from "./constants";

import {INITIAL_STATE } from '../constants';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_STATE_VALUES:
      return state;
    default:
      return state;
  }
};

export default reducer;
