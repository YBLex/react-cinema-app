import NameSpace from '../name-space.js';

const USER = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[USER].authorizationStatus;
};
