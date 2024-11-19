import { createTheme } from "@mui/material";
import "@fontsource/afacad";

export const Colors = {
  primary: "#481010",
  mainBG: "#6F4449",
  secondBG:"#FFEFE7",
  mainTitle:"#FFFFFF",
  mainText:"#6F4449",
  mainMenuText:"#FFFFFF",
  footerText:"#FFFFFF",
  buttonBG:"#FFEFE7",
  buttonText:"#6F4449",
  hamburgerMenu:"#FFFFFF",
};

const theme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: Colors.primary,
      },
    },
    typography: {
      allVariants: {
        color: Colors.mainText,
        fontFamily: "'Afacad', 'cursive'",
        fontSize: 20,
      },
      h1: {
        fontSize: 50,
        fontWeight: "700",
      },
      h2: {
        fontSize: 40,
        fontWeight: "600",
        color: Colors.mainTitle,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: 40,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontSize: 18,
            borderRadius: 20,
            backgroundColor: Colors.buttonBG,
            color: Colors.buttonText,
            "&:hover": {
              backgroundColor: Colors.buttonText,
              color: Colors.buttonBG,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: 18,
            borderBottom: 0,
            backgroundColor: Colors.buttonBG,
            borderRadius: 20,
            "&:hover": {
              backgroundColor: Colors.buttonBG,
              borderRadius: 20,
            },
          },
          input: {
            color: Colors.buttonText,
            backgroundColor: Colors.buttonBG,
            borderRadius: 20,
            "&:hover": {
              backgroundColor: Colors.buttonBG,
              borderRadius: 20,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: Colors.buttonBG,
          },
        },
      },
    },
  });

export default theme;
