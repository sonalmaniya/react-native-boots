import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './AppRoutes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={({route, navigation, theme}) => ({
          headerShown: true,
          cardOverlayEnabled: true,
          headerBackTitleVisible: false,
        })}
        mode="screen">
        {Routes.map((route) => {
          return (
            <Stack.Screen
              name={route.name}
              component={route.screen}
              key={route.name}
              options={route.navigationOptions || {}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
