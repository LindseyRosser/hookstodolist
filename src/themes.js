import { createMuiTheme } from "@material-ui/core/styles";


export const themeNight = createMuiTheme({
  palette: {
    primary: {
      main: "#564E58"
    },

    secondary: {
      main: "#904E55"
    },

    type: "dark"
  }
});

export const themeDay = createMuiTheme(
    {
        palette: {
            primary: {
              main: "#F2EFE9"
            },
        
            secondary: {
              main: "#EF8275"
            },
        
            type: "light"
          }
    }
);

