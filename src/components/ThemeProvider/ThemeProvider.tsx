import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark } from './Themes/DarkTheme';
import { light } from './Themes/LightTheme';

import { ISzThemeProviderProps } from './ThemeProvider.type';

import { MODE } from '../Styles/constants/mode';

const SzThemeProvider: FC<ISzThemeProviderProps> = ({
  children,
  mode = MODE.LIGHT,
  themeDark,
  themeLight,
}) => {
  return (
    <ThemeProvider theme={MODE.LIGHT === mode ? themeLight || light : themeDark || dark}>
      {children}
    </ThemeProvider>
  );
};

export default SzThemeProvider;
