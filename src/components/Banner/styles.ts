import styled from 'styled-components/native';

export const ImageBackground = styled.Image<{ screenWidth: number }>`
  width: ${({ screenWidth }) => screenWidth}px;
`;
