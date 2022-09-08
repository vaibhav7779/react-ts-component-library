import 'styled-components';
import { ISzThemeOptions } from './ThemeProvider/ThemeProvider.type';

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ISzThemeOptions {}
}
