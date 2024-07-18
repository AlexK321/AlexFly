import styled from 'styled-components';

export const StylesLine = styled.div<{ isLight: boolean; width?: string }>`
  width: ${props => `${props.width}!important`};
  height: 2px;
  background: ${props => (props.isLight ? 'white' : 'black')};
  margin: 0 auto;
`;
