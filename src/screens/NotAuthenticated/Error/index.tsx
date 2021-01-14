import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, DevSettings } from 'react-native';

import GeolocationIcon from '~/assets/images/svg/geolocation.svg';
import { RootStackParamList } from '~/root-navigator';

import { ErrorScreen } from './styles';

interface ErrorProps {
  route: RouteProp<RootStackParamList, 'Error'>;
}

const Error: React.FC<ErrorProps> = ({ route }) => {
  return (
    <ErrorScreen.Container>
      <GeolocationIcon width={200} height={200} />
      <ErrorScreen.Text>
        {route.params.message ||
          'Verifique sua conexão com a internet e tente novamente'}
      </ErrorScreen.Text>
      <Button title="Tentar novamente" onPress={() => DevSettings.reload()} />
    </ErrorScreen.Container>
  );
};

export default Error;
