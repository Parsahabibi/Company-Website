import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";

const MobileFooter = () => {

    const variableOriginal = [
        {id: 1, title: 'صفحه اصلی'},
        {id: 2, title: 'خدمات'},
        {id: 3, title: 'استعلام قیمت'},
        {id: 4, title: 'اخبار'},
        {id: 5, title: 'درباره ما'},
        {id: 6, title: 'تماس با ما'},
    ]

    const variable = [
        {id: 1, title: 'صفحه اصلی'},
        {id: 2, title: 'خدمات'},
        {id: 3, title: 'استعلام قیمت'},
    ]


    const variable1 = [
        {id: 1, title: 'اخبار'},
        {id: 2, title: 'درباره ما'},
        {id: 3, title: 'تماس با ما'},
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
                                    {item.title}
                                </Typography>
                        )
                    }
                </Grid>
                {/*<Grid pb={'41px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'} gap={'39px'} >*/}
                {/*    {*/}
                {/*        variable.map(*/}
                {/*            item=>*/}
                {/*                <Typography color={'white'} variant={'subtitle1'} fontWeight={500}  key={item.id}>*/}
                {/*                    {item.title}*/}
                {/*                </Typography>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</Grid>*/}
                {/*<Grid pb={'41px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'} gap={'39px'} >*/}
                {/*    {*/}
                {/*        variable1.map(*/}
                {/*            item=>*/}
                {/*                <Typography color={'white'} variant={'subtitle1'} fontWeight={500}  key={item.id}>*/}
                {/*                    {item.title}*/}
                {/*                </Typography>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</Grid>*/}
                <Grid pb={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                    <img src={'assets/images/AltynGroup.svg'} alt={''} />
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={'8px'} pb={'32px'} >
                    <img src={'assets/images/locationIcon.svg'} alt={''} />
                    <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>گلستان، گرگان، خیابان بهارستان</Typography>
                </Grid>
                <Grid display={'flex'} flexWrap={'wrap'} flexDirection={{xs:'column' , xxs:'row'}} alignItems={{xs:'start' , xxs:'center'}} justifyContent={{xs:'start' , xxs:'space-between'}} gap={{xs:'40px' , xxs:'40px'}}>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'assets/images/WhatsApp.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>0911-2222-321</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'assets/images/Instagram.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>altyngroup.com</Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                        <img src={'assets/images/email.svg'} alt={''}/>
                        <Typography variant={'subtitle1'} fontWeight={500} color={'white'}>altyngroup@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid bgcolor={theme.palette.info.four} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'8px'} py={'14px'} >
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}>altyngroup - 2023    Ⓒ    Copyright </Typography>
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}>کليه حقوق اين سايت متعلق به گروه آلتن می‌باشد</Typography>
                <Typography color={'white'} fontSize={'12px'} fontWeight={500}>طراحی و توسعه توسط  altyngroup</Typography>
            </Grid>
        </Grid>
    )
}
export default MobileFooter
