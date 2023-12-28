import React, {useEffect, useState} from 'react'
import {Button, Grid, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";
import useMediaQuery from '@mui/material/useMediaQuery';


const DesktopHeader = ({id}) => {


    const {locale, changeLocale} = useLanguage();


    const intl = useIntl();


    const initialActiveButton = localStorage.getItem("activeButton")
        ? parseInt(localStorage.getItem("activeButton"))
        : 1;

    const [activeButton, setActiveButton] = useState(initialActiveButton);



    // const handleButtonClick = (event , buttonNumber, lang) => {
    //     event.preventDefault();
    //     if (activeButton !== buttonNumber) {
    //         setActiveButton(buttonNumber);
    //         changeLocale(lang);
    //     }
    // };





    // console.log(activeButton)


    const buttonStyle = (buttonNumber) => (
    {
        backgroundColor: activeButton === buttonNumber ? 'rgba(68, 74, 93, 1)' : 'rgba(255, 191, 63, 1)',
        color: activeButton === buttonNumber ? 'white' : 'rgba(68, 74, 93, 1)',
        border: activeButton === buttonNumber ? 'none' : "1px solid rgba(68, 74, 93, 1)",
        minWidth: "14px",
        height: '14px',
        padding: '0px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: '0px',
        margin: 'auto',

    });

    const theme = useTheme()

    const variable = [
        {id: 1, title: 'صفحه اصلی', link: '/', TitleLang: 'HeaderMainPage'},
        {id: 2, title: 'خدمات', link: '/Services', TitleLang: 'HeaderServices'},
        {id: 3, title: 'استعلام قیمت', link: '/Price', TitleLang: 'HeaderPrice'},
        {id: 4, title: 'اخبار', link: '/News', TitleLang: 'HeaderNews'},
        {id: 5, title: 'درباره ما', link: '/AboutUS', TitleLang: 'HeaderAboutUs'},
        {id: 6, title: 'تماس با ما', link: '/ContactUs', TitleLang: 'HeaderConcatUs'},
    ]


    const lang = [
        {id: 1, title: "فا", symbol: 'fa'},
        {id: 2, title: "en", symbol: 'en'},
        {id: 3, title: "ru", symbol: 'ru'},
    ]


    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isXl = useMediaQuery(theme.breakpoints.between('lg', 'g'));

    const isG = useMediaQuery(theme.breakpoints.up('g'));


    // console.log(isXl)


    let variant;

    if (isMd) {
        variant = 'subtitle2'
    } else if (isXl) {
        variant = 'subtitle1'
    } else if (isG) {
        variant = 'h3'
    }


    useEffect(() => {
        localStorage.setItem("activeButton", activeButton.toString());
    }, [activeButton]);


    return (
        <Grid position={'fixed'} top={0} left={0} right={0} zIndex={10}>
            <Grid position={'relative'} top={0} left={0} right={0} bgcolor={theme.palette.primary.one} width={'100%'}
                  py={'25px'} display={'flex'} alignItems={'center'} boxShadow={5}>
                <Grid display={locale === 'fa' ? 'block' : 'none'} position={'absolute'} top={0}
                      right={{md: '48px', lg: '128px'}}
                      bgcolor={theme.palette.secondary.one} px={'43px'}
                      py={'19px'}>
                    <img src={'../assets/images/AltynLogo.svg'} alt={''}/>
                </Grid>
                <Grid display={locale === 'fa' ? 'none' : 'block'} position={'absolute'} top={0}
                      left={{md: '48px', lg: '70px', g: '128px'}}
                      bgcolor={theme.palette.secondary.one} px={'43px'}
                      py={'19px'}>
                    <img src={'../assets/images/AltynLogo.svg'} alt={''}/>
                </Grid>
                <Grid display={locale === 'fa' ? 'flex' : 'none'} alignItems={'center'} gap={'24px'}
                      pr={{md: '250px', l: '310px', lg: '400px', xl: '454'}}
                      pl={{md: '48px', l: '120px', lg: '120px', xl: '287px'}}>
                    {
                        variable.map(
                            item =>
                                <Grid key={item.id}>
                                    {
                                        item.id === id ?
                                            <Link to={item.link}>
                                                <Typography style={{cursor: 'pointer'}} variant={'h3'}
                                                            color={theme.palette.secondary.one}
                                                            fontWeight={900}>
                                                    {intl.$t({id: item.TitleLang})}
                                                </Typography>
                                            </Link>
                                            :
                                            <Link to={item.link}>
                                                <Typography style={{cursor: 'pointer'}} variant={'h3'}
                                                            color={theme.palette.secondary.one}
                                                            fontWeight={500}>
                                                    {intl.$t({id: item.TitleLang})}
                                                </Typography>
                                            </Link>
                                    }
                                </Grid>
                        )
                    }
                </Grid>
                <Grid display={locale === 'fa' ? 'none' : 'flex'} alignItems={'center'} gap={'24px'}
                      pt={locale === 'en' ? '5px' : '4px'}
                      pl={{md: '250px', l: '270px', lg: '330px', g: '400px', xl: '454'}}
                      pr={{md: '10px', l: '120px', lg: '120px', xl: '287px'}}>
                    {
                        variable.map(
                            item =>
                                <Grid key={item.id}>
                                    {
                                        item.id === id ?
                                            <Link to={item.link}>
                                                <Typography style={{cursor: 'pointer'}}
                                                            variant={locale === 'en' ? 'h3' : variant}
                                                            color={theme.palette.secondary.one}
                                                            fontWeight={900}>
                                                    {intl.$t({id: item.TitleLang})}
                                                </Typography>
                                            </Link>
                                            :
                                            <Link to={item.link}>
                                                <Typography style={{cursor: 'pointer'}}
                                                            variant={locale === 'en' ? 'h3' : variant}
                                                            color={theme.palette.secondary.one}
                                                            fontWeight={500}>
                                                    {intl.$t({id: item.TitleLang})}
                                                </Typography>
                                            </Link>
                                    }
                                </Grid>
                        )
                    }
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                    {
                        lang.map(
                            item =>
                                <Button style={buttonStyle(item.id)}
                                        onClick={() => { setActiveButton(item.id); changeLocale(item.symbol) ;
                                            // console.log(activeButton , 'ac')
                                        }} key={item.id}>{item.title}</Button>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
export default DesktopHeader
