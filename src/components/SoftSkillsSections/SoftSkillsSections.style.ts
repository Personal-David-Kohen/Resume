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
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    itemContainer: {
      marginTop: "1rem",
      display: "flex",
      borderRadius: "5px",
      padding: "0.5rem",
      marginRight: "0.5rem",
      backgroundColor: theme.palette.button.main,
    },
    item: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: theme.palette.paper.main,
    },
  });
