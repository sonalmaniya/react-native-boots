import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../Screens/Components/Settings/Settings';
import {AppContext} from '../AppContext';

const Stack = createStackNavigator();

const SettingsStack = () => {
  const {appTheme, translations} = useContext(AppContext);
  return (
    <Stack.Navigator
      screenOptions={({route, navigation, theme}) => ({
        headerShown: true,
        cardOverlayEnabled: true,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: appTheme.text,
        },
        headerTintColor: appTheme.text,
        headerStyle: {
          backgroundColor: appTheme.tab,
        },
      })}
      mode="screen">
      <Stack.Screen
        name={'Settings'}
        component={Settings}
        options={{
          title: translations.SETTINGS,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
