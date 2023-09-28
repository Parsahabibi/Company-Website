import React from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const ContactUs = () => {

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
        <Grid>
            <Header DesktopId={6} MobileId={6}/>
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs:'12px' , xxs:'16px' , md:'50px' , lg:'140px' , g:'180px'}} pt={{xs:'99px' , md:'175px'}}>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} pb={{xs:'24px' , md:'57px'}}>
                    <Typography variant={variant} fontWeight={900} color={'rgba(57, 57, 58, 1)'}>با ما در  ارتباط باشید</Typography>
                </Grid>
                <Grid display={{xs:'block' , md:'flex'}} alignItems={'center'} justifyContent={'space-between'} pb={{xs:'32px' , md:'56px'}}>
                    <Grid mb={{xs:'24px' , md:'0px'}} px={{xs:'16px' , xxs:'37px' , md:'32px'}} py={{xs:'24px' , md:'20px'}} bgcolor={'white'} border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}>
                        <Grid pb={'16px'}>
                            <Grid pb={{xs:'12px' , md:'8px'}}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pl={{lg:'272px'}}>شماره های تماس:</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={{xs:'space-between' , sm:'flex-start'}} gap={{xs:'0px' , sm:'16px' , md:'36px'}}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>۰۹۱۱-2222-321</Typography>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>۰۹۱۱-2222-321</Typography>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>۰۹۱۱-2222-321</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one}  pb={{xs:'12px' , md:'8px'}}>واتسپ و تلگرام:</Typography>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four} >۰۹۱۱-2222-321</Typography>
                        </Grid>
                    </Grid>
                    <Grid px={{xs:'16px' , xxs:'37px' , md:'32px'}} py={{xs:'24px' , md:'25px'}} bgcolor={'white'} border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}>
                        <Grid pb={{xs:'24px' , md:'16px'}}>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pl={{lg:'339px'}}>ایمیل:</Typography>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                                <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>altyngroup@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.one} pb={{xs:'13px' , md:'6px'}}>شبکه های اجتماعی:</Typography>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-end'} gap={{xs:'10px' , xxs:'16px' , md:'18px' , lg:'24px'}}>
                                <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                                    <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>altyngroup.com</Typography>
                                    <img src={'assets/Images/Linkdin.svg'} alt={''}/>
                                </Grid>
                                <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                                    <Typography variant={secondVariant} fontWeight={500} color={theme.palette.info.four}>altyngroup.com</Typography>
                                    <img src={'assets/Images/SecondInstagram.svg'} alt={''}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid pb={{xs:'40px' , md:'64px'}}>
                    <Typography variant={secondVariant} fontWeight={500} color={'rgba(57, 55, 51, 1)'} pb={{xs:'16px' , md:'18px'}}>موقعیت دفتر مرکزی آلتن روی نقشه/ کلیک کنید</Typography>
                    <Grid display={{xs:'block' , md:'none'}}>
                        <img width={'100%'} src={'assets/Images/map.svg'} alt={''}/>
                    </Grid>
                    <Grid display={{xs:'none' , md:'block'}}>
                        <img width={'100%'} src={'assets/Images/DesktopMap.svg'} alt={''}/>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default ContactUs
