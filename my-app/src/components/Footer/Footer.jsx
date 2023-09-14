import React, {useEffect, useLayoutEffect, useState} from 'react'
import MobileHeader from "../Header/MobileHeader";
import DesktopHeader from "../Header/DesktopHeader";
import {Grid, useMediaQuery} from "@mui/material";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
    var [ComponentToShow, setComponentToShow] = useState(<></>);
    const matches = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        setComponentToShow(
            matches ? <DesktopFooter/> : <MobileFooter/>
        )
    }, [matches])


    return (
        <Grid>
            {ComponentToShow}
        </Grid>
    )
}
export default Footer
