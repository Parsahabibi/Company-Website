import React from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cards from "../components/Card/Cards";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const News = () => {

    const Airplane = '/assets/Images/Airplane.svg'

    const Abrisham = '/assets/Images/Abrisham.svg'

    const data = [
        {id: 1, title: 'پیشنهاد واردات هواپیماهای با عمر بیش از ۲۰ سال به ایران', image: Airplane, des: ''},
        {id: 2, title: 'نشست ملی راهبردهای مبادلات اقتصادی در مسیر جاده ابریشم', image: Abrisham, des: ''},
        {id: 3, title: 'پیشنهاد واردات هواپیماهای با عمر بیش از ۲۰ سال به ایران', image: Airplane, des: ''},
        {id: 4, title: 'نشست ملی راهبردهای مبادلات اقتصادی در مسیر جاده ابریشم', image: Abrisham, des: ''},
        {id: 5, title: 'پیشنهاد واردات هواپیماهای با عمر بیش از ۲۰ سال به ایران', image: Airplane, des: ''},
        {id: 6, title: 'نشست ملی راهبردهای مبادلات اقتصادی در مسیر جاده ابریشم', image: Abrisham, des: ''},
    ]

    let variant = 'subtitle2'

    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    if (isXs) {
        variant = 'subtitle2';
    } else if (isMd) {
        variant = 'h2';
    }

    return (
        <Grid>
            <Header MobileId={4} DesktopId={4}/>
            <Grid mt={{xs: '88px', md: '192px'}} px={{xs: '20px', md: '120px', lg: '180px'}}>
                <Typography variant={variant} fontWeight={900} pb={{xs: '16px', md: '40px'}} pt={{xs: '32px', md: ''}}>اخبار
                    گروه آلتن</Typography>
                <Grid display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}
                      gap={{xs: '24px', md: '56px'}} pb={{xs: '32px', md: '42px'}}>
                    {
                        data.map(
                            item =>
                                <Cards images={item.image} title={item.title} des={item.des}
                                       width={{xs: '128px', xxs: '152px', md: '300px'}}
                                       height={{xs: '212px', md: '420px'}} state={{xs: true, md: false}}
                                       font={{xs: 500, md: 900}} variants={'h3'}/>
                        )
                    }
                </Grid>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} gap={{xs:'10px' , md:'20px'}} pb={{xs:'32px' , md:'40px'}}>
                    <ArrowForwardIosIcon fontSize={'large'} style={{cursor:'pointer'}}/>
                    <ArrowBackIosNewIcon fontSize={'large'} style={{cursor:'pointer'}}/>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default News