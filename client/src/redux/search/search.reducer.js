import SearchActionTypes from "./search.types";

const INITAL_STATE = {
  word: "",
  hidden: false,
  glossary: {},
};

const searchReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.TOGGLE_SEARCH_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case SearchActionTypes.INPUT_CHANGE:
      return {
        ...state,
        word: action.payload,
      };
    case SearchActionTypes.GET_GLOSSARY:
      return {
        ...state,
        glossary: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
