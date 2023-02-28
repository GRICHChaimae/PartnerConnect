import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './src/screens/mainScreens/FirstScreen';
import PaUpdatePassword from './src/screens/parrain/PaUpdatePassword';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="FirstScreen"
        component={FirstScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="PaUpdatePassword"
        component={PaUpdatePassword}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
