import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Button, Grid, Typography} from "@mui/material";
import Cards from "../components/Card/Cards";
import {useLanguage} from "../LanguageContext";
import {FormattedMessage, useIntl} from "react-intl";


const Home = () => {

    const {locale, changeLocale} = useLanguage();


    const intl = useIntl();

    const road = '/assets/Images/Road.svg'

    const Sea = '/assets/Images/Sea.svg'

    const Train = '/assets/Images/Train.svg'

    const bus = '/assets/Images/benefits.svg'

    const abrisham = '/assets/Images/Abrisham.svg'

    const Airplane = '/assets/Images/Airplane.svg'

    const data = [
        {
            id: 1,
            title: 'RailroadTransportationCardTitle',
            des: 'Lorem10',
            image: Train,
            LangTitle: 'RailroadTransportationCardTitle',
            TranslateId:'RailroadTransportationCardTitle'
        },
        {
            id: 2,
            title: 'MaritimeTransportationCardTitle',
            des: 'Lorem10',
            image: Sea,
            LangTitle: 'MaritimeTransportationCardTitle',
            TranslateId:'MaritimeTransportationCardTitle'
        },
        {
            id: 3,
            title: 'RoadTransportationCardTitle',
            des: 'Lorem10',
            image: road,
            LangTitle: 'RoadTransportationCardTitle',
            TranslateId:'RoadTransportationCardTitle'
        },
    ]


    const benefits = [
        {id: 1, image: bus, title: 'AltenBenefitsCardTitle'},
        {id: 2, image: bus, title: 'AltenBenefitsCardTitle'},
        {id: 3, image: bus, title: 'AltenBenefitsCardTitle'},
        {id: 4, image: bus, title: 'AltenBenefitsCardTitle'},
    ]


    const lastNews = [
        {id: 1, image: abrisham, title: 'TitleInformationCardNewsRoad' , TranslateId:'TitleInformationCardNewsRoad'},
        {id: 2, image: Airplane, title: 'TitleInformationCardNewsAirPlane' , TranslateId:'TitleInformationCardNewsAirPlane'},
    ]

    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header DesktopId={1} MobileId={1}/>
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} mt={{xs: '83px', md: '73px'}} width={'100%'}>
                <Grid pb={'40px'}>
                    {/*<img width={'100%'} src={'assets/Images/HomePageImage.svg'} alt={''}/>*/}
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src="/assets/Video/althin_webmotion_03.mp4" type="video/mp4"/>
                    </video>
                </Grid>
                <Grid px={{xs: '10px', xxs: '32px', md: '103px'}}>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'}
                                justifyContent={'center'}
                                pb={'32px'}> {intl.$t({id: "AboutUsTitleMainPage"})}</Typography>
                    <Grid mb={'40px'} bgcolor={'white'} px={{xs: '21px', md: '84px'}} py={{xs: '20px', md: '76px'}}
                          display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
                          gap={{xs: '16px', md: '72px'}} border={'2px solid rgba(255, 191, 63, 1)'}
                          borderRadius={'20px'}>
                        <Grid display={{xs: 'none', md: 'block'}}>
                            <img src={'assets/Images/AboutUSImage.svg'} alt={''}/>
                        </Grid>
                        <Grid display={{xs: 'block', md: 'none'}}>
                            <img src={'assets/Images/AboutUS.svg'} alt={''}/>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'column'} justifyContent={{xs: 'center', md: 'end'}}
                              alignItems={{xs: 'center', md: 'start'}} gap={'16px'}>
                            <Typography variant={'subtitle1'} fontWeight={500} lineHeight={'25px'}
                                        textAlign={'justify'}>
                                {intl.$t({id: "Lorem100"})}
                            </Typography>
                            <Grid width={locale === 'fa' ? {
                                xs: '42%',
                                xxs: '35%',
                                s: '20%',
                                md: '31%',
                                l: '20%',
                                lg: '15%',
                                xl: '10%'
                            } : {
                                xs: '45%',
                                xxs: '43%',
                                s: '25%',
                                md: '40%',
                                l: '26%',
                                lg: '20%',
                                xl: '13%'
                            }}><Button variant={'outlinedTwo'} sx={{pt:'10px'}}> {intl.$t({id: "MoreDetailsButton"})}</Button></Grid>
                        </Grid>
                    </Grid>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'}
                                justifyContent={'center'}
                                pb={'32px'}> {intl.$t({id: "ServicesTitleMainPage"})}</Typography>
                    <Grid pb={'104px'} gap={{xs: '16px', md: '0px'}} display={'flex'} flexWrap={"wrap"}
                          alignItems={'center'} justifyContent={'space-between'}>
                        {
                            data.map(
                                item =>
                                    <Cards state={false} title={item.title} des={item.des} images={item.image} width={{
                                        xs: '142px',
                                        xxs: '147px',
                                        md: '215px',
                                        l: '260px',
                                        lg: '310px',
                                        xl: '336px'
                                    }} height={{xs: '217px', md: '480px'}} font={900} variants={'h2'} TranslateId={item.TranslateId}/>
                            )
                        }
                    </Grid>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'}
                                justifyContent={'center'}
                                pb={'32px'}> {intl.$t({id: "AltenBenefitsTitleMainPage"})}</Typography>
                    <Grid pb={'16px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}
                          gap={{xs: '', md: '24px'}}>
                        {
                            benefits.map(
                                item =>
                                    <Grid pb={'32px'} display={'flex'} flexDirection={'column'}
                                          justifyContent={'center'} alignItems={'center'} key={item.id}>
                                        <Grid>
                                            <img src={item.image} alt={''}/>
                                        </Grid>
                                        <Typography variant={'subtitle2'} fontWeight={900}
                                                    lineHeight={'21px'}> {intl.$t({id: item.title})}</Typography>
                                    </Grid>
                            )
                        }
                    </Grid>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'}
                                justifyContent={'center'}
                                pb={'32px'}> {intl.$t({id: "LastNewsTitleMainPage"})}</Typography>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'16px'}
                      px={{xs: '27px', md: '0px'}} bgcolor={'rgba(255, 239, 208, 1)'} py={'68px'}>
                    {
                        lastNews.map(
                            item =>
                                <Cards
                                    images={item.image}
                                    title={intl.$t({id: item.title})}
                                    width={{xs: '152px', md: '304px'}}
                                    height={{xs: '212px', md: '425px'}}
                                    variants={'h3'}
                                    font={500}
                                    state={true}
                                    TranslateId={item.TranslateId}
                                />
                        )
                    }
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default Home