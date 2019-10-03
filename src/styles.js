import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

export const useStyles = makeStyles(
  createStyles({
    root: {
      display: "flex"
    },

    form: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      paddingTop: "9%",
      paddingBottom: "1%"
    
    },

    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      justifyContent: "space-between"
    },
    


    bg: {
      minHeight: "100vh",
      width: "100%"
      
    },

    wide: {
      boxSizing: "border-box"
    },

    header: {
      justifyContent: "space-between"
      
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },

    formlist: {
      justifyContent: "center",
      paddingTop: "20%",
      paddingLeft: "16%",
      paddingRight: "16%"
    }



  })
);
