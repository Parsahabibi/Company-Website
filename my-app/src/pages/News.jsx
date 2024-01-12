import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cards from "../components/Card/Cards";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";

const News = () => {


    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();

    const Airplane = '/assets/images/Airplane.svg'

    const Abrisham = '/assets/images/Abrisham.svg'

    const data = [
        {id: 1, title: intl.$t({id: "TitleInformationCardNewsAirPlane"}), image: Airplane, des: '' , TranslateId:'TitleInformationCardNewsAirPlane'},
        {id: 2, title:intl.$t({id: "TitleInformationCardNewsRoad"}), image: Abrisham, des: '' , TranslateId:'TitleInformationCardNewsRoad'},
        {id: 3, title:intl.$t({id: "TitleInformationCardNewsAirPlane"}), image: Airplane, des: '' , TranslateId:'TitleInformationCardNewsAirPlane'},
        {id: 4, title:intl.$t({id: "TitleInformationCardNewsRoad"}), image: Abrisham, des: '' , TranslateId:'TitleInformationCardNewsRoad'},
        {id: 5, title:intl.$t({id: "TitleInformationCardNewsAirPlane"}), image: Airplane, des: '' , TranslateId:'TitleInformationCardNewsAirPlane'},
        {id: 6, title:intl.$t({id: "TitleInformationCardNewsRoad"}), image: Abrisham, des: '' , TranslateId:'TitleInformationCardNewsRoad'},
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



    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch("https://api.altynlogistics.com/api/news/list")
            .then(p => p.json())
            .then(p => {
                for (let i = 0; i < p.length; i++) {
                    p[i].image = "/news/" + p[i].id + ".jpg"  + "?v=" + Date.now();
                    p[i].link = "/news-item/" + p[i].id + "/" + p[i].title.replaceAll(' ','-');
                }
                setLastNews(p)


            })
    },[])

    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header MobileId={5} DesktopId={5}/>
            <Grid mt={{xs: '88px', md: '192px'}} px={{xs: '20px', md: '120px', lg: '180px'}}>
                <Typography variant={variant} fontWeight={900} pb={{xs: '16px', md: '40px'}} pt={{xs: '32px', md: ''}}>{intl.$t({id: "TitleNewsPage"})}</Typography>
                <Grid display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}
                      gap={{xs: '24px', md: '56px'}} pb={{xs: '32px', md: '42px'}}>
                    {
                        lastNews.map(
                            item =>
                                <Cards images={item.image} title={item.title}
                                       moreLink={item.link}
                                       width={{xs: '128px', xxs: '152px', md: '300px'}}
                                       height={{xs: '212px', md: '420px'}} state={{xs: true, md: false}}
                                       font={{xs: 500, md: 900}} variants={'h3'}
                                       TranslateId={item.TranslateId}
                                />
                        )
                    }
                </Grid>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} gap={{xs:'10px' , md:'20px'}} pb={{xs:'32px' , md:'40px'}} dir={'rtl'}>
                    <ArrowForwardIosIcon fontSize={'large'} style={{cursor:'pointer'}}/>
                    <ArrowBackIosNewIcon fontSize={'large'} style={{cursor:'pointer'}}/>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default News
