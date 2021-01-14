import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkUtils from '~/utils/network-utils';
import { RootStackParamList } from '~/root-navigator';

import Home from './Home';
import Error from './Error';

const Stack = createStackNavigator<RootStackParamList>();

const NotAuthenticatedStackNavigator: React.FC = () => {
  const [initialRoute, setInitialRoute] = useState<'Home' | 'Error'>('Home');

  useEffect(() => {
    (async function () {
      const isConnected = await NetworkUtils.isNetworkAvailable();
      setInitialRoute(isConnected ? 'Home' : 'Error');
    })();
  }, []);

  return (
    <Stack.Navigator initialRouteName={initialRoute} headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Error" component={Error} />
    </Stack.Navigator>
  );
};

export default NotAuthenticatedStackNavigator;
