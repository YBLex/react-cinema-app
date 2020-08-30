import ActionType from './action-type.js';

const ActionCreator = {
  setAuthStatus: (status) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: status,
  }),
};

export default ActionCreator;
