import SearchActionTypes from "./search.types";

export const toggleSearchHidden = () => ({
  type: SearchActionTypes.TOGGLE_SEARCH_HIDDEN,
});

export const inputChange = (event) => ({
  type: SearchActionTypes.INPUT_CHANGE,
  payload: event.target.value,
});
