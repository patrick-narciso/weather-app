import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '~/screens/NotAuthenticated/Home';

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
