import React from 'react'
import {Button, Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";

const AboutUs = () => {


    const {locale, changeLocale} = useLanguage();

    console.log(locale)

    const intl = useIntl();

    const data = [
        {
            id: 1,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})

        },
        {
            id: 2,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})
        },
        {
            id: 3,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})
        },
    ]

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


    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header MobileId={5} DesktopId={5}/>
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs: '18px', xxs: '27px', md: '75px', lg: '103px'}}
                  pt={{xs: '145px', md: '176px'}} position="relative" zIndex={2} >
                <Grid sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -10,
                    backgroundImage: {
                        xs: 'url(assets/Images/MobileAboutUsBackGround.svg)',
                        md: 'url(assets/Images/BackAboutUs.svg)'
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                </Grid>
                <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'} bgcolor={'white'}
                      px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                      pb={{xs: '36px', md: '64px'}} mb={{xs: '24px', md: '64px'}}>
                    <Typography pb={'16px'} variant={variant} fontWeight={900} color={theme.palette.secondary.one}>
                        {intl.$t({id: "TitleAboutUsPage"})}
                    </Typography>
                    <Typography textAlign={'justify'} variant={secondVariant} fontWeight={500}
                                color={theme.palette.secondary.one}>
                        {intl.$t({id: "Lorem100"})}
                    </Typography>
                </Grid>
                <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}
                      px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                      pb={{xs: '32px', md: '60px'}} mb={{xs: '18px', md: '28px'}} bgcolor={'white'}>
                    <Typography pb={{xs: '24px', md: '40px'}} variant={variant} fontWeight={900}
                                color={theme.palette.secondary.one}>{intl.$t({id: "SubcategoriesOfAltenGroup"})}</Typography>
                    <Grid display={'flex'} flexDirection={'column'} gap={{xs: '24px', md: '48px'}}>
                        {
                            data.map(
                                item =>
                                    <Grid key={item.id}>
                                        <Grid display={'flex'} alignItems={'baseline'} gap={'5px'} pb={'16px'}>
                                            <img src={'assets/Images/circle.svg'} alt={''}/>
                                            <Typography variant={variant} fontWeight={900}
                                                        color={theme.palette.secondary.one}>{item.title}</Typography>
                                        </Grid>
                                        <Typography lineHeight={{xs: '22px', md: '25px'}} textAlign={'justify'}
                                                    variant={secondVariant} fontWeight={500}
                                                    color={theme.palette.secondary.one}>{item.des}</Typography>
                                    </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid width={{xs: '40%', sm: '25%', md: '20%', lg: '15%'}} pb={{xs: '60px', md: '100px'}}>
                    <Button variant={'outlinedTwo'} sx={{height: '54px', lineHeight: '27px'}}>
                        {intl.$t({id: "ViewServicesButton"})}
                    </Button>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default AboutUs
