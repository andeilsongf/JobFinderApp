import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      100: "#18252F",
    },

    header: {
      100: "#0E2132",
    },
    green: {
      400: "#0BBE6C",
      300: "#00AD89",
      200: "#00B28D",
      100: "#F0FFF7",
    },
    gray: {
      600: "#666666",
      500: "#909090",
      400: "#9B9B9B",
      300: "#E5E5E5",
      200: "#949494",
      100: "#C4C4C4",
    },
    white: "#FFFFFF",
  },

  fontConfig: {
    Poppins: {
      400: "Poppins_400Regular",
      500: "Poppins_500Medium",
      600: "Poppins_600SemiBold",
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },

  fontSizes: {
    "2xs": 12,
    xs: 14,
    sm: 16,
    md: 15,
    lg: 18,
    xl: 20,
    "2xl": 22,
    "3xl": 28,
  },

  letterSpacings: {
    'xs': '0.055em',
    'sm': '0.03em',
    'md': '0.02em',
  },

  shadows: {
    'xs': '0px 6px 45px 10px'
  }

});
