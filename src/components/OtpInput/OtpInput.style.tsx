import styled, { css } from 'styled-components';
import { IOtpInputProps } from './OtpInput.type';
import { getFontsBasedOnType, BaseFontStyle } from '../Styles/fonts.style';
import Typography from '../Typography';

export const OtpInputContainer = styled.div.attrs(() => {})`
  display: flex;
  flex-direction: column;
`;

export const OtpInputForm = styled.form.attrs(() => {})`
  display: flex;
  column-gap: 8px;
  margin: 8px 0px;

  &:focus {
    border: ${({ theme }) => `1px solid ${theme?.pallete?.stroke?.active}`};
  }
`;

export const OtpInputText = styled.input.attrs((props: IOtpInputProps) => ({
  readonly: props.readOnly,
  ...props,
}))`
  display: flex;
  width: ${({ variant }) => (variant === 'medium' ? '56px' : '40px')};
  height: ${({ variant }) => (variant === 'medium' ? '56px' : '40px')};
  background: ${({ theme }) => theme?.pallete?.surface?.primary};
  border: 1px solid ${({ theme }) => theme?.pallete?.stroke?.default};
  border-radius: 4px;
  padding: ${({ variant }) => (variant === 'medium' ? '6px 16px' : '6px 8px')};
  outline: none;
  box-sizing: border-box;
  text-align: center;

  ${BaseFontStyle}
  ${getFontsBasedOnType('body-m')};

  color: ${({ theme, disabled }) =>
    disabled ? theme?.pallete?.state?.unselected?.normal : theme?.pallete?.typo?.primary};

  &:focus {
    outline: none;
    ${({ success, error, disabled, readOnly }) => {
      if (!success && !error && !disabled && !readOnly) {
        return css`
          border: ${({ theme }) => `1px solid ${theme?.pallete?.stroke?.active}`};
        `;
      }
    }}
  }

  ${({ success, error, disabled, readOnly }) => {
    if (success) {
      return css`
        border: ${({ theme }) => `1px solid ${theme?.pallete?.support?.positive}`};
      `;
    }

    if (error) {
      return css`
        border: ${({ theme }) => `1px solid ${theme?.pallete?.support?.negative}`};
      `;
    }

    if (disabled || readOnly) {
      return css`
        border: ${({ theme }) => `1px solid ${theme?.pallete?.stroke?.disabled}`};
        background: ${({ theme }) => theme?.pallete?.state?.disabled?.surface};
        cursor: not-allowed;
      `;
    }
  }};

  &::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme, readOnly, disabled }) =>
      disabled || readOnly ? theme?.pallete?.typo?.disabled : theme?.pallete?.typo?.tertiary};
  }

  &:-ms-input-placeholder {
    /* Internet Explorer */
    color: ${({ theme, readOnly, disabled }) =>
      disabled || readOnly ? theme?.pallete?.typo?.disabled : theme?.pallete?.typo?.tertiary};
  }

  &::placeholder {
    color: ${({ theme, readOnly, disabled }) =>
      disabled || readOnly ? theme?.pallete?.typo?.disabled : theme?.pallete?.typo?.tertiary};
  }
`;

export const OtpStatusText = styled(Typography).attrs((props) => ({
  ...props,
}))`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;
