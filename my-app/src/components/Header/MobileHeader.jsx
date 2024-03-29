import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {styled, keyframes} from '@mui/system';
import {Link} from "react-router-dom";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";



const MobileHeader = ({id}) => {

    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();


    const [open, setOpen] = useState(false)

    const [closing, setClosing] = useState(false);


    const fadeIn = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

    const fadeOut = keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    `;


    const AnimatedGrid = styled(Grid)(({theme, isClosing}) => ({
        animation: isClosing ? `${fadeOut} 0.25s forwards` : `${fadeIn} 0.25s`,
        borderColor: theme.palette.primary.one,
    }));


    const theme = useTheme();


    const menuRef = useRef(null);


    const variable = [
        {id: 1, title: 'صفحه اصلی', link: '/', TitleLang: 'HeaderMainPage'},
        {id: 2, title: 'خدمات', link: '/Services', TitleLang: 'HeaderServices'},
        {id: 3, title: 'چارت', link: '/chart', TitleLang: 'HeaderChart'},
        {id: 4, title: 'استعلام قیمت', link: '/Price', TitleLang: 'HeaderPrice'},
        {id: 5, title: 'اخبار', link: '/News', TitleLang: 'HeaderNews'},
        {id: 6, title: 'درباره ما', link: '/AboutUS', TitleLang: 'HeaderAboutUs'},
        {id: 7, title: 'تماس با ما', link: '/ContactUs', TitleLang: 'HeaderConcatUs'},
    ]


    const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setClosing(true);
            setTimeout(() => {
                setOpen(false);
                setClosing(false);
            }, 500);
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });


    return (
        <Grid position={'fixed'} top={0} left={0} right={0} zIndex={10}  bgcolor={theme.palette.primary.one} py={'21px'} px={'16px'} display={'flex'} alignItems={'center'}
              justifyContent={'space-between'}>
            <Grid display={locale === 'fa' ? 'block' :'none'}>
                <MenuIcon fontSize={'large'} style={{position: 'relative', top: 0, right: 0 , cursor:'pointer'}} onClick={() => {
                    setClosing(false);
                    setOpen(true);
                }}/>
                {
                    open === true ?
                        <AnimatedGrid
                            position={'absolute'}
                            style={{boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)'}}
                            borderRadius={'0 0 0 20px'}
                            top={32}
                            right={18}
                            zIndex={10}
                            ref={menuRef}
                            bgcolor={theme.palette.primary.one}
                            border={'none'}
                            isClosing={closing}
                            p={'24px 32px 16px 32px'}
                        >
                            {
                                variable.map(
                                    item =>
                                        <Grid key={item.id} >
                                            {
                                                item.id === 6 ?
                                                    item.id === id ?
                                                        <Link to={item.id}>
                                                            <Typography  color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                         justifyContent={'center'} py={'8px'}
                                                                         variant={'subtitle1'}
                                                                         fontWeight={900} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                        </Link>
                                                        :
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={500} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                        </Link>
                                                    :
                                                    item.id === id ?
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={900} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                            <Grid  bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                   height={'1px'}></Grid>
                                                        </Link>
                                                        :
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={500} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                            <Grid bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                  height={'1px'}></Grid>
                                                        </Link>
                                            }

                                        </Grid>
                                )
                            }
                        </AnimatedGrid>
                        :
                        <></>
                }
            </Grid>
            <Grid display={locale === 'fa' ? 'none' :'block'}>
                <MenuIcon fontSize={'large'} style={{position: 'relative', top: 0, right: 0 , cursor:'pointer'}} onClick={() => {
                    setClosing(false);
                    setOpen(true);
                }}/>
                {
                    open === true ?
                        <AnimatedGrid
                            position={'absolute'}
                            style={{boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)'}}
                            borderRadius={'0 0 0 20px'}
                            top={32}
                            left={18}
                            zIndex={10}
                            ref={menuRef}
                            bgcolor={theme.palette.primary.one}
                            border={'none'}
                            isClosing={closing}
                            p={'24px 32px 16px 32px'}
                        >
                            {
                                variable.map(
                                    item =>
                                        <Grid key={item.id} >
                                            {
                                                item.id === 6 ?
                                                    item.id === id ?
                                                        <Link to={item.id}>
                                                            <Typography  color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                         justifyContent={'center'} py={'8px'}
                                                                         variant={'subtitle1'}
                                                                         fontWeight={900} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                        </Link>
                                                        :
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={500} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                        </Link>
                                                    :
                                                    item.id === id ?
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={900} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                            <Grid  bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                   height={'1px'}></Grid>
                                                        </Link>
                                                        :
                                                        <Link to={item.link}>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={500} style={{cursor:'pointer'}}> {intl.$t({id: item.TitleLang})}</Typography>
                                                            <Grid bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                  height={'1px'}></Grid>
                                                        </Link>
                                            }

                                        </Grid>
                                )
                            }
                        </AnimatedGrid>
                        :
                        <></>
                }
            </Grid>
            <Grid>
                <img src={'../assets/images/Altyn.svg'} alt={''}/>
            </Grid>
        </Grid>
    )
}
export default MobileHeader
