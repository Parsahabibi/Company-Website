import React from 'react'
import {Grid, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";

const NewsInformation = () => {

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

    return (
        <Grid>
            <Header DesktopId={4} MobileId={4}/>
            <Grid mt={{xs: '80px', md: '160px'}} pt={{xs: '24px', md: ''}}
                  px={{xs: '12px', xxs: '16px', md: '50px', lg: '128px'}}>
                <Grid className={'mobile'} pb={{xs: '21px'}} display={{xs: 'block', md: 'none'}}>
                    <Typography variant={'h5'} color={theme.palette.secondary.one}
                                borderBottom={'1px solid rgba(68, 74, 93, 1)'} pb={'8px'}
                                mb={'12px'}>خانه/اخبار/{pageTitle}</Typography>
                    <Grid display={'flex'} alignItems={'baseline'} justifyContent={'space-between'}>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                                <img src={'../assets/Images/calendar.svg'} alt={''}/>
                                <Typography fontSize={'10px'} fontWeight={500}>۲۷ خرداد ۱۴۰۱</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                                <img src={'../assets/Images/pie-chart.svg'} alt={''}/>
                                <Typography fontSize={'10px'} fontWeight={500}>۱:۰۹ ب.ظ</Typography>
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
                    <Typography variant={'h5'} color={theme.palette.secondary.one}
                                pb={'8px'}>خانه/اخبار/{pageTitle}</Typography>
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
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            <img src={'../assets/Images/calendar.svg'} alt={''}/>
                            <Typography fontSize={'10px'} fontWeight={500}>۲۷ خرداد ۱۴۰۱</Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                            <img src={'../assets/Images/pie-chart.svg'} alt={''}/>
                            <Typography fontSize={'10px'} fontWeight={500}>۱:۰۹ ب.ظ</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={'main'} display={'flex'} alignItems={'start'} justifyContent={'space-between'}
                      gap={{xs: '8px', md: '56px'}}>
                    <Grid width={{xs: '50%', md: '65%'}} display={{xs: 'block', md: 'none'}}>
                        <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                        </Typography>
                    </Grid>
                    <Grid width={{xs: '50%', md: '65%'}} display={{xs: 'none', md: 'block'}}>
                        <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای

                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                            حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                            طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
                            می توان امید داشت که تمام و دشواری موجود

                        </Typography>
                    </Grid>
                    <Grid width={{xs: '50%', md: '35%'}} height={'100%'}>
                        <img width={'100%'} src={pageImageSrc} alt={''}/>
                    </Grid>
                </Grid>
                <Grid pb={{xs: '24px', md: '48px'}} display={{xs:'block' , md:'none'}}>
                    <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                        زمان مورد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                        فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                        شناخت بیشتری را برای طراحان رایانه ای

                        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                        شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                        کرد، در این صورت می توان امید داشت که تمام و دشواری موجود تکنولوژی مورد نیاز، و کاربردهای متنوع
                        با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                        فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                        تمام و دشواری موجود

                    </Typography>
                </Grid>
                <Grid pb={{xs: '24px', md: '48px'}} display={{xs:'none' , md:'block'}}>
                    <Typography textAlign={'justify'} fontSize={{xs: '14px', md: '18px'}} fontWeight={500}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید

                    </Typography>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default NewsInformation
