import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: string; width?: string }>`
  width: ${props => `${props.width}`};
  padding: 10px 20px;
  background: ${props => (props.variant ? '#70dbad' : '#70dbad')};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  margin: 10px;
  font-weight: bold;
`;
