import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import MenteeLogin from './src/screens/mentee/MenteeLogin';
import MentorLogin from './src/screens/mentor/MentorLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MentorNav from './src/screens/MentorNav';
import MenteeNav from './src/screens/MenteeNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="MenteeLogin" component={MenteeLogin} />
        <Stack.Screen options={{ headerShown: false }} name="MentorLogin" component={MentorLogin} />
        <Stack.Screen options={{ headerShown: false }} name="MentorNav" component={MentorNav} />
        <Stack.Screen options={{ headerShown: false }} name="MenteeNav" component={MenteeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
