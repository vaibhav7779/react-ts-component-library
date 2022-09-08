import { HTMLAttributes } from 'react';

export type TypographyVariant =
  | 'hxl'
  | 'hl'
  | 'hm'
  | 'hsm'
  | 'hxs'
  | 'body-l'
  | 'body-m'
  | 'body-sm'
  | 'display-l'
  | 'display-m'
  | 'display-sm'
  | 'subheading-l'
  | 'subheading'
  | 'info'
  | 'footNote'
  | 'textButton'
  | 'metaData';

export interface ITypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * If `true`, the bold style will be applied i.e. 700.
   * @default false
   */
  bold?: boolean;
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the `text` will indicate an error.
   * change color to red type
   * @default false
   */
  error?: boolean;
  /**
   * If `true`, the italic font style will be applied.
   * @default false
   */
  italic?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean;
  /**
   * Pass a ref to the element.
   */
  ref?: React.Ref<any>;
  /**
   * If `true`, the `text` will indicate an success.
   * change color to green type
   * @default false
   */
  success?: boolean;
  /**
   * Applies the theme typography styles.
   * @default 'body-l'
   */
  type?: TypographyVariant;
  /**
   * set text-transform property of typography
   * @default inherit
   */
  texTransform?: 'uppercase' | 'lowercase' | 'inherit' | 'capitalize';
}
