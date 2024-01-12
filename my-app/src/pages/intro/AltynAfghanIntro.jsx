import {Button, Grid, Typography} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AltynAfghanIntro = () => {

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


    return  <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
        <Header MobileId={5} DesktopId={5}/>
        <Grid bgcolor={'rgba(255, 251, 242, 1)'} px={{xs: '18px', xxs: '27px', md: '75px', lg: '103px'}}
              pt={{xs: '145px', md: '176px'}} position="relative" zIndex={2} >

            <Grid border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'} bgcolor={'white'}
                  px={{xs: '12px', xxs: '16px', md: '64px'}} pt={{xs: '24px', md: '32px'}}
                  pb={{xs: '36px', md: '64px'}} mb={{xs: '24px', md: '64px'}}>
                <Typography pb={'16px'} variant={variant} fontWeight={900} color={theme.palette.secondary.one}>
                    معرفی شرکت آلتن افغان
                </Typography>

                <Grid display={"flex"} direction={{md: "row", xs: "column"}} justifyContent={{md: 'space-around'}} alignItems={"center"} pb={{md:3}}>
                    <img style={{maxWidth: "300px", maxHeight: "300px"}} src="/assets/images/company/afghan/logo.jpg" alt=""/>
                    <img style={{maxWidth: "300px", maxHeight: "300px"}} src="/assets/images/company/afghan/ceo.jpg" alt=""/>
                </Grid>

                <Typography textAlign={'justify'} variant={secondVariant} fontWeight={500}
                            color={theme.palette.secondary.one}>

                    <p>شرکت آلتن افغان به عنوان یکی از شرکت های زیرمجموعه آلتن گروپ لجستیک، از سال 2023 میلادی، فعالیت خود را در حوزه ارائه خدمات مختلف حمل و نقل ریلی بین المللی آغاز نموده است و در حال حاضر در ایستگاههای مرزی تورغندی و آغینه کشور افغانستان استقرار یافته است. این شرکت با همکاری سایر شرکت های زیرمجموعه آلتن گروپ لجستیک، با ارائه خدمات با کیفیت، سریع و مطمئن، در مرز ریلی کشور ترکمنستان در تلاش است تا جایگاه خود را به عنوان ارائه دهنده جامع ترین خدمات حمل و نقل ریلی برای تجار، شرکتهای همکار و شرکای اقتصادی خود تثبیت نماید.</p>
                    <p>این شرکت تازه تاسیس، زنجیره خدمات گروه آلتن لجستیک را از کشورهای آسیانه میانه به کشورهای افغانستان، پاکستان و ایران گسترش داده و افتخار دارد تا بعنوان حلقه ای از این زنجیره تمامی نیازهای مشتریان، اعم از مشاوره تخصصی، فورواردری و حمل و نقل، انجام تشریفات گمرکی و ارتباط دهی موثر با شرکای بین المللی را فراهم سازد.</p>
                    <p>مدیرعامل شرکت آلتن افغان، عبدالعزیز سخی، از همراهی و اعتماد مشتریان صمیمانه قدردانی نموده و این اطمینان را می دهد که همواره در ارائه باکیفیت خدمات و جلب رضایت مشتری، بهترین در نوع خود باشد.</p>

                    <br/>
                    <Typography pb={'16px'} variant={variant} fontWeight={600} color={theme.palette.secondary.one}>
                        شرکت آلتن افغان آمادگی خود را نسبت به انجام کلیه خدمات ذیل اعلام می دارد
                    </Typography>
                    <ul>
                        <li>معرفی تولیدکنندگان کالا و ارائه دهندگان خدمات معتبر به تجار محترم جهت عقد قراردادهای تجاری بین المللی</li>
                        <li>انجام امور لجستیکی (حمل و نقل، تخلیه و بارگیری) و امور گمرکی در کشور افغانستان و حمل کالا به کشورهای مقصد</li>
                        <li>برنامه ریزی جهت تهیه بار برای دوسر بارگیری واگن ها در مسیر آسیای میانه و ایران و افغانستان و ارائه مشاوره های تخصصی درخصوص کاهش هزینه های حمل و نقل</li>
                        <li>اعزام واگن های تخلیه شده در افغانستان از طریق مرزهای ریلی "اینچه برون" و "آق ییلا" به ایران جهت بارگیری به مقصد قزاقستان</li>
                        <li>اجاره زمانی انواع واگن های شما مابین کشورهای آسیای میانه، افغانستان و ایران</li>
                        <li>ارائه خدمات صدور بارنامه و انجام تشریفات گمرکی</li>
                        <li>ارائه خدمات مالی و پرداخت صورتحساب در تمامی کشورهای منطقه</li>

                    </ul>
                    <br />

                    <Typography pb={'16px'} variant={variant} fontWeight={600} color={theme.palette.secondary.one}>
                        منشور اخلاقی شرکت آلتن افغان
                    </Typography>
                    <ul>
                        <li>استفاده از ظرفیت سایر شرکتهای زیرمجموعه آلتن گروپ و شرکای کلیدی در ارائه بهترین و کاملترین خدمات ممکن در اکوسیستم حمل و نقل بین المللی
                        </li>
                        <li>تعامل مستمر با مشتریان برای اطمینان بخشی و ارائه خدمات در بهترین کیفیت و سریعترن زمان ممکن
                        </li>
                        <li>همکاری با مشتریان در نوع و چگونگی پرداخت هزینه های خدمات به روش های مختلف و در کشورهای مختلف
                        </li>
                        <li>ارائه مشاوره تخصصی برای کاهش هزینه های حمل و نقل کالای صادراتی به مشتریان
                        </li>
                        <li>بکارگیری ابزارهای تخصصی فناوری اطلاعات و ارتباطات برای پایش و رصد محموله های ارسالی توسط مشتریان و ارائه زمانبندی دقیق تحویل کالا در مقصد
                        </li>
                        <li>استفاده از بهترین پرسنل تخصصی در امر لجستیک و بهره برداری از بهترین ابزارهای حمل و نقل کالا با هدف به حداقل رساندن آسیبهای احتمالی به کالای صادراتی
                        </li>
                        <li>ارائه صورتحسابهای شفاف، گویا و مستمر جهت مدیریت پرداخت های مالی فی مابین
                        </li>
                    </ul>

                </Typography>
            </Grid>
        </Grid>
        <Footer/>
    </Grid>
}

export default AltynAfghanIntro;