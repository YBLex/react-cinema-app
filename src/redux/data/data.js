import {extend} from '../../utils/utils.js';
import ActionType from "./action-type.js";

const initialState = {
  movies: [],
  moviesFilteredByGenre: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        moviesFilteredByGenre: action.payload
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
        moviesFilteredByGenre: action.payload,
      });
  }

  return state;
};

export default reducer;
