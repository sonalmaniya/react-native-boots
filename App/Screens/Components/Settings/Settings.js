import React, {useState, useContext} from 'react';
import {SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, CommonActions} from '@react-navigation/native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {userLogout} from '../../../Actions/UserActions';
import {SettingRow} from '../../SubComponents';

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
        {backgroundColor: appTheme.background},
      ]}>
      <SettingRow
        isSwitch={true}
        title={'Dark Mode'}
        onPress={onValueChange}
        value={darkMode}
      />
      <SettingRow title={'Log out'} onPress={logout} value={darkMode} />
    </SafeAreaView>
  );
};

export default Settings;
