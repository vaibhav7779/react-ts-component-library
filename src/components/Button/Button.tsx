import { FC } from 'react';
import { ButtonRoot, TextButtonRoot } from './Button.style';
import { IButtonProps } from './Button.type';

const Button: FC<IButtonProps> = ({
  children,
  classes,
  btnBg = 'primary',
  disabled = false,
  disableRipple = true,
  endIcon,
  fullWidth = false,
  size = 'medium',
  startIcon,
  touchRippleRef,
  variant = 'default',
  ...props
}) => {
  const ownerState = {
    btnBg,
    disabled,
    disableRipple,
    endIcon,
    fullWidth,
    size,
    startIcon,
    touchRippleRef,
    variant,
    ...props,
  };

  return (
    <>
      {variant === 'textButton' ? (
        <TextButtonRoot
          disabled={disabled}
          type="textButton"
          className={classes?.textBtnRoot}
          bold
          {...props}
        >
          {children}
        </TextButtonRoot>
      ) : (
        <ButtonRoot className={classes?.btnRoot} {...ownerState}>
          {children}
        </ButtonRoot>
      )}
    </>
  );
};

export default Button;
