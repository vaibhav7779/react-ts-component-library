import styled, { css } from 'styled-components';
import { getFontsBasedOnType, BaseFontStyle } from '../Styles/fonts.style';
import { ITypographyProps } from './Typography.type';

export const TypographyRoot = styled.span.attrs((props: ITypographyProps) => ({
  ...props,
}))`
  ${BaseFontStyle}

  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-align: ${({ align }) => align};
  text-transform: ${({ texTransform }) => `${texTransform}`};

  // color: ${({ theme }) => theme?.pallete?.neutral?.one};

  ${({ noWrap }) => {
    if (noWrap) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    }
  }};

  ${({ type }: ITypographyProps) => getFontsBasedOnType(type)};

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
