import {Grid} from "@mui/material";
import MobileHeader from "./components/Header/MobileHeader";
import MobileFooter from "./components/Footer/MobileFooter";
import DesktopFooter from "./components/Footer/DesktopFooter";
import DesktopHeader from "./components/Header/DesktopHeader";
function App() {
  return (
      <Grid>
          <DesktopHeader id={1}/>
      </Grid>
  );
}

export default App;
