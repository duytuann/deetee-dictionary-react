import SearchActionTypes from "./search.types";
import { getAPI } from "../../utils/FetchData.utils";

export const toggleSearchHidden = () => ({
  type: SearchActionTypes.TOGGLE_SEARCH_HIDDEN,
});

export const inputChange = (event) => ({
  type: SearchActionTypes.INPUT_CHANGE,
  payload: event.target.value,
});

export const getGlossary = (word) => async (dispatch) => {
  try {
    const response = await getAPI(`dictionary/${word}`);

    dispatch({
      type: SearchActionTypes.GET_GLOSSARY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getWordList = () => async (dispatch) => {
  try {
    const response = await getAPI("wordlist");

    dispatch({
      type: SearchActionTypes.GET_WORD_LIST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
