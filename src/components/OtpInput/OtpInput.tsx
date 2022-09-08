import { FC, useState, useCallback, useEffect } from 'react';
import SzIcons from '../Assets';
import { TextFieldIcons } from '../TextField/TextField.style';
import { OtpInputContainer, OtpInputForm, OtpInputText, OtpStatusText } from './OtpInput.style';
import { IOtpInputProps } from './OtpInput.type';

const OtpInput: FC<IOtpInputProps> = ({
  allowCopyPaste = false,
  autoFocus = false,
  bluredOnComplete = true,
  classes,
  deleteBackFocus = false,
  disabled = false,
  error = false,
  getOtpInputRefList,
  length = 6,
  otpPattern,
  onOtpChange,
  onOtpComplete,
  otp,
  placeholder,
  readOnly = false,
  statusText,
  success = false,
  ...props
}) => {
  const [otpValue, setOtpValue] = useState<string[]>([]);
  let inputRefList: (HTMLInputElement | null)[] = [];

  useEffect(() => {
    if (otp?.trim() !== '') {
      const otpDetails: string[] = otp?.split('') || [];
      setOtpValue(otpDetails);
    } else {
      setOtpValue(new Array(length).fill(''));
    }
  }, [otp]);

  const setOtpInput = useCallback((): string[] => {
    const otpInput = new Array(length);
    otpInput.fill('');
    return otpInput as string[];
  }, [otp, length]);

  const handleOtpChange = (index: number, value: string) => {
    if (otpPattern && otpPattern.test(value)) {
      value = value.replace(otpPattern, '').trim();
    }
    const otp: string[] = [...otpValue];
    if (value.length >= 2) {
      otp[index] = value.charAt(value.length - 1);
    } else {
      otp[index] = value;
    }
    setOtpValue(otp);

    if (onOtpChange) {
      onOtpChange(otp.join('').trim());
    }

    if (otp.join('').trim().length === length && onOtpComplete) {
      onOtpComplete(otp.join(''));
    }
  };

  const inputfocus = (event: any) => {
    if (event.code === 'Delete' || event.code === 'Backspace') {
      if (deleteBackFocus) {
        const next = event.target.tabIndex - 2;
        if (next > -1) {
          event.target.form.elements[next].focus();
        }
      }
    } else if (event.code === 'ArrowLeft') {
      const next = event.target.tabIndex - 2;
      if (next > -1) {
        event.target.form.elements[next].focus();
      }
    } else {
      const next = event.target.tabIndex;
      if (next < length) {
        event.target.form.elements[next].focus();
      }
      if (next === length && bluredOnComplete) {
        event.target.form.elements[next - 1].blur();
      }
    }
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (allowCopyPaste) {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text/plain').trim().slice(0, length).split('');
      if (pastedData) {
        setOtpValue(pastedData);
        const next = pastedData.length - 1;
        if (next > -1) {
          (e.target as HTMLFormElement).form.elements[next].focus();
        }
      }
    }
  };

  const fetchOtpInputRefList = useCallback((e: HTMLInputElement | null, index: number) => {
    const RefList = [...inputRefList];
    RefList[index] = e;
    inputRefList = RefList;
    getOtpInputRefList && getOtpInputRefList(inputRefList);
  }, []);

  return (
    <OtpInputContainer className={classes?.container}>
      <OtpInputForm className={classes?.formRoot}>
        {setOtpInput().map((_, index) => (
          <OtpInputText
            className={classes?.inputRoot}
            key={index}
            autoFocus={autoFocus && !disabled && !readOnly && index === 0}
            ref={(e) => getOtpInputRefList && fetchOtpInputRefList(e, index)}
            value={otpValue[index]}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyUp={inputfocus}
            tabIndex={index + 1}
            onPaste={handleOnPaste}
            success={success}
            error={error}
            disabled={disabled}
            readonly={readOnly}
            placeholder={placeholder?.[0] || ''}
            {...props}
          />
        ))}
      </OtpInputForm>
      {statusText && (
        <OtpStatusText
          className={classes?.statusText}
          success={success}
          error={error}
          type="body-sm"
        >
          {success && <TextFieldIcons src={SzIcons.success} />}
          {error && <TextFieldIcons src={SzIcons.error} />}
          {statusText}
        </OtpStatusText>
      )}
    </OtpInputContainer>
  );
};

export default OtpInput;
