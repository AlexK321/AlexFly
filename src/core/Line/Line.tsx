import { FC } from 'react';

import { StylesLine } from './Line.style';

interface ITypography extends React.HTMLAttributes<HTMLDivElement> {
  isLight?: boolean;
  width?: string;
}

export const Line: FC<ITypography> = ({ isLight = false, width = '80%', ...props }) => (
  <StylesLine isLight={isLight} width={width} {...props} />
);
