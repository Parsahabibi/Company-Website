import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";

const ContactUs = () => {


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


    useEffect(() => {
        window.addMap()
    }, [])



    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header DesktopId={7} MobileId={7}/>
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs:'12px' , xxs:'16px' , md:'50px' , lg:'140px' , g:'180px'}} pt={{xs:'99px' , md:'175px'}}>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} pb={{xs:'24px' , md:'57px'}}>
                    <Typography variant={variant} fontWeight={900} color={'rgba(57, 57, 58, 1)'}>{intl.$t({id: "ContactUs"})}</Typography>
                </Grid>
                <Grid display={{xs:'block' , md:'flex'}} alignItems={'center'} justifyContent={'space-between'} pb={{xs:'32px' , md:'56px'}}>
                    <Grid mb={{xs:'24px' , md:'0px'}} px={{xs:'16px' , xxs:'37px' , md:'32px'}} py={{xs:'24px' , md:'20px'}} bgcolor={'white'} border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}>
                        <Grid pb={'16px'}>
                            <Grid pb={{xs:'12px' , md:'8px'}}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pl={locale === 'fa' ? {lg: '272px'} : ''}  pr={locale === 'fa' ? '' :  {lg: '272px'}}>{intl.$t({id: "PhoneNumbers"})}</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={{xs:'space-between' , sm:'flex-start'}} gap={{xs:'0px' , sm:'16px' , md:'36px'}}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>00989025613535</Typography>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>00989025613535</Typography>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>00989025613535</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one}  pb={{xs:'12px' , md:'8px'}}>{intl.$t({id: "WhatsAppAndTelegram"})}</Typography>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four} >00989025613535</Typography>
                        </Grid>
                    </Grid>
                    <Grid px={{xs:'16px' , xxs:'37px' , md:'32px'}} py={{xs:'24px' , md:'25px'}} bgcolor={'white'} border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}>
                        <Grid pb={{xs:'24px' , md:'16px'}}>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pl={locale === 'fa' ? {lg: '339px'} : ''}  pr={locale === 'fa' ? '' :  {lg: '339px'}}>{intl.$t({id: "EmailInputLabel"})}:</Typography>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>info@altynlogistics.comm</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pb={{xs:'13px' , md:'6px'}}>{intl.$t({id: "SocialMedia"})}</Typography>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-end'} gap={{xs:'10px' , xxs:'16px' , md:'18px' , lg:'24px'}}>
                                <Grid display={'flex'} alignItems={'center'} flexDirection={locale === 'fa' ? 'row' : 'row-reverse'} gap={'8px'}>
                                    <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>altyn.logistics</Typography>
                                    <img src={'assets/images/Linkdin.svg'} alt={''}/>
                                </Grid>
                                <Grid display={'flex'} alignItems={'center'} flexDirection={locale === 'fa' ? 'row' : 'row-reverse'} gap={'8px'}>
                                    <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>altyn.logistics</Typography>
                                    <img src={'assets/images/SecondInstagram.svg'} alt={''}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid pb={{xs:'40px' , md:'64px'}}>
                    <Typography variant={secondVariant} fontWeight={500} color={'rgba(57, 55, 51, 1)'} pb={{xs:'16px' , md:'18px'}}>{intl.$t({id: "mapLocation"})}</Typography>
                    {/*<Grid display={{xs:'block' , md:'none'}}>*/}
                    {/*    <img width={'100%'} src={'assets/images/map.svg'} alt={''}/>*/}
                    {/*</Grid>*/}
                    {/*<Grid display={{xs:'none' , md:'block'}}>*/}
                    {/*    <img width={'100%'} src={'assets/images/DesktopMap.svg'} alt={''}/>*/}
                    {/*</Grid>*/}

                    <Grid>
                        <div id="osm-map"></div>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default ContactUs
