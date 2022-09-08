import { COLORS } from '../../Styles/constants/colors';
import { ISzThemeOptions } from '../ThemeProvider.type';

export const dark: ISzThemeOptions = {
  pallete: {
    action: {
      primary: COLORS.DARK.burgundy,
      secondary: COLORS.DARK.pink[100],
      tertiary: COLORS.DARK.aquaGreen[100],
    },
    surface: {
      primary: COLORS.DARK.black[100],
      secondary: COLORS.DARK.grey[100],
      tertiary: COLORS.DARK.grey[10],
      background: COLORS.DARK.black.pure,
    },
    typo: {
      primary: COLORS.DARK.grey[10],
      secondary: COLORS.DARK.grey[30],
      tertiary: COLORS.DARK.grey[50],
      surface: COLORS.DARK.white,
      disabled: COLORS.DARK.grey[60],
      action: {
        primary: COLORS.DARK.white,
        secondary: COLORS.DARK.pink[100],
        tertiary: COLORS.DARK.aquaGreen[10],
      },
    },
    neutral: {
      one: COLORS.DARK.blue[10],
      two: COLORS.DARK.aquaGreen[0],
      three: COLORS.DARK.blue[20],
      four: COLORS.DARK.puprle[10],
    },
    icon: {
      primary: COLORS.DARK.burgundy,
      secondary: COLORS.DARK.pink[100],
      tertiary: COLORS.DARK.aquaGreen[10],
      surface: COLORS.DARK.white,
      disabled: COLORS.DARK.grey[60],
      negative: COLORS.DARK.red[100],
      positive: COLORS.DARK.green[100],
      pending: COLORS.DARK.yellow[100],
      warning: COLORS.DARK.orange[100],
      default: COLORS.DARK.white,
    },
    stroke: {
      default: COLORS.DARK.grey[80],
      selected: COLORS.DARK.pink[60],
      hover: COLORS.DARK.pink[40],
      disabled: COLORS.DARK.grey[60],
      active: COLORS.DARK.grey[10],
    },
    field_interaction: {
      focus: COLORS.DARK.aquaGreen[100],
      active: COLORS.DARK.aquaGreen[40],
      default: COLORS.DARK.aquaGreen[40],
      hover: COLORS.DARK.aquaGreen[20],
      background: COLORS.DARK.aquaGreen[10],
    },
    support: {
      negative: COLORS.DARK.red[100],
      positive: COLORS.DARK.green[100],
      pending: COLORS.DARK.yellow[100],
      warning: COLORS.DARK.orange[100],
      variable: COLORS.DARK.blue[100],
      default: COLORS.DARK.teal[100],
      neutral: {
        negative: COLORS.DARK.red[10],
        positive: COLORS.DARK.green[10],
        pending: COLORS.DARK.yellow[10],
        warning: COLORS.DARK.orange[10],
        default: COLORS.DARK.teal[10],
      },
    },
    state: {
      disabled: {
        surface: COLORS.DARK.grey[100],
        typo: COLORS.DARK.grey[60],
      },
      unselected: {
        visited: COLORS.DARK.grey.A100,
        hover: COLORS.DARK.grey.A80,
        normal: COLORS.DARK.grey[50],
      },
      hover: COLORS.DARK.pink.A20,
      pressed: COLORS.DARK.pink.A25,
      timed: COLORS.DARK.pink[40],
      visited: COLORS.DARK.puprle[100],
    },
    overlay: COLORS.DARK.black.pure,
  },
};
