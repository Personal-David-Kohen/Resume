import { theme } from "src/styles/theme";
import { createStyles } from "src/styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      alignItems: "center",
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
    },
  });
