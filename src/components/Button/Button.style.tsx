import styled, { css } from 'styled-components';
import { BaseFontStyle, getFontsBasedOnType } from '../Styles/fonts.style';
import Typography from '../Typography';
import { IButtonProps } from './Button.type';

export const ButtonRoot = styled.button.attrs((props: IButtonProps) => ({
  ...props,
}))`
  ${({ fullWidth, size }) => {
    if (fullWidth) {
      return css`
        width: 100%;
        height: 48px;
        ${getFontsBasedOnType('body-m')};
      `;
    } else if (size === 'medium') {
      return css`
        width: 196px;
        height: 48px;
        ${getFontsBasedOnType('body-m')};
      `;
    } else if (size === 'large') {
      return css`
        width: 196px;
        height: 54px;
        ${getFontsBasedOnType('body-l')};
      `;
    } else if (size === 'small') {
      return css`
        width: 117px;
        height: 32px;
        ${getFontsBasedOnType('body-sm')};
      `;
    }
  }}

  ${({ variant, fullWidth }) => {
    if (variant === 'flushed' && !fullWidth) {
      return css`
        width: 320px;
      `;
    }
    if (variant === 'flushed') {
      return css`
        border-radius: none;
      `;
    }
  }}}

  ${BaseFontStyle};
  padding: 16px;
  border-radius: ${({ variant }) => (variant === 'flushed' ? 'none' : '8px')};
  text-align: center;
  background: ${({ theme, btnBg, disabled }) =>
    btnBg === 'primary'
      ? disabled
        ? theme?.pallete?.state?.unselected?.normal
        : theme?.pallete?.action?.primary
      : disabled
      ? theme?.pallete?.surface?.secondary
      : theme?.pallete?.surface?.secondary};
  color: ${({ theme, btnBg, disabled }) =>
    btnBg === 'primary'
      ? theme?.pallete?.typo?.surface
      : disabled
      ? theme?.pallete?.typo?.disabled
      : theme?.pallete?.typo?.action?.primary};
  overflow: hidden;
  outline: none;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border:  ${({ theme, btnBg }) =>
    btnBg === 'primary' ? 'none' : `1px solid ${theme?.pallete?.stroke?.default}`};
  line-height: 0 !important;
  
  &:focus {
    background: ${({ theme, btnBg, disabled }) =>
      !disabled && btnBg === 'primary'
        ? theme?.pallete?.action?.secondary
        : !disabled && btnBg === 'secondary'
        ? theme?.pallete?.stroke?.default
        : btnBg === 'primary'
        ? theme?.pallete?.action?.primary
        : theme?.pallete?.surface?.secondary} 
  }
  box-sizing: border-box;
`;

export const TextButtonRoot = styled(Typography).attrs((props) => ({ ...props }))`
  color: ${({ theme }) => theme?.pallete?.action?.secondary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
