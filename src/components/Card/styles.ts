import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 95px;
  elevation: 5;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const Temps = styled.View`
  flex-direction: row;
`;

export const Temp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.lightText};
  margin-right: 6px;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;
