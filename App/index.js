import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {store, persistor} from './Stores';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import axios from 'axios';
import Routes from './Routes';
import NetInfo from '@react-native-community/netinfo';
import {ApiConfig} from './ApiConfig';
import {configureUrl} from './Utils/Helper';
import {getItemFromStorage} from './Utils/Storage';
import {AppContextProvider} from './AppContext';
import {NoConnection} from './Screens/SubComponents';
import CommonStyle from './Theme/CommonStyle';

axios.interceptors.request.use(
  async (config) => {
    let request = config;
    let token = ApiConfig.token;
    if (!token) {
      token = await getItemFromStorage('token');
    }
    request.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    request.url = configureUrl(config.url);
    return request;
  },
  (error) => error,
);

const App = (props) => {
  const [isConnected, setIsConnected] = useState(true);
  let netInfoSubscription = null;

  useEffect(() => {
    manageConnection();
    return () => {
      if (netInfoSubscription) {
        netInfoSubscription();
      }
    };
  }, []);

  const manageConnection = () => {
    retryConnection();
    netInfoSubscription = NetInfo.addEventListener(handleConnectivityChange);
  };

  // Managed internet connection
  const handleConnectivityChange = (info) => {
    if (info.type === 'none' || !info.isConnected) {
      setIsConnected(false);
    } else {
      setIsConnected(true);
    }
  };

  // Check network connection
  const retryConnection = () => {
    NetInfo.fetch().then(handleConnectivityChange);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContextProvider>
          <View style={CommonStyle.flexContainer}>
            <Routes />
            {(!isConnected && (
              <NoConnection retryConnection={retryConnection} />
            )) ||
              null}
          </View>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
