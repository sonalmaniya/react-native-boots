import {SET_USER} from '../Actions/Keys';
import DefaultState from './Default';

const INIT_STATE = DefaultState.user;

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export default UserReducer;
