import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MentorInfo from './MentorInfo';
import Chat from './Chat';

const Stack = createNativeStackNavigator();

export default function MentorInfoAndChat() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Mentor" component={MentorInfo} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </>
  );
}