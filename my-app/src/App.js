import {Grid} from "@mui/material";
import MobileHeader from "./components/Header/MobileHeader";
import MobileFooter from "./components/Footer/MobileFooter";
import DesktopFooter from "./components/Footer/DesktopFooter";
import DesktopHeader from "./components/Header/DesktopHeader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
      <Grid>
          <Header MobileId={1} DesktopId={1}/>
          <Grid>1111</Grid>
          <Footer />
      </Grid>
  );
}

export default App;
