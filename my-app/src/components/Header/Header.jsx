import React , { useLayoutEffect, useState } from 'react'
import {Grid} from "@mui/material";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import ScrollToTop from "../Commons/ScrollToTop";

const Header = ({MobileId , DesktopId}) => {

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
        ComponentToShow = <MobileHeader id={MobileId}/>;
    } else if (windowWidth >= 900) {
        ComponentToShow = <DesktopHeader id={DesktopId}/>;
    }

    return (
        <Grid>
            <ScrollToTop/>
            {ComponentToShow}
        </Grid>
    )
}
export default Header
