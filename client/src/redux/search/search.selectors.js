import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchHidden = createSelector(
  [selectSearch],
  (search) => search.hidden
);

export const selectWordInput = createSelector(
  [selectSearch],
  (search) => search.word
);

export const selectGlossary = createSelector(
  [selectSearch],
  (search) => search.glossary
);
