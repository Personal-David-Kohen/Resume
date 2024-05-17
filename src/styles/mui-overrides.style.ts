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
          fontFamily: "Oswald",
          textTransform: "uppercase",
          color: theme.palette.typography.title,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Oswald",
          fontSize: "1rem",
          fontWeight: 400,
          textDecoration: "none",
          color: theme.palette.typography.title,
        },
      },
    },
  },
});
