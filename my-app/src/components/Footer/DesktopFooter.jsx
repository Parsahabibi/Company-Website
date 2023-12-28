import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";

const DesktopFooter = () => {


    const theme = useTheme();


    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();


    return (
        <Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                  bgcolor={theme.palette.secondary.one} px={{md: '30px', lg: '103px'}} py={'95px'}>
                <Grid display={'flex'} gap={'40px'} justifyContent={'start'}>
                    <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderMainPage"})}</Typography>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderNews"})}</Typography>
                    </Grid>
                    <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderServices"})}</Typography>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderAboutUs"})}</Typography>
                    </Grid>
                    <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderPrice"})}</Typography>
                        <Typography style={{cursor: 'pointer'}} color={'white'}
                                    variant={'subtitle1'}> {intl.$t({id: "HeaderConcatUs"})}</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <img src={'../assets/images/YellowAltyn.svg'} alt={''}/>
                </Grid>
                <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'../assets/images/locationIcon.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} color={'white'}> {intl.$t({id: "CompanyLocation"})}</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={'24px'}>
                        <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                            <img src={'../assets/images/WhatsApp.svg'} alt={''}/>
                            <Typography variant={'subtitle1'} color={'white'}>۰۹۱۱-2222-321</Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                            <img src={'../assets/images/Instagram.svg'} alt={''}/>
                            <Typography variant={'subtitle1'} color={'white'}>altyngroup.com</Typography>
                        </Grid>
                    </Grid>
                    <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                        <img src={'../assets/images/email.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} color={'white'}>altyngroup@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                  bgcolor={theme.palette.info.four} px={{md: '30px', lg: '103px'}} py={'19px'}>
                <Grid display={'flex'} flexDirection={'column'} gap={'4px'}>
                    <Typography variant={'h5'} color={'white'}>altyngroup - 2023 Ⓒ Copyright </Typography>
                    <Typography variant={'h5'} color={'white'}>   {intl.$t({id: "CompanyLocation"})}</Typography>
                </Grid>
                <Grid>
                    <Typography variant={'h5'} color={'white'}> {intl.$t({id: "DesignBySubFooter"})}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default DesktopFooter
