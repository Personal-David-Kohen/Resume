import { createStyles } from "src/styles/create-styles";
import { theme } from "src/styles/theme";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100%",
      marginTop: "20px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    itemsContainer: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    award: {
      fontSize: "1rem",
      fontWeight: 400,
      color: theme.palette.typography.subtitle,
    },
    itemContainer: {
      minWidth: "150px",
      display: "flex",
      flexDirection: "column",
      padding: "0.5rem",
      marginRight: "1rem",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    date: {
      fontSize: "0.8rem",
      fontWeight: 400,
      color: theme.palette.typography.paragraph,
    },
    description: {
      marginTop: "0.5rem",
      fontSize: "0.8rem",
      fontWeight: 400,
      color: theme.palette.typography.paragraph,
    },
  });
