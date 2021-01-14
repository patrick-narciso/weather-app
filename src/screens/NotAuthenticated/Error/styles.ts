import styled from 'styled-components/native';

export const ErrorScreen = {
  Container: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 20px;
    text-align: center;
    margin: 20px;
  `
};
