import 'react-native-gesture-handler';
import 'dayjs/locale/pt-br';
import React from 'react';
import dayjs from 'dayjs';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigator from './root-navigator';
import store from './store';
import theme from './commons/styled-components/theme';

dayjs.locale('pt-br');

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={theme.statusBar?.content}
          backgroundColor={theme.statusBar?.background}
        />
        <Navigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
