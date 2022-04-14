import CONSTANTS from "./constants";

const INITIAL_STATE = {
  header: {
    color: '#fff',
    backgroundColor: '#000',
    email: 'kovaliv@gmail.com',
    phone: '+380938160837',
    instagram: 'https://www.instagram.com/aleksey_durnev',
    facebook: 'https://www.facebook.com/a.durnev',
    telegram: 'https://t.me/durnevportitvse',
  },
  settings: {
    color: '#fff',
    backgroundColor: 'red',
    showHeader: true,
    showAbout: true,
    showServices: true,
    showNovelty: true,
    showFooter: true,
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_STATE_VALUES:
      return state;
    default:
      return state;
  }
};

export default reducer;
