import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Switch,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {userLogout} from '../../../Actions/UserActions';

const Settings = (props) => {
  const {appTheme, setAppTheme} = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(appTheme.type === 'dark');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onValueChange = () => {
    setAppTheme((!darkMode && 'dark') || 'light');
    setDarkMode(!darkMode);
  };

  const logout = () => {
    Alert.alert(
      '',
      'Do you want to logout?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: onLogout,
        },
      ],
      {cancelable: true},
    );
  };

  const onLogout = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
    dispatch(userLogout());
  };

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <View style={CommonStyle.rowCenter}>
        <CustomText style={{color: appTheme.text, margin: 10}}>
          Dark Mode
        </CustomText>
        <Switch onChange={onValueChange} value={darkMode} />
      </View>
      <TouchableOpacity onPress={logout}>
        <CustomText large style={{color: appTheme.text}}>
          Log out
        </CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
