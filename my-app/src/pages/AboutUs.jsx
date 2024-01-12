import React from 'react'
import {Button, Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";
import {Link} from "react-router-dom";

const AboutUs = () => {


    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();

    const data = [
        {
            id: 1,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})

        },
        {
            id: 2,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})
        },
        {
            id: 3,
            title:intl.$t({id: "AltenHeritage"}),
            des: intl.$t({id: "Lorem100"})
        },
    ]

    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let variant = 'h3'

    let secondVariant = 'subtitle2'

    if (isXs) {
        variant = 'h3';
        secondVariant = 'subtitle2'
    } else if (isMd) {
        variant = 'h2';
        secondVariant = 'subtitle1'
    }


    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header MobileId={6} DesktopId={6}/>
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs: '18px', xxs: '27px', md: '75px', lg: '103px'}}
                  pt={{xs: '145px', md: '176px'}} position="relative" zIndex={2} >
                <Grid sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -10,
                    backgroundImage: {
                        xs: 'url(assets/images/MobileAboutUsBackGround.svg)',
                        md: 'url(assets/images/BackAboutUs.svg)'
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                </Grid>
                <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'} bgcolor={'white'}
                      px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                      pb={{xs: '36px', md: '64px'}} mb={{xs: '24px', md: '64px'}}>
                    <Typography pb={'16px'} variant={variant} fontWeight={900} color={theme.palette.secondary.one}>
                        {intl.$t({id: "TitleAboutUsPage"})}
                    </Typography>
                    <Typography textAlign={'justify'} variant={secondVariant} fontWeight={500}
                                color={theme.palette.secondary.one}>
                        مجموعه شرکتهای التن هولدینگ، عضو مجامع بین المللی و بزرگترین مجموعه شرکتهای با مدیریت واحد در حوزه CIS از کشورهای آسیانه میانه، ایران، افغانستان و پاکستان است که با مدیریت کارآمد شرکتهای زیر مجموعه مستقر در کشورهای این حوزه در عرصه های مرتبط با لجستیک، اعم از فوروداردری و حمل و نقل ریلی، جاده ای و دریایی فعالیت نموده و عمده زنجیره تامین خود را از طریق چرخه همکاری شرکتهای زیرمجموعه برآروده می نماید و تمامی فعالیتهای اصلی مجموعه را، بر اساس بکارگیری
                        فناوری های پیشرفته در عرصه نرم افزاری و سخت افزاری و هوش مصنوعی مدیریت می نماید.
                    </Typography>

                    <br />
                    <Link to={"/pages/about/group"}>
                        <Button variant={'outlinedTwo'} style={{width: "300px"}} sx={{pt:'10px'}}> {intl.$t({id: "MoreDetailsButton"})}</Button>
                    </Link>

                </Grid>
                <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}
                      px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                      pb={{xs: '32px', md: '60px'}} mb={{xs: '18px', md: '28px'}} bgcolor={'white'}>
                    <Typography pb={{xs: '24px', md: '40px'}} variant={variant} fontWeight={900}
                                color={theme.palette.secondary.one}>{intl.$t({id: "SubcategoriesOfAltenGroup"})}</Typography>
                    <Grid display={'flex'} flexDirection={'column'} gap={{xs: '24px', md: '48px'}}>


                        <Grid>
                            <Grid display={'flex'} alignItems={'baseline'} gap={'5px'} pb={'16px'}>
                                <img src={'assets/images/circle.svg'} alt={''}/>
                                <Typography variant={variant} fontWeight={900}
                                            color={theme.palette.secondary.one}>معرفی شرکت آلتن افغان</Typography>
                            </Grid>
                            <Typography lineHeight={{xs: '22px', md: '25px'}} textAlign={'justify'}
                                        variant={secondVariant} fontWeight={500}
                                        color={theme.palette.secondary.one}>

                                <p>شرکت آلتن افغان به عنوان یکی از شرکت های زیرمجموعه آلتن گروپ لجستیک، از
                                    سال 2023 میلادی، فعالیت خود را در حوزه ارائه خدمات مختلف حمل و نقل ریلی
                                    بین المللی آغاز نموده است و در حال حاضر در ایستگاههای مرزی تورغندی و
                                    آغینه کشور افغانستان استقرار یافته است. این شرکت با همکاری سایر شرکت های
                                    زیرمجموعه آلتن گروپ لجستیک، با ارائه خدمات با کیفیت، سریع و مطمئن، در
                                    مرز ریلی کشور ترکمنستان در تلاش است تا جایگاه خود را به عنوان ارائه
                                    دهنده جامع ترین خدمات حمل و نقل ریلی برای تجار، شرکتهای همکار و شرکای
                                    اقتصادی خود تثبیت نماید.</p>
                                <p>این شرکت تازه تاسیس، زنجیره خدمات گروه آلتن لجستیک را از کشورهای آسیانه
                                    میانه به کشورهای افغانستان، پاکستان و ایران گسترش داده و افتخار دارد تا
                                    بعنوان حلقه ای از این زنجیره تمامی نیازهای مشتریان، اعم از مشاوره تخصصی،
                                    فورواردری و حمل و نقل، انجام تشریفات گمرکی و ارتباط دهی موثر با شرکای
                                    بین المللی را فراهم سازد.</p>
                                <p>مدیرعامل شرکت آلتن افغان، عبدالعزیز سخی، از همراهی و اعتماد مشتریان
                                    صمیمانه قدردانی نموده و این اطمینان را می دهد که همواره در ارائه باکیفیت
                                    خدمات و جلب رضایت مشتری، بهترین در نوع خود باشد.

                                    &nbsp;&nbsp;<Link to={"/pages/about/afghan"}>بیشتر ..</Link>
                                </p>




                            </Typography>
                        </Grid>



                    </Grid>
                </Grid>
                {/*<Grid width={{xs: '40%', sm: '25%', md: '20%', lg: '15%'}} pb={{xs: '60px', md: '100px'}}>*/}
                {/*    <Button variant={'outlinedTwo'} sx={{height: '54px', lineHeight: '27px'}}>*/}
                {/*        {intl.$t({id: "ViewServicesButton"})}*/}
                {/*    </Button>*/}
                {/*</Grid>*/}
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default AboutUs
