import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: string; width?: string }>`
  width: ${props => `${props.width}`};
  padding: 10px 20px;
  background-color: ${props => (props.variant === 'primary' ? '#70dbad' : '#f7a6bd')};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
