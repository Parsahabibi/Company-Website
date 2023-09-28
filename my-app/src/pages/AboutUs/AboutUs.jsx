import React, {useEffect, useState} from 'react'
import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopAboutUs from "./DesktopAboutUs";
import MobileAboutUs from "./MobileAboutUs";

const AboutUs = () => {

    let [ComponentToShow, setComponentToShow] = useState(<></>);
    const matches = useMediaQuery('(min-width:900px)');


    useEffect(() => {
        setComponentToShow(
            matches ? <DesktopAboutUs/> : <MobileAboutUs/>
        )
    }, [matches])

    return (
        <Grid>
            {
                ComponentToShow
            }
        </Grid>
    )
}
export default AboutUs
