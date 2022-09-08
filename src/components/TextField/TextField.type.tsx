import { InputHTMLAttributes } from 'react';

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   */
  autoComplete?: string;
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<Record<TextFieldClassesKey, string>>;
  /**
   * If `true`, the `input` element will have clear icon.
   * @default false
   */
  clearIcon?: boolean;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string | number | readonly string[];
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
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The helperText of the `input` element.
   */
  helperText?: string;
  /**
   * If `true`, the `input` will hide the increment if type is number.
   * @default true
   */
  hideIncrementer?: boolean;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The label for the `input` element.
   */
  label?: string;
  /**
   * If `true` element is rendered.
   * @default false
   */
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the `input` is blurred.
   * Notice that the first argument (event) might be undefined.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClear?: () => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
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
   * Pass a ref to the element.
   */
  textFieldRef?: React.MutableRefObject<any>;
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
  type?: 'text' | 'password' | 'textArea' | 'number';
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: string | number | readonly string[];
  /**
   * Position of the `input` element.
   * @default 'vertical'
   */
  variant?: 'vertical' | 'horizontal';
}

export type TextFieldClassesKey =
  | 'container'
  | 'labelContainer'
  | 'label'
  | 'helperText'
  | 'rootContainer'
  | 'inputRootMain'
  | 'inputRoot'
  | 'statusText';
