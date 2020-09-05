import adapter from '../../adapter/adapter.js';
import ActionCreator from './action-creator.js';

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedMovies = adapter.movies(response.data);
        dispatch(ActionCreator.loadMovies(adaptedMovies));
      });
  },
};

export default Operation;
