export const theme = {
  palette: {
    background: {
      main: "#525659",
    },
    typography: {
      title: "#153448",
      subtitle: "#676767",
      paragraph: "#273446",
    },
    header: {
      main: "#153448",
    },
    icon: {
      main: "#313c4e",
    },
    border: {
      main: "#262b33",
    },
    paper: {
      main: "#E5E5E5",
    },
  },
  typography: {
    font: "Oswald",
    size: {
      header: "30px",
      title: "28px",
      subtitle: "20px",
      content: "14px",
    },
  },
  padding: (amount: number) => `${amount}px`,
  margin: (amount: number) => `${amount}px`,
};
