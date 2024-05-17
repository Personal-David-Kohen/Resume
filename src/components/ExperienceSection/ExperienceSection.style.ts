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
    jobTitle: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: "#666",
    },
    company: {
      fontSize: "1.0rem",
      fontWeight: 400,
      color: "#666",
    },
    duration: {
      fontSize: "0.8rem",
      fontWeight: 400,
      color: "#666",
    },
    item: {
      fontSize: "0.8rem",
      fontWeight: 400,
      color: "#666",
    },
  });
