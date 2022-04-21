import React from "react";
import { createSelector } from "reselect";

export const movieTitlesSelector = createSelector(
  state => state.movies,
  movies => movies.map(movie => movie.title)
);

export default selectors;