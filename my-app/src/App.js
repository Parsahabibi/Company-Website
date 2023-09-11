import {Grid, useTheme} from "@mui/material";
import MobileHeader from "./components/MobileHeader";

function App() {
    const theme = useTheme();
  return (
      <Grid>
          <MobileHeader />
      </Grid>
  );
}

export default App;
