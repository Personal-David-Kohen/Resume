import Main from "src/pages/Main/Main";
import { ThemeProvider } from "@emotion/react";
import { MUI_OVERRIDES } from "./styles/mui-overrides.style";

function App() {
  return (
    <ThemeProvider theme={MUI_OVERRIDES}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
