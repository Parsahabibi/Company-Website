import React, {useLayoutEffect, useState} from 'react'
import MobileHeader from "../Header/MobileHeader";
import DesktopHeader from "../Header/DesktopHeader";
import {Grid} from "@mui/material";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let ComponentToShow;

    if (windowWidth < 900) {
        ComponentToShow = <MobileFooter/>;
    } else if (windowWidth >= 900) {
        ComponentToShow = <DesktopFooter/>;
    }

    return (
        <Grid>
            {ComponentToShow}
        </Grid>
    )
}
export default Footer
