import { COLORS } from '../../Styles/constants/colors';
import { ISzThemeOptions } from '../ThemeProvider.type';

export const light: ISzThemeOptions = {
  pallete: {
    action: {
      primary: COLORS.LIGHT.burgundy,
      secondary: COLORS.LIGHT.pink[100],
      tertiary: COLORS.LIGHT.aquaGreen[100],
    },
    surface: {
      primary: COLORS.LIGHT.white,
      secondary: COLORS.LIGHT.grey[10],
      tertiary: COLORS.LIGHT.grey[100],
      background: COLORS.LIGHT.white,
    },
    typo: {
      primary: COLORS.LIGHT.black[100],
      secondary: COLORS.LIGHT.grey[80],
      tertiary: COLORS.LIGHT.grey[60],
      surface: COLORS.LIGHT.white,
      disabled: COLORS.LIGHT.grey[50],
      action: {
        primary: COLORS.LIGHT.burgundy,
        secondary: COLORS.LIGHT.pink[100],
        tertiary: COLORS.LIGHT.aquaGreen[100],
      },
    },
    neutral: {
      one: COLORS.LIGHT.blue[10],
      two: COLORS.LIGHT.aquaGreen[0],
      three: COLORS.LIGHT.blue[20],
      four: COLORS.LIGHT.puprle[10],
    },
    icon: {
      primary: COLORS.LIGHT.burgundy,
      secondary: COLORS.LIGHT.pink[100],
      tertiary: COLORS.LIGHT.aquaGreen[100],
      surface: COLORS.LIGHT.white,
      disabled: COLORS.LIGHT.grey[50],
      negative: COLORS.LIGHT.red[100],
      positive: COLORS.LIGHT.green[100],
      pending: COLORS.LIGHT.yellow[100],
      warning: COLORS.LIGHT.orange[100],
      default: COLORS.LIGHT.grey[100],
    },
    stroke: {
      default: COLORS.LIGHT.grey[30],
      selected: COLORS.LIGHT.pink[80],
      hover: COLORS.LIGHT.pink[40],
      disabled: COLORS.LIGHT.grey[50],
      active: COLORS.LIGHT.grey[100],
    },
    field_interaction: {
      focus: COLORS.LIGHT.aquaGreen[100],
      active: COLORS.LIGHT.aquaGreen[60],
      default: COLORS.LIGHT.aquaGreen[40],
      hover: COLORS.LIGHT.aquaGreen[20],
      background: COLORS.LIGHT.aquaGreen[10],
    },
    support: {
      negative: COLORS.LIGHT.red[100],
      positive: COLORS.LIGHT.green[100],
      pending: COLORS.LIGHT.yellow[100],
      warning: COLORS.LIGHT.orange[100],
      variable: COLORS.LIGHT.blue[100],
      default: COLORS.LIGHT.teal[100],
      neutral: {
        negative: COLORS.LIGHT.red[10],
        positive: COLORS.LIGHT.green[10],
        pending: COLORS.LIGHT.yellow[10],
        warning: COLORS.LIGHT.orange[10],
        default: COLORS.LIGHT.teal[10],
      },
    },
    state: {
      disabled: {
        surface: COLORS.LIGHT.grey[20],
        typo: COLORS.LIGHT.grey[50],
      },
      unselected: {
        visited: COLORS.LIGHT.grey.A100,
        hover: COLORS.LIGHT.grey.A80,
        normal: COLORS.LIGHT.grey[50],
      },
      hover: COLORS.LIGHT.pink.A80,
      pressed: COLORS.LIGHT.pink.A100,
      timed: COLORS.LIGHT.pink[40],
      visited: COLORS.LIGHT.puprle[100],
    },
    overlay: COLORS.LIGHT.black.pure,
  },
};
