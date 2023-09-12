import {Grid, useTheme} from "@mui/material";
import MobileHeader from "./components/MobileHeader";

function App() {
    const theme = useTheme();
  return (
      <Grid>
          <MobileHeader id={1} />
      </Grid>
  );
}

export default App;
