import {Grid} from "@mui/material";
import MobileHeader from "./components/Header/MobileHeader";
import MobileFooter from "./components/Footer/MobileFooter";
import DesktopFooter from "./components/Footer/DesktopFooter";
import DesktopHeader from "./components/Header/DesktopHeader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Card/Cards";
// import image from '../public/assets/Images/Altyn.svg'
function App() {

    const AltynImage = "/assets/Images/Road.svg";

    return (
      <Grid>
          {/*<Header MobileId={1} DesktopId={1}/>*/}
          {/*<Footer />*/}
          <Cards images={AltynImage} title={'پیشنهاد واردات هواپیماهای با عمر بیش از ۲۰ سال به ایران'} width={'336px'} height={'480px'} />
      </Grid>
  );
}

export default App;
