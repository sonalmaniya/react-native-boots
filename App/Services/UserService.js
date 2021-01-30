import {AppConfig} from '../ApiConfig';
import StorageService from '../Utils/Storage';
import axios from 'axios';

const isLoggedIn = async () => {
  const token = await StorageService.get('token');
  if (!token) {
    return false;
  }
  AppConfig.token = token;
  return true;
};

const userLogin = async (params) => {
  const response = await axios.post(AppConfig.login, params);
  return response.data;
};

const UserService = {
  isLoggedIn,
  userLogin,
};

export default UserService;
