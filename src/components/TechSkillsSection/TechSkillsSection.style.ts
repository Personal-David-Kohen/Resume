import { createStyles } from "src/styles/create-styles";

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
    categoryContainer: {
      marginTop: "1rem",
    },
    category: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: "#666",
    },
    skillsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: "0.5rem",
    },
    item: {
      fontSize: "0.8rem",
      fontWeight: 400,
      color: "#666",
      marginRight: "0.2rem",
    },
  });
