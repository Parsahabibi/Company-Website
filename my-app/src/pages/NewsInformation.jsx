import React, {useEffect , useState} from 'react'
import {Grid, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";


const NewsInformation = () => {

    const {locale, changeLocale} = useLanguage();

    console.log(locale)

    const intl = useIntl();


    const [timeInPersian, setTimeInPersian] = useState('');
    const [timeInRussian, setTimeInRussian] = useState('');
    const timeInEnglish = '1:09 PM';

    const PersianDate ='۲۷ خرداد ۱۴۰۱'

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pageTitle = params.get("title");
    const pageImageSrc = params.get("imageSrc");

    const theme = useTheme();

    const data = [
        {id: 1, image: '../assets/Images/telegram.svg', link: ''},
        {id: 2, image: '../assets/Images/twitter.svg', link: ''},
        {id: 3, image: '../assets/Images/instagrams.svg', link: ''},
        {id: 3, image: '../assets/Images/whatsapps.svg', link: ''},
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


    const convertToEnglishDate = (persianDate) => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        const englishDigits = '0123456789';
        const toEnglishDigits = (str) => str.replace(/[۰-۹]/g, (digit) => persianDigits.indexOf(digit));

        const englishDateStr = toEnglishDigits(persianDate);
        const parts = englishDateStr.split(' ');
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];

        const englishDate = new Date(`${year}-${month}-${day}`);


        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return englishDate.toLocaleDateString('en-US', options);
    };

    const convertToRussianDate = (persianDate) => {
        const englishDate = convertToEnglishDate(persianDate);

        const russianDate = new Date(englishDate).toLocaleDateString('ru-RU');

        return russianDate;
    };


    const englishDate = convertToEnglishDate(PersianDate);
    const russianDate = convertToRussianDate(PersianDate);


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
                        <Typography variant={'h5'} color={theme.palette.secondary.one}
                                    borderBottom={'1px solid rgba(68, 74, 93, 1)'} pb={'8px'}
                                    mb={'12px'}>{intl.$t({id: "HomeAndNews"})}
                        </Typography>
                        <Typography variant={'h5'} color={theme.palette.secondary.one}
                                    borderBottom={'1px solid rgba(68, 74, 93, 1)'} pb={'8px'}
                                    mb={'12px'}>{intl.$t({id: "HomeAndNews"})}
                        </Typography>
                    </Grid>
                    <Grid display={'flex'} alignItems={'baseline'} justifyContent={'space-between'}>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                                <img src={'../assets/Images/calendar.svg'} alt={''}/>
                                <Typography fontSize={'10px'} fontWeight={500}>{locale === 'fa' ? PersianDate : locale === 'en' ? englishDate : russianDate}</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                                <img src={'../assets/Images/pie-chart.svg'} alt={''}/>
                                <Typography fontSize={'10px'} fontWeight={500}>{locale === 'fa' ? timeInPersian : locale === 'en' ? timeInEnglish : timeInRussian}</Typography>
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
                                    pb={'8px'}>{pageTitle}
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
                    <Typography variant={'h3'} color={theme.palette.secondary.one} pb={'16px'}>{pageTitle}</Typography>
                    <Grid display={'flex'} alignItems={'center'} gap={'8px'} pb={'30px'}>
                        <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                            <img src={'../assets/Images/calendar.svg'} alt={''}/>
                            <Typography fontSize={'10px'} fontWeight={500}>{locale === 'fa' ? PersianDate : locale === 'en' ? englishDate : russianDate}</Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems={'end'} gap={'8px'}>
                            <img src={'../assets/Images/pie-chart.svg'} alt={''}/>
                            <Typography fontSize={'10px'} fontWeight={500}>{locale === 'fa' ? timeInPersian : locale === 'en' ? timeInEnglish : timeInRussian}</Typography>
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
