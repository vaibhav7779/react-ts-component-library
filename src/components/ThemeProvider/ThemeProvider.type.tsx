import React, { ReactElement } from 'react';

export interface ISzThemeProviderProps {
  /**
   * child component to be wrapped with theme object
   */
  children: ReactElement;
  /**
   * theme object for light mode.
   */
  themeLight?: ISzThemeOptions;
  /**
   * theme object for dark mode.
   */
  themeDark?: ISzThemeOptions;
  /**
   * mode decides the theme object to be applied to child componnet wrapped.
   * @default 'light'
   */
  mode?: 'light' | 'dark';
}

export interface ISzThemeOptions {
  pallete?: {
    action?: Partial<Record<'primary' | 'secondary' | 'tertiary', React.CSSProperties['color']>>;
    surface?: Partial<
      Record<'primary' | 'secondary' | 'tertiary' | 'background', React.CSSProperties['color']>
    >;
    typo?: Partial<
      Record<
        'primary' | 'secondary' | 'tertiary' | 'surface' | 'disabled',
        React.CSSProperties['color']
      > & {
        action: Record<'primary' | 'secondary' | 'tertiary', React.CSSProperties['color']>;
      }
    >;
    neutral?: Partial<Record<'one' | 'two' | 'three' | 'four', React.CSSProperties['color']>>;
    icon?: Partial<
      Record<
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'surface'
        | 'disabled'
        | 'negative'
        | 'positive'
        | 'pending'
        | 'warning'
        | 'default',
        React.CSSProperties['color']
      >
    >;
    stroke?: Partial<
      Record<
        'default' | 'selected' | 'hover' | 'diabled' | 'active' | 'disabled',
        React.CSSProperties['color']
      >
    >;
    field_interaction?: Partial<
      Record<'default' | 'focus' | 'hover' | 'background' | 'active', React.CSSProperties['color']>
    >;
    support?: Partial<
      Record<
        'negative' | 'positive' | 'pending' | 'warning' | 'default' | 'variable',
        React.CSSProperties['color']
      > & {
        neutral: Record<
          'negative' | 'positive' | 'pending' | 'warning' | 'default',
          React.CSSProperties['color']
        >;
      }
    >;
    state?: Partial<
      Record<'pressed' | 'timed' | 'hover' | 'visited', React.CSSProperties['color']> & {
        disabled?: Record<'surface' | 'typo', React.CSSProperties['color']>;
      } & { unselected?: Record<'normal' | 'hover' | 'visited', React.CSSProperties['color']> }
    >;
    overlay?: React.CSSProperties['color'];
  };
}
