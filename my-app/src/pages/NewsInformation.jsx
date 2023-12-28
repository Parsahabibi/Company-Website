import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";
import moment from 'jalali-moment'


const NewsInformation = () => {

    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();


    const [timeInPersian, setTimeInPersian] = useState('');
    const [timeInRussian, setTimeInRussian] = useState('');
    const timeInEnglish = '1:09 PM';


    const convertToEnglish = (persianString) => {
        const persianToEnglishMap = {
            '۰': '0',
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
        };

        let convertedString = '';
        for (let i = 0; i < persianString.length; i++) {
            const char = persianString[i];
            convertedString += persianToEnglishMap[char] || char;
        }

        return convertedString;
    };


    const persianDate = '۲۷ خرداد ۱۴۰۱';

    const PersianDateSplit = persianDate.split(' ');

    const convertedNumberDay = convertToEnglish(PersianDateSplit[0]);
    const PersianMonth = PersianDateSplit[1];
    let PersianMonthNumber
    const convertedNumberYear = convertToEnglish(PersianDateSplit[2]);



    const ConvertMonthToNumber = () => {
        if (PersianMonth === 'فروردین') {
            PersianMonthNumber = 1
        } else if (PersianMonth === 'اردیبهشت') {
            PersianMonthNumber = 2

        } else if (PersianMonth === 'خرداد') {
            PersianMonthNumber = 3

        } else if (PersianMonth === 'تیر') {
            PersianMonthNumber = 4

        } else if (PersianMonth === 'مرداد') {
            PersianMonthNumber = 5

        } else if (PersianMonth === 'شهریور') {
            PersianMonthNumber = 6

        } else if (PersianMonth === 'مهر') {
            PersianMonthNumber = 7

        } else if (PersianMonth === 'آبان') {
            PersianMonthNumber = 8

        } else if (PersianMonth === 'آذر') {
            PersianMonthNumber = 9

        } else if (PersianMonth === 'دی') {
            PersianMonthNumber = 10

        } else if (PersianMonth === 'بهمن') {
            PersianMonthNumber = 11

        } else {
            PersianMonthNumber = 12

        }
    }

    ConvertMonthToNumber()

    const PersianDateConvertToEnglish = `${convertedNumberYear}/${PersianMonthNumber}/${convertedNumberDay}`



    const EnglishDate = moment.from(PersianDateConvertToEnglish, 'fa', 'YYYY/M/D')
        .format('YYYY/M/D');




    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pageTitle = params.get("title");
    const pageImageSrc = params.get("imageSrc");
    const TranslateId = params.get("TranslateId")



    const theme = useTheme();

    const data = [
        {id: 1, image: '../assets/images/telegram.svg', link: ''},
        {id: 2, image: '../assets/images/twitter.svg', link: ''},
        {id: 3, image: '../assets/images/instagrams.svg', link: ''},
        {id: 3, image: '../assets/images/whatsapps.svg', link: ''},
    ]

    const Description = intl.$t({id: "Lorem100"})


    const convertToPersian = (time) => {
        const [hour, minute, period] = time.split(/:| /);
        const persianHour = period === 'PM' ? (parseInt(hour, 10) + 12) % 24 : parseInt(hour, 10);
        const persianTime = `${persianHour}:${minute} ${period === 'PM' ? 'بعد از ظهر' : 'قبل از ظهر'}`;
        setTimeInPersian(persianTime);
    };

    const convertToRussian = (time) => {
        const [hour, minute, period] = time.split(/:| /);
        const russianHour = period === 'PM' ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
        const russianTime = `${russianHour}:${minute}`;
        setTimeInRussian(russianTime);
    };


    // useEffect(() => {
    //     // هنگام رندر اولیه، مقداردهی اولیه به زمان انگلیسی را انجام دهید
    //     // می‌توانید از یک تابع گرفتن زمان فعلی استفاده کنید
    //     const currentTime = new Date().toLocaleTimeString('en-US', { hour12: true });
    //     setTimeInEnglish(currentTime);
    // }, []);


    useEffect(() => {
        convertToPersian(timeInEnglish);
        convertToRussian(timeInEnglish);
    }, [locale]);


    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header DesktopId={4} MobileId={4}/>
            <Grid mt={{xs: '80px', md: '160px'}} pt={{xs: '24px', md: ''}}
                  px={{xs: '12px', xxs: '16px', md: '50px', lg: '128px'}}>
                <Grid className={'mobile'} pb={{xs: '21px'}} display={{xs: 'block', md: 'none'}}>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Typography variant={'h5'} color={theme.palette.secondary.one} pb={'8px'}>
                            {intl.$t({id: "HomeAndNews"})}
                        </Typography>
                        <Typography variant={'h5'} color={theme.palette.secondary.one} pb={'8px'}>
                            {intl.$t({id: TranslateId})}
                        </Typography>
                    </Grid>
                    <Grid display={{xs: 'block', md: 'none'}} width={'100%'} height={'1px'} bgcolor={theme.palette.secondary.main} mb={'12px'}></Grid>
                    <Grid display={'flex'} alignItems={'baseline'} justifyContent={'space-between'}>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                                <img src={'../assets/images/calendar.svg'} alt={''}/>
                                <Typography fontSize={'10px'}
                                            fontWeight={500}>{locale === 'fa' ? persianDate : EnglishDate}</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                                <img src={'../assets/images/pie-chart.svg'} alt={''}/>
                                <Typography fontSize={'10px'}
                                            fontWeight={500}>{locale === 'fa' ? timeInPersian : locale === 'en' ? timeInEnglish : timeInRussian}</Typography>
                            </Grid>
                        </Grid>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            {
                                data.map(
                                    item =>
                                        <a href={item.link} key={item.id} style={{cursor: 'pointer'}}>
                                            <img src={item.image} alt={''}/>
                                        </a>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={'desktop'} display={{xs: 'none', md: 'block'}}>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Typography variant={'h5'} color={theme.palette.secondary.one}
                                    pb={'8px'}>{intl.$t({id: "HomeAndNews"})}
                        </Typography>
                        <Typography variant={'h5'} color={theme.palette.secondary.one}
                                    pb={'8px'}>{intl.$t({id: TranslateId})}
                        </Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'32px'}
                          pb={'24px'}>
                        <Grid width={'100%'} height={'1px'} bgcolor={theme.palette.secondary.one}></Grid>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            {
                                data.map(
                                    item =>
                                        <a href={item.link} key={item.id} style={{cursor: 'pointer'}}>
                                            <img src={item.image} alt={''}/>
                                        </a>
                                )
                            }
                        </Grid>
                    </Grid>
                    <Typography variant={'h3'} color={theme.palette.secondary.one} pb={'16px'}>{intl.$t({id: TranslateId})}</Typography>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'} pb={'30px'}>
                        <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                            <img src={'../assets/images/calendar.svg'} alt={''}/>
                            <Typography fontSize={'10px'}
                                        fontWeight={500}>{locale === 'fa' ? persianDate : EnglishDate}</Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                            <img src={'../assets/images/pie-chart.svg'} alt={''}/>
                            <Typography fontSize={'10px'}
                                        fontWeight={500}>{locale === 'fa' ? timeInPersian : locale === 'en' ? timeInEnglish : timeInRussian}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={'main'} display={'flex'} alignItems={'start'} justifyContent={'space-between'}
                      gap={{xs: '8px', md: '56px'}}>
                    <Grid width={{xs: '50%', md: '65%'}} display={{xs: 'block', md: 'none'}}>
                        <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                            {Description}
                            {Description}
                            {Description}
                            {Description}

                        </Typography>
                    </Grid>
                    <Grid width={{xs: '50%', md: '65%'}} display={{xs: 'none', md: 'block'}}>
                        <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                            {Description}
                            {Description}
                            {Description}
                            {Description}

                        </Typography>
                    </Grid>
                    <Grid width={{xs: '50%', md: '35%'}} height={'100%'}>
                        <img width={'100%'} src={pageImageSrc} alt={''}/>
                    </Grid>
                </Grid>
                <Grid pb={{xs: '24px', md: '48px'}} display={{xs: 'block', md: 'none'}}>
                    <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                        {Description}
                    </Typography>
                </Grid>
                <Grid pb={{xs: '24px', md: '48px'}} display={{xs: 'none', md: 'block'}}>
                    <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                        {Description}
                    </Typography>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default NewsInformation
