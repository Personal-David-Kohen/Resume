import { theme } from "src/styles/theme";
import { createStyles } from "src/styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      minHeight: "5px",
      marginTop: "20px",
      justifyContent: "space-around",
      borderTop: `2px solid ${theme.palette.border.main}`,
      borderBottom: `2px solid ${theme.palette.border.main}`,
    },
    link: {
      fontSize: "0.7rem",
      fontWeight: 500,
      textDecoration: "none",
      font: theme.typography.font,
      color: theme.palette.typography.title,
    },
    section: {
      width: "100%",
      marginTop: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    icon: {
      margin: "0 10px",
      fontSize: "1.5rem",
      color: theme.palette.icon.main,
    },
  });
