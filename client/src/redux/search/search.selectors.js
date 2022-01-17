import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchHidden = createSelector(
  [selectSearch],
  (search) => search.hidden
);
