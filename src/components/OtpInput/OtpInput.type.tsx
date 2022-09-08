import { InputHTMLAttributes } from 'react';

export interface IOtpInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> {
  /**
   * If `true`, the otp will be copy pasted
   * @default false
   */
  allowCopyPaste?: boolean;
  /**
   * If `true`, the `first input of otp` element is focused during the first mount.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If `true`, last input element will loose focus once it complete the otp
   * and move to previous input
   * @default true
   */
  bluredOnComplete?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<Record<OtpInputClassesKey, string>>;
  /**
   * If `true`, on delete or backspace it will clear the current input
   * and move to previous input
   * @default false
   */
  deleteBackFocus?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   * change border color to red type
   * @default false
   */
  error?: boolean;
  /**
   * to get all the ref of the otp input elements on mount
   */
  getOtpInputRefList?: (refs: (HTMLInputElement | null)[]) => void;
  /**
   * Callback fired when the `input` is blurred.
   * Notice that the first argument (event) might be undefined.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  /**
   * Callback fired when the `otp` is changed.
   */
  onOtpChange?: (otp: string) => void;
  /**
   * Callback fired when the `otp` is completed.
   */
  onOtpComplete?: (otpValue?: string) => void;
  /**
   * The default value. Use when the component is not controlled.
   */
  otp?: string;
  /**
   * The pattern prop specifies a regular expression that the element's value is checked against.
   */
  otpPattern?: RegExp;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * It prevents the user from changing the value of the field
   * @default false
   */
  readOnly?: boolean;
  /**
   * On success or error if any status text to be shown below component with status icon.
   */
  statusText?: string;
  /**
   * If `true`, the `input` will indicate an success.
   * change border color to green type
   * @default false
   */
  success?: boolean;
  /**
   * Type of the `input` element.
   * @default 'text'
   */
  type?: 'text' | 'password';
  /**
   * size of the `input` element.
   * @default 'medium'
   */
  variant?: 'medium' | 'small';
  /** it decides the number of input field in otp */
  length?: number;
}

export type OtpInputClassesKey = 'container' | 'formRoot' | 'inputRoot' | 'statusText';
