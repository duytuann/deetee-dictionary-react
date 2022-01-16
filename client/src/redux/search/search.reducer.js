import SearchActionTypes from "./search.types";

const INITAL_STATE = {
  hidden: false,
};

const searchReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.TOGGLE_SEARCH_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
  }
};

export default searchReducer;
