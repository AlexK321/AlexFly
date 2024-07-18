import { FC } from 'react';

interface ITypography extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h6' | 'text';
  children: string | React.ReactNode;
}

export const Typography: FC<ITypography> = ({ variant, children, ...props }) => (
  <>
    {variant === 'h1' && <h1>{children}</h1>}
    {variant === 'h2' && <h2>{children}</h2>}
    {variant === 'h3' && <h3>{children}</h3>}
    {variant === 'h6' && <h6>{children}</h6>}
    {variant === 'text' && <p>{children}</p>}
  </>
);
