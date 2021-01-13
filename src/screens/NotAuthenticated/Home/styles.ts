import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Panel = {
  Container: styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 280px;
    background-color: #ffffff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  `,
  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  `,
  HeaderText: styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
  `,
  Geolocation: styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.primary};
  `,
  Main: styled.View`
    padding: 20px;
  `,
  Row: styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Card: styled.View<{ flexDirection?: string }>`
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'}
    align-items: ${({ flexDirection }) =>
      flexDirection ? 'flex-start' : 'center'};
    justify-content: ${({ flexDirection }) =>
      flexDirection ? 'flex-end' : 'center'}
    flex-basis: 30%;
    margin-bottom: 40px;
  `,
  CartTitle: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 19px;
    margin-top: 12px;
    margin-bottom: 4px;
  `,
  CardSubtitle: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 8px;
    line-height: 10px;
  `,
  WeatherIcon: styled.Image`
    width: 50px;
    height: 50px;
  `,
  WeatherText: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  `,
  Temperature: styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: #000000;
    font-size: 64px;
  `,
  Measure: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: #666666;
    font-size: 24px;
    margin-top: 15px;
  `,
  CurrentTemp: styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    color: #666666;
    font-size: 16px;
    line-height: 19px;
    margin-top: 12px;
  `
};
