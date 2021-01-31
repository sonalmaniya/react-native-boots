import {AppConfig} from '../ApiConfig';
import {getItemFromStorage} from '../Utils/Storage';
import axios from 'axios';

export const isLoggedIn = async () => {
  const token = await getItemFromStorage('token');
  if (!token) {
    return false;
  }
  AppConfig.token = token;
  return true;
};

export const userLogin = async (params) => {
  const response = await axios.post(AppConfig.login, params);
  return response.data;
};
