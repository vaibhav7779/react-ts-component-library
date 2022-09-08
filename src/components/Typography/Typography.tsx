import { FC } from 'react';
import { TypographyRoot } from './Typography.style';
import { ITypographyProps } from './Typography.type';

const Typography: FC<ITypographyProps> = ({
  align = 'inherit',
  bold = false,
  children,
  className,
  component = 'span',
  error = false,
  italic = false,
  noWrap = false,
  paragraph = false,
  type = 'body-l',
  success = false,
  texTransform = 'inherit',
  ...props
}) => {
  const Component = component || (paragraph ? 'p' : 'span');

  const ownerState = {
    align,
    bold,
    className,
    error,
    italic,
    paragraph,
    noWrap,
    type,
    success,
    texTransform,
    ...props,
  };

  return (
    <>
      <TypographyRoot as={Component} {...ownerState}>
        {children}
      </TypographyRoot>
    </>
  );
};

export default Typography;
