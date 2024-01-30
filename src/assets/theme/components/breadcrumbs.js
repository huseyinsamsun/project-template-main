
// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

const { white } = colors;
const { size } = typography;

export default {
  styleOverrides: {
    li: {
      lineHeight: 0,
      color: white.main,
    },

    separator: {
      fontSize: size.sm,
    },
  },
};
