import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";

const MobileFooter = () => {


    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();

    const variableOriginal = [
        {id: 1, title: 'HeaderMainPage'},
        {id: 2, title: 'HeaderServices'},
        {id: 3, title: 'HeaderPrice'},
        {id: 4, title: 'HeaderNews'},
        {id: 5, title: 'HeaderAboutUs'},
        {id: 6, title: 'HeaderConcatUs'},
    ]

    const theme = useTheme();

    return (
        <Grid style={{overflowY:'auto'}}   width={'100%'}>
            <Grid px={'22px'} pt={'42px'} pb={'32px'}  bgcolor={theme.palette.secondary.one} >
                <Grid pb={'41px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'} gap={'39px'} >
                    {
                        variableOriginal.map(
                            item=>
                                <Typography color={'white'} variant={'subtitle1'} fontWeight={500}  key={item.id}>
                                    {intl.$t({id: item.title})}
                                </Typography>
                        )
                    }
                </Grid>
                <Grid pb={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                    <img src={'../assets/images/AltynGroup.svg'} alt={''} />
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={'8px'} pb={'32px'} >
                    <img src={'../assets/images/locationIcon.svg'} alt={''} />
                    <Typography variant={'subtitle1'} fontWeight={500} color={'white'}> {intl.$t({id: "CompanyLocation"})}</Typography>
                </Grid>
                <Grid display={'flex'} flexWrap={'wrap'} flexDirection={{xs:'column' , xxs:'row'}} alignItems={{xs:'start' , xxs:'center'}} justifyContent={{xs:'start' , xxs:'space-between'}} gap={{xs:'40px' , xxs:'40px'}}>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'../assets/images/WhatsApp.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>0911-2222-321</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'../assets/images/Instagram.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>altyn.logistics</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'../assets/images/email.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>info@altynlogistics.comm</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid bgcolor={theme.palette.info.four} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'8px'} py={'14px'} >
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}>altyngroup - 2023    Ⓒ    Copyright </Typography>
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}> {intl.$t({id:"AlertSubFooter"})}</Typography>
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}> {intl.$t({id:"DesignBySubFooter"})}</Typography>
            </Grid>
        </Grid>
    )
}
export default MobileFooter
