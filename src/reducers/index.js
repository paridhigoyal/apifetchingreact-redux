import { combineReducers } from 'redux';
import todos from './todos';
import albums from './albums';
import users from './users';

export default combineReducers({
  todos,
  albums,
  users
});