import { theme } from "./theme";
import { createTheme } from "@mui/material";

export const MUI_OVERRIDES = createTheme({
  typography: {
    fontFamily: theme.typography.font,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          font: "Oswald",
          textTransform: "uppercase",
          color: theme.palette.typography.title,
        },
      },
    },
  },
});
