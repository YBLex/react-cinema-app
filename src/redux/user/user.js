import {extend} from '../../utils/utils';
import {AuthStatus} from '../../constants/constants.js';
import ActionType from './action-type.js';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export default reducer;
