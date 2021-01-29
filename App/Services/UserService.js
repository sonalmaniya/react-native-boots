import Config from '../Config';
import StorageService from '../Utils/Storage';
import axios from 'axios';

const isLoggedIn = async () => {
  const user = await StorageService.getObject('user');
  const token = await StorageService.get('token');
  if (!user || !token) {
    return false;
  }
  Config.token = token;
  return true;
};

const userLogin = async (params) => {
  const response = await axios.post(Config.login, params);
  return response.data;
};

const UserService = {
  isLoggedIn,
  userLogin,
};

export default UserService;
