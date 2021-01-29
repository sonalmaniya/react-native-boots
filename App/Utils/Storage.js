import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    return null;
  }
};

const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

const storeObjectData = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

const retrieveObjectData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const multiDelete = async (keyArray) => {
  try {
    return await AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return null;
  }
};

const clear = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};

const StorageService = {
  set: storeData,
  setObject: storeObjectData,
  get: retrieveData,
  getObject: retrieveObjectData,
  delete: removeData,
  multiDelete,
  clear,
};

export default StorageService;
