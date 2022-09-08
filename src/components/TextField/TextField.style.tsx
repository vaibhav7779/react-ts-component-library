import styled, { css } from 'styled-components';
import { getFontsBasedOnType, BaseFontStyle } from '../Styles/fonts.style';
import Typography from '../Typography';
import { ITextFieldProps } from './TextField.type';

export const TextFieldContainer = styled.div.attrs(() => {})`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'vertical' ? 'column' : 'row')};
  justify-content: 'center';
  align-items: 'center';
  column-gap: ${({ variant }) => (variant === 'vertical' ? 'inherit' : '85px')};
`;

export const TextFieldLabelContainer = styled.div.attrs(() => {})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextFieldRootContainer = styled.div.attrs(() => {})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextFieldLabel = styled(Typography).attrs((props) => ({
  ...props,
}))`
  color: ${({ theme }) => theme?.pallete?.typo?.primary};
  display: flex;
  column-gap: 4px;
  align-items: center;
  ${({ success, error, disabled }) => {
    if (success) {
      return css`
        color: ${({ theme }) => `${theme?.pallete?.support?.positive}`};
      `;
    }

    if (error) {
      return css`
        color: ${({ theme }) => `${theme?.pallete?.support?.negative}`};
      `;
    }

    if (disabled) {
      return css`
        color: ${({ theme }) => `${theme?.pallete?.typo?.disabled}`};
      `;
    }
  }};
`;

export const TextFieldHelperText = styled(Typography).attrs((props) => ({
  ...props,
}))`
  color: ${({ theme }) => theme?.pallete?.typo?.secondary};
`;

export const TextFieldRootMain = styled.div.attrs(() => {})`
  width: ${({ variant, fullWidth }) =>
    fullWidth ? '100%' : variant === 'vertical' ? '288px' : '140px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme?.pallete?.surface?.primary};
  border-radius: 4px;
  border: ${({ theme, isActive }) =>
    `1px solid ${isActive ? theme?.pallete?.stroke?.active : theme?.pallete?.stroke?.default}`};
  margin: 8px 0px;
  padding: 8px;
  box-sizing: border-box;
  height: 44px;

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
`;

export const TextFieldRoot = styled.input.attrs((props: ITextFieldProps) => ({
  readonly: props.readOnly,
  ...props,
}))`
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  ${BaseFontStyle}
  ${getFontsBasedOnType('body-m')};
  background: ${({ theme }) => theme?.pallete?.surface?.primary};
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme?.pallete?.state?.unselected?.normal : theme?.pallete?.typo?.primary};
  border: none;
  // margin-right: ${({ type }) => (type === 'password' ? '8px' : '0px')};

  &:focus {
    outline: none;
  }

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

  ${({ disabled, readOnly }) => {
    if (disabled || readOnly) {
      return css`
        background: ${({ theme }) => theme?.pallete?.state?.disabled?.surface};
        cursor: not-allwed;
      `;
    }
  }};
`;

export const TextFieldStatusText = styled(Typography).attrs((props) => ({
  ...props,
}))`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const TextFieldIcons = styled.img.attrs((props) => ({
  ...props,
}))`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const TextFieldPasswordIcons = styled.img.attrs((props: any) => ({
  ...props,
}))`
  width: 16px;
  height: 16px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  margin-left: 4px;
}
`;

export const TextFieldCancelIcons = styled.img.attrs((props: any) => ({
  ...props,
}))`
  width: 12px;
  height: 12px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  margin-left: 4px;
}
`;
