import { FC } from 'react';

import { StyledButton } from './Button.style';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  width?: string;
}

export const Button: FC<IButton> = ({ variant, width, ...props }) => (
  <StyledButton variant={variant} width={width} {...props} />
);
