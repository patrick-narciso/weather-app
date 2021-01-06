import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '~/root-navigator';

import Home from './Home';

const Stack = createStackNavigator<RootStackParamList>();

const NotAuthenticatedStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NotAuthenticatedStackNavigator;
