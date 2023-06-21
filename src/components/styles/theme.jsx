import { createTheme } from "@mui/material";

export const Colors = {
  white: "#fff",
  black: "#000",
  green: "#005a6a",
  secondary: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,90,106,1) 100%)`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.green,
    },
    secondary: {
      main: Colors.white,
    },
  },

});
export default theme;
