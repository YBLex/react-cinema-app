import ActionCreator from './action-creator.js';
import {AuthStatus} from '../../constants/constants.js';

const Operation = {
  login: (authData, onSuccsess, onError) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        // redirect to the main page
      })
      .catch((err) => {
        throw err;
      });
  },
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default Operation;
