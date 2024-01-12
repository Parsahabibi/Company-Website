import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import {useIntl} from "react-intl";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {useLanguage} from "../LanguageContext";

const Chart = () => {

    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();


    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let variant = 'h3'

    let secondVariant = 'subtitle2'

    if (isXs) {
        variant = 'h3';
        secondVariant = 'subtitle2'
    } else if (isMd) {
        variant = 'h2';
        secondVariant = 'subtitle1'
    }


    return  <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
        <Header MobileId={3} DesktopId={3}/>
        <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs: '18px', xxs: '27px', md: '75px', lg: '103px'}}
              pt={{xs: '145px', md: '176px'}} position="relative" zIndex={2} >

            <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'} bgcolor={'white'}
                  px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                  pb={{xs: '36px', md: '64px'}} mb={{xs: '24px', md: '64px'}}>
                <Typography pb={'16px'} variant={variant} fontWeight={900} color={theme.palette.secondary.one}>
                    چارت سازمانی
                </Typography>

                <Grid display={"flex"} direction={{md: "row", xs: "column"}} justifyContent={{md: 'space-around'}} alignItems={"center"} pb={{md:3}}>
                    <img src="/assets/images/chart.png" alt=""/>
                </Grid>

            </Grid>
        </Grid>
        <Footer/>
    </Grid>
}

export default Chart;