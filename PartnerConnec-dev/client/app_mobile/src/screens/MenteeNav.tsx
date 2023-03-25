import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMentee from './mentee/HomeMentee';
import MenteeActivities from './mentee/MenteeActivities';
import MenteeAccount from './mentee/MenteeAccount';

const Tab = createBottomTabNavigator();

const MenteeNav = () => {
  const screenOptionStyle = {
    tabBarStyle: [{ paddingBottom: 18, }]
  };
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        options={{headerShown: false, tabBarIcon: () => null}}
        name="Home"
        component={HomeMentee}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarIcon: () => null}}
        name="Activities"
        component={MenteeActivities}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarIcon: () => null}}
        name="Account"
        component={MenteeAccount}
      />
    </Tab.Navigator>
  );
};

export default MenteeNav