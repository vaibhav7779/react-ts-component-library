import { FC, useEffect, useRef, useState } from 'react';
import {
  TextFieldContainer,
  TextFieldLabelContainer,
  TextFieldLabel,
  TextFieldHelperText,
  TextFieldRootContainer,
  TextFieldRootMain,
  TextFieldRoot,
  TextFieldStatusText,
  TextFieldIcons,
  TextFieldPasswordIcons,
  TextFieldCancelIcons,
} from './TextField.style';
import { ITextFieldProps } from './TextField.type';

import SzIcons from '../Assets';

const TextField: FC<ITextFieldProps> = ({
  autoFocus = false,
  classes,
  clearIcon = false,
  disabled = false,
  error = false,
  fullWidth = false,
  helperText = 'Label support text',
  hideIncrementer = true,
  label = 'Label text',
  onFocus,
  onBlur,
  onClear,
  placeholder = 'Placeholder text',
  readOnly = false,
  textFieldRef,
  success = false,
  statusText,
  type = 'text',
  variant = 'vertical',
  ...otherInputprops
}) => {
  const ownerState = {
    disabled,
    error,
    fullWidth,
    hideIncrementer,
    helperText,
    label,
    placeholder,
    readOnly,
    success,
    statusText,
    variant,
    ...otherInputprops,
  };

  const inputRef = useRef<any>('');
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    autoFocus && inputRef?.current?.focus();
    autoFocus && setIsActive(true);
  }, []);

  const handlePasswordIcon = () => () => {
    !disabled && !readOnly && setShowPassword(!showPassword);
  };

  const handleClearIcon = () => () => {
    if (!disabled && !readOnly) {
      if (!textFieldRef) {
        inputRef.current.value = '';
        inputRef?.current?.focus();
      } else {
        textFieldRef.current.value = '';
        textFieldRef?.current?.focus();
      }
      onClear && onClear();
    }
  };

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    setIsActive(true);
    onFocus && onFocus(e);
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    setIsActive(false);
    onBlur && onBlur(e);
  };

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }

    return type;
  };

  return (
    <>
      <TextFieldContainer variant={variant} className={classes?.container}>
        <TextFieldLabelContainer className={classes?.labelContainer}>
          <TextFieldLabel
            className={classes?.label}
            success={success}
            error={error}
            disabled={disabled}
            noWrap
            type="body-m"
          >
            {label}
            <TextFieldIcons src={SzIcons.tooltip} />
          </TextFieldLabel>
          {helperText && (
            <TextFieldHelperText className={classes?.helperText} noWrap type="body-sm" align="left">
              {helperText}
            </TextFieldHelperText>
          )}
        </TextFieldLabelContainer>
        <TextFieldRootContainer className={classes?.rootContainer}>
          <TextFieldRootMain className={classes?.inputRootMain} isActive={isActive} {...ownerState}>
            <TextFieldRoot
              className={classes?.inputRoot}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              type={getInputType()}
              ref={textFieldRef || inputRef}
              {...ownerState}
            />
            {type === 'password' && (
              <TextFieldPasswordIcons
                src={showPassword ? SzIcons.showPassword : SzIcons.hidePassword}
                onClick={handlePasswordIcon()}
                isActive={!disabled && !readOnly}
              />
            )}
            {clearIcon &&
              (textFieldRef ? textFieldRef?.current?.value : inputRef?.current?.value) && (
                <TextFieldCancelIcons
                  src={SzIcons.clear}
                  onClick={handleClearIcon()}
                  isActive={!disabled && !readOnly}
                />
              )}
          </TextFieldRootMain>
          {statusText && (
            <TextFieldStatusText
              className={classes?.statusText}
              success={success}
              error={error}
              type="body-sm"
            >
              {success && <TextFieldIcons src={SzIcons.success} />}
              {error && <TextFieldIcons src={SzIcons.error} />}
              {statusText}
            </TextFieldStatusText>
          )}
        </TextFieldRootContainer>
      </TextFieldContainer>
    </>
  );
};

export default TextField;
