import {GET_USER, LOG_OUT, SET_USER} from './Keys';

export const getUserDetail = () => ({
  type: GET_USER,
});

export const userLogout = () => ({
  type: LOG_OUT,
});
