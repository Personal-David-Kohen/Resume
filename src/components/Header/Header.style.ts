import { theme } from "src/styles/theme";
import { createStyles } from "src/styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "90%",
      marginTop: "20px",
      minHeight: "100px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 400,
      color: theme.palette.typography.title,
    },
    subtitle: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: theme.palette.typography.subtitle,
    },
  });
