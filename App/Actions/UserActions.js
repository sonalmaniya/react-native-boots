import {GET_USER, LOG_OUT} from './Keys';

export const getUserDetail = () => ({
  type: GET_USER,
});

export const userLogout = () => ({
  type: LOG_OUT,
});
