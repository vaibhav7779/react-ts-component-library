import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * btnBg decides the background color of button
   * @default 'primary'
   */
  btnBg?: 'primary' | 'secondary';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<Record<ButtonClassesKey, string>>;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ElementType | string;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Element placed after the children.
   */
  startIcon?: React.ElementType | string;
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef?: React.Ref<any>;
  /**
   * variant decides the default attributes of button
   * @default 'default'
   */
  variant?: 'default' | 'flushed' | 'textButton';
}

export type ButtonClassesKey = 'btnRoot' | 'textBtnRoot';
