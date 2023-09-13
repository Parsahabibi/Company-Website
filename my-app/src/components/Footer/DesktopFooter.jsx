import React from 'react'
import {Grid, Typography, useTheme} from "@mui/material";

const DesktopFooter = () => {


    const theme = useTheme();


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



    return (
       <Grid position={'fixed'} bottom={0} right={0} left={0}>
           <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}  bgcolor={theme.palette.secondary.one} px={{md:'30px' , lg:'103px'}} py={'95px'}>
               <Grid display={'flex'} gap={'40px'} justifyContent={'start'}>
                   <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>صفحه اصلی</Typography>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>اخبار</Typography>
                   </Grid>
                   <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>خدمات</Typography>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>درباره ما</Typography>
                   </Grid>
                   <Grid display={'flex'} flexDirection={'column'} gap={'40px'}>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>استعلام قیمت</Typography>
                       <Typography style={{cursor:'pointer'}} color={'white'} variant={'subtitle1'}>تماس با ما</Typography>
                   </Grid>
               </Grid>
               <Grid>
                   <img src={'assets/images/YellowAltyn.svg'} alt={''}/>
               </Grid>
               <Grid display={'flex'} flexDirection={'column'} gap={'40px'} >
                   <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                       <img src={'assets/images/locationIcon.svg'} alt={''}/>
                       <Typography variant={'subtitle1'} color={'white'}>گلستان، گرگان، خیابان بهارستان</Typography>
                   </Grid>
                   <Grid display={'flex'} alignItems={'center'} gap={'24px'}>
                       <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                           <img src={'assets/images/WhatsApp.svg'} alt={''}/>
                           <Typography variant={'subtitle1'} color={'white'}>۰۹۱۱-2222-321</Typography>
                       </Grid>
                       <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                           <img src={'assets/images/Instagram.svg'} alt={''}/>
                           <Typography variant={'subtitle1'} color={'white'}>altyngroup.com</Typography>
                       </Grid>
                   </Grid>
                   <Grid display={'flex'} alignItems={'flex-start'} gap={'8px'}>
                       <img src={'assets/images/email.svg'} alt={''}/>
                       <Typography variant={'subtitle1'} color={'white'}>altyngroup@gmail.com</Typography>
                   </Grid>
               </Grid>
           </Grid>
           <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}  bgcolor={theme.palette.info.four} px={{md:'30px' , lg:'103px'}} py={'19px'}>
               <Grid display={'flex'} flexDirection={'column'} gap={'4px'} >
                   <Typography variant={'h5'} color={'white'}>altyngroup - 2023    Ⓒ    Copyright </Typography>
                   <Typography variant={'h5'} color={'white'}>کليه حقوق اين سايت متعلق به گروه آلتن می‌باشد</Typography>
               </Grid>
               <Grid>
                   <Typography variant={'h5'} color={'white'}>طراحی و توسعه توسط  altyngroup</Typography>
               </Grid>
           </Grid>
       </Grid>
    )
}
export default DesktopFooter
