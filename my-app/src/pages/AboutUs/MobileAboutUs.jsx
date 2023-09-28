import React from 'react'
import {Grid} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MobileAboutUs = () => {
    return (
        <Grid>
            <Header MobileId={5} DesktopId={5} />
            <Grid></Grid>
            <Footer />
        </Grid>
    )
}
export default MobileAboutUs
