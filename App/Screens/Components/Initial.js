import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {isLoggedIn} from '../../Services/UserService';

const Initial = () => {
  const navigation = useNavigation();

  useEffect(() => {
    isUserLogin();
  }, []);

  const hideSplash = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }

  const isUserLogin = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      goToNextScreen('Login');
      return;
    }
    goToNextScreen('Home');
  };

  const goToNextScreen = async (nextScreen) => {
    hideSplash();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: nextScreen}],
      }),
    );
  };
  return <View />;
};

export default Initial;
