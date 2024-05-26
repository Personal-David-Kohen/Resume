import { theme } from "src/styles/theme";
import { createStyles } from "src/styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "100vw",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      alignItems: "center",
      overflowX: "hidden",
      backgroundColor: theme.palette.background.main,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "100%",
      maxWidth: "1200px",
      backgroundColor: theme.palette.paper.main,
    },
    gridContainer: {
      width: "90%",
      marginBottom: "20px",
    },
  });
