import React from 'react'
import {Grid, Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const ServicesAltynRail = ({image, title, dec, titleItem, items, imageMin}) => {

    // fixme title : string , dec:string , titleItem: string  , items:[]

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    let variantSecond = 'subtitle2';

    if (isXs) {
        variant = 'subtitle1';
        variantSecond = 'subtitle2'
    } else if (isMd) {
        variant = 'h2';
        variantSecond = 'subtitle1'
    }


    return (
        <Grid pt={{md: '89px'}}>
            <Grid position={'absolute'} top={{xs:'215%' , xxs:'195%' , s:'142%' , md:'120%' , lg:'90%'}} o right={0} zIndex={-1}>
                <img width={'100%'} src={'assets/images/back.svg'} alt={''}/>

            </Grid>
            <Grid display={'flex'} flexDirection={{xs: 'column', md: 'row-reverse'}}
                  alignItems={{xs: 'center', md: 'start'}}
                  gap={{xs: '0px', md: '25px'}}
                  justifyContent={{xs: 'center', md: 'space-between'}} pb={{xs: '', md: '96px'}}>
                <Grid>
                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={900} variant={variant}>{title}</Typography>
                    <br />
                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={700} variant={variant}>صادرات چیست؟</Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'} pb={{xs: '41px', md: '0px'}}>

                        صادرات در بازرگانی به معنای انتقال کالا یا ارسال آن از محل مبدأ به مقصد است. طبق تعریف اداره گمرک جمهوری اسلامی ایران منظور از صادرات، خروج کالا از قلمرو گمرکی کشور مبدأ همراه با رعایت قوانین و مقررات موجود است. صادرات در آیین نامه اجرایی قانون امور گمرکی به دو دسته صادرات قطعی و صادرات موقت تقسیم گردیده است. صادرات قطعی به این معنی است که هر نوع کالایی که به جهت فروش به کشورهای خارجی صادر می‌شود و صادرات موقت به معنی ارسال کالا به کشورهای خارجی جهت به عنوان مثال شرکت در نمایشگاهی یا تعمیر آن است که در نهایت به کشور برمی‌گردد.


                    </Typography>


                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={900} variant={variant}>صادرکننده کیست؟
                    </Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'} pb={{xs: '41px', md: '0px'}}>
                        به هر شخص حقیقی و یا حقوقی که دارای کارت بازرگانی و یا مجوز وزارت بازرگانی بوده و اقدام به صدور کالا نماید صادرکننده اطلاق می‌شود.

                        <br />

                        مدارک لازم برای صادرات کالا :
                        <ul>
                            <li>داشتن کارت بازرگانی معتبر به نام صادر کننده کالا.
                            </li>
                            <li>داشتن مجوز صدور کالا از وزارت صمت (در شرایطی که موافقت کلی از سوی وزارت صمت برای این کالا اعلام نشده باشد)</li>
                            <li> داشتن گواهی بهداشت و قرنطینه  کالا</li>
                            <li>داشتن گواهی استاندارد ( در صورت نیاز به داشتن استاندارد اجباری صادرات آن کالا )</li>
                            <li>گواهی انرژی اتمی (در صورت نیاز)</li>
                            <li>تهیه Packing List یا صورت عدل بندی (در صورتی که کالاها گوناگون باشند)</li>
                        </ul>
                    </Typography>

                    <br />



                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={900} variant={variant}>مجوزهای صادرات کالا
                    </Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'} pb={{xs: '41px', md: '0px'}}>
                        کالاهای صادراتی با توجه به مجوز صدور به 3 دسته تقسيم مي‌شوند:

                        <ul>
                            <li>کالاهایی که نیاز به مجوز ندارند (با رعایت ضوابط) مانند گواهی بهداشت انسانی، دامی، نباتی و ضوابط استاندارد</li>
                            <li>کالاهای مشروط که صادرات آنها با کسب مجوز امکان پذیر هستند (پس از اعلام موافقت وزارت خانه‌ها و سازمان‌های مربوط و ابلاغ آن به گمرک توسط وزارت صمت جهت صادرات)</li>
                            <li>کالاهای ممنوع الصدور که صادرات آنها به دلایل شرعی یا قانونی ممنون می باشند. این موضوع در دست دولت می باشد و در زمان هایی می‌تواند نسبت به تغییر قوانین آن اقدام نمیاد</li>

                        </ul>
                    </Typography>


                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={900} variant={variant}>انواع صادرات
                    </Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'} pb={{xs: '41px', md: '0px'}}>
                        صادرات از دیدگاه تجاري و مقياس كار صادرات به ۲ نوع مستقیم و غیرمستقیم تقسیم بندي می‌شود

                        <ul>
                            <li>صادرات مستقیم :


                                <p>


                                    شرکت‌هایی که خریداران خارجی، آنان را تشویق به صادرات می‌کنند، معمولاً از این روش
                                    استفاده می‌نمایند. همچنین فروشندگانی که صادرات آنان آن‌ قدر افزایش‌ یافته که
                                    می‌توانند هزینه‌های اداره سازمان صادراتی خود را بر عهده بگیرند، نیز از این روش
                                    استفاده می‌کنند. شرکت‌هایی می‌توانند به صادرات مستقیم اقدام نمایند که کلیه
                                    فعالیت‌های ضروری جهت فروش محصولات خود را در کشور میزبان به عهده گیرند. این فعالیت‌ها
                                    عبارت‌اند از : تعیین ظرفیت بازار، یافتن خریدار، تعیین کانال‌های توزیع و انجام امور
                                    صادرات مانند آماده کردن اسناد و مدارک، اقدامات مربوط به حمل و بیمه محموله.
                                    صادرات مستقیم به اشکال زیر انجام می‌شود :
                                    الف) نمایندگان صادراتی
                                    ب) نمایندگان فروش سیار
                                    ج) شعبه فروش در خارج
                                    د) بخش صادرات در داخل کشور
                                    ه) بازاریابی رایگان
                                    و) سفارش پستی
                                </p>
                            </li>


                            <li>
                                صادرات غیرمستقیم
                                <p>

                                    صادرات غیرمستقیم بیشتر میان شرکت‌هایی که تازه به فکر صادرات افتاده‌اند متداول هست.
                                    در این نوع صادرات به سرمایه کمتری نیاز است و شرکت اجباری به استخدام فروشندگان یا
                                    اجرای قراردادهای مختلف در خارج از کشور ندارد، همچنین ریسک کمتری متوجه صادرکنندگان
                                    است. صادرات غیرمستقیم خود به چند روش قابل‌اجراست .
                                    الف) شرکت‌های تجاری
                                    ب) شرکت‌های مدیریت صادرات
                                    ج) سازمان‌های تعاونی صادرات


                                </p>
                            </li>


                            <li>
                                صادرات قطعی
                                <p>
                                    صادرات قطعی عبارت است از ارسال کالا به خارج از قلمرو گمرکی کشور به‌منظور فروش یا
                                    مصرف در کشورهای خارجی. صادرات قطعی از پرداخت حقوق گمرکی و سود بازرگانی و عوارض و
                                    مالیات معاف هست ولیکن مشمول هزینه‌های گمرکی است

                                </p>
                            </li>

                            <li>
                                صادرات موقت
                                <p>
                                    کالاهایی که برای انجام منظوری، موقتی به خارج از کشور ارسال و پس از انجام منظور
                                    موردنظر اعاده می‌شود، صادرات موقت نامیده می‌شود
                                </p>
                            </li>


                            <li>
                                صادرات قطعی در حجم تجاری

                                <p>

                                    برای حجم یا جنبه تجاری داشتن کالا معیار یا تعریفی مشخص نشده است. در ماده ۳ قانون
                                    صادرات و واردات آمده است که مبادرت به امر صادرات و واردات کالا به‌صورت تجاری مستلزم
                                    داشتن کارت بازرگانی است و در مورد ملاک تجاری بودن کالا بدین گونه شرح داده است که
                                    کالاهایی که به تشخیص گمرک برای فروش، وارد یا صادر می‌گردد، اعم از اینکه به همان شکل
                                    یا پس از انجام عملیات تولیدی، تفکیک و بسته‌بندی، به فروش می‌رسد، تجاری تلقی خواهد شد

                                </p>
                            </li>


                            <li>
                                صادرات قطعی غیرتجاری

                                <p>

                                    صادرات قطعی غیرتجاری از طریق پست و مسافر انجام می‌گیرد.

                                </p>
                            </li>


                            <li>
                                صادرات مجدد

                                <p>

                                    صادرات مجدد عبارت است از صدور کالاهایی که قبلاً واردشده است. چنانچه صادرات مجدد از طریق بندرها، مناطق آزاد یا انبارهای تحت حفاظت گمرک انجام گیرد مشمول پرداخت حقوق گمرکی نخواهد بود.

                                </p>
                            </li>

                        </ul>
                    </Typography>


                </Grid>
                <Grid display={{xs: 'block', md: 'none'}} pb={{xs: '40px', md: '0px'}}>
                    <img width={'100%'} src={imageMin} alt={''}/>
                </Grid>
                <Grid display={{xs: 'none', md: 'block'}} pb={{xs: '40px', md: '0px'}}>
                    <img src={image} alt={''}/>
                </Grid>

            </Grid>

        </Grid>
    )
}
export default ServicesAltynRail
