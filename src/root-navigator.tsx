import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NotAuthenticatedStackNavigator from './screens/NotAuthenticated/stack-navigator';

export type RootStackParamList = {
  Home: undefined;
};

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <NotAuthenticatedStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
