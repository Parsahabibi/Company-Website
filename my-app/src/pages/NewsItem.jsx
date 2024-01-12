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
import {useParams} from "react-router-dom";

const News = () => {


    const {locale, changeLocale} = useLanguage();
    let { newsId } = useParams();

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


    ///api/news/single/1

    const [news, setNews] = useState({});

    useEffect(() => {
        fetch("https://api.altynlogistics.com/api/news/single/"+newsId)
            .then(p => p.json())
            .then(p => {
                setNews(p)

            })
    },[])

    if (isXs) {
        variant = 'subtitle2';
    } else if (isMd) {
        variant = 'h2';
    }

    return (

        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header MobileId={5} DesktopId={5}/>
            <Grid mt={{xs: '60px', md: '70px'}} px={{xs: '20px', md: '120px', lg: '180px'}}>
                <Typography variant={variant} fontWeight={900} pb={{xs: '16px', md: '40px'}} pt={{xs: '32px', md: ''}}>{ news.title }</Typography>
                <Grid display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}
                      gap={{xs: '24px', md: '56px'}} pb={{xs: '32px', md: '42px'}}>

                    <img src={"/news/" + news.id + ".jpg?" + Date.now()}/>
                    <div className={"content-news"}>
                        <div dangerouslySetInnerHTML={{__html: news.content}}/>
                    </div>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default News
