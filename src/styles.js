import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  createStyles({
    form: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      paddingTop: "3%",
      paddingBottom: "1%"
    },
    
    bg: {
      minHeight: "100vh"
    },

    wide: {
      boxSizing: "border-box"
    },

    header: {
      justifyContent: "space-between"
    }
  })
);
