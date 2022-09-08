import { css } from 'styled-components';
import { TypographyVariant } from '../Typography/Typography.type';
import { FONTS, CHAR_SPACING, LINE_HEIGHT } from './constants/dimensions';

export const BaseFontStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  font-family: 'Lato';
  // src: url('https://use.typekit.net/kxs1gdz.css');
  // src: local('Lato'), url('../fonts/Lato/Lato-Regular.ttf') format('truetype');
`;

export const getFontsBasedOnType = (type?: TypographyVariant) => {
  switch (type) {
    case 'hxl':
      return css`
        font-size: ${FONTS.warm}px;
        line-height: ${FONTS.warm + LINE_HEIGHT.iceage}px;
      `;
    case 'hl':
      return css`
        font-size: ${FONTS.mild}px;
        line-height: ${FONTS.mild + LINE_HEIGHT.glacial}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
    case 'hm':
      return css`
        font-size: ${FONTS.cool}px;
        line-height: ${FONTS.cool + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
    case 'hsm':
      return css`
        font-size: ${FONTS.cold}px;
        line-height: ${FONTS.cold + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
    case 'hxs':
      return css`
        font-size: ${FONTS.bittercold}px;
        line-height: ${FONTS.bittercold + LINE_HEIGHT.quickFreeze}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
    case 'body-l':
      return css`
        font-size: ${FONTS.bittercold}px;
        line-height: ${FONTS.bittercold + LINE_HEIGHT.glacial}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
    case 'body-m':
      return css`
        font-size: ${FONTS.frigid}px;
        line-height: ${FONTS.frigid + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.hindukush}px;
      `;
    case 'body-sm':
      return css`
        font-size: ${FONTS.frostbite}px;
        line-height: ${FONTS.frostbite + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.alps}px;
      `;
    case 'display-l':
      return css`
        font-size: ${FONTS.torrid}px;
        line-height: ${FONTS.torrid + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.zero}px;
      `;
    case 'display-m':
      return css`
        font-size: ${FONTS.blazing}px;
        line-height: ${FONTS.blazing + LINE_HEIGHT.gelid}px;
        letter-spacing: ${CHAR_SPACING.zero}px;
      `;
    case 'display-sm':
      return css`
        font-size: ${FONTS.tropical}px;
        line-height: ${FONTS.tropical + LINE_HEIGHT.quickFreeze}px;
        letter-spacing: ${CHAR_SPACING.zero}px;
      `;
    case 'subheading-l':
      return css`
        font-size: ${FONTS.frigid}px;
        line-height: ${FONTS.frigid + LINE_HEIGHT.quickFreeze}px;
        letter-spacing: ${CHAR_SPACING.hindukush}px;
        text-transform: uppercase;
      `;
    case 'subheading':
      return css`
        font-size: ${FONTS.frostbite}px;
        line-height: ${FONTS.frostbite + LINE_HEIGHT.quickFreeze}px;
        letter-spacing: ${CHAR_SPACING.hindukush}px;
        text-transform: uppercase;
      `;
    case 'info':
      return css`
        font-size: ${FONTS.blizzard}px;
        line-height: ${FONTS.blizzard + LINE_HEIGHT.quickFreeze}px;
        letter-spacing: ${CHAR_SPACING.alps}px;
      `;
    case 'footNote':
      return css`
        font-size: ${FONTS.iceage}px;
        line-height: ${FONTS.iceage + LINE_HEIGHT.deepFreeze}px;
        letter-spacing: ${CHAR_SPACING.alps}px;
      `;
    case 'metaData':
      return css`
        font-size: ${FONTS.frostbite}px;
        line-height: ${FONTS.frostbite + LINE_HEIGHT.zero}px;
        letter-spacing: ${CHAR_SPACING.alps}px;
        text-transform: uppercase;
      `;
    case 'textButton':
      return css`
        font-size: ${FONTS.frostbite}px;
        line-height: ${FONTS.frostbite + LINE_HEIGHT.zero}px;
        letter-spacing: ${CHAR_SPACING.arctic}px;
        text-transform: uppercase;
      `;
    default:
      return css`
        font-size: ${FONTS.bittercold}px;
        line-height: ${FONTS.bittercold + LINE_HEIGHT.glacial}px;
        letter-spacing: ${CHAR_SPACING.himalayas}px;
      `;
  }
};
