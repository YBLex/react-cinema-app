import NameSpace from './name-space.js';
// import {reducer as app} from './app/app.js';
import data from './data/data.js';
import user from './user/user.js';
import {combineReducers} from "redux";

export default combineReducers({
  // [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
