import React from 'react';

import { Container } from './styles';

import { Card } from '~/components';

const Signin: React.FC = () => {
  return (
    <Container>
      <Card
        iconPath="https://openweathermap.org/img/w/02d.png"
        title="Mon, 21"
        highTemp={30}
        lowTemp={10}
      />
    </Container>
  );
};

export default Signin;
