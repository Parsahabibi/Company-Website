import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Button, Grid, Typography} from "@mui/material";
import Cards from "../components/Card/Cards";


const Home = () => {

    const road = '/assets/Images/Road.svg'

    const Sea = '/assets/Images/Sea.svg'

    const Train  = '/assets/Images/Train.svg'

    const data = [
        {id:1 , title:'حمل و نقل ریلی' , des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و گرافیک است' , image:Train },
        {id:2 , title:'حمل و نقل دریایی' , des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و گرافیک است' , image:Sea },
        {id:3 , title:'حمل و نقل جاده ای' , des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و گرافیک است' , image:road },
    ]

    return (
        <Grid>
            <Header DesktopId={1} MobileId={1} />
            <Grid bgcolor={'rgba(255, 251, 242, 1)'} mt={{xs:'83px' , md:'73px'}} mb={'250px'} width={'100%'}>
                <Grid pb={'40px'}>
                    <img width={'100%'} src={'assets/Images/HomePageImage.svg'} alt={''}/>
                </Grid>
                <Grid px={{xs:'32px' , md:'103px'}}>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'} justifyContent={'center'}  pb={'32px'}>درباره ما</Typography>
                    <Grid mb={'40px'}  bgcolor={'white'}  px={{xs:'21px' , md:'84px'}} py={{xs:'20px' , md:'76px'}} display={'flex'} flexDirection={{xs:'column' , md:'row'}}  alignItems={'center'} gap={{xs:'16px' , md:'72px'}} border={'2px solid rgba(255, 191, 63, 1)'} borderRadius={'20px'}>
                        <Grid display={{xs:'none' , md:'block'}}>
                            <img  src={'assets/Images/AboutUSImage.svg'} alt={''}/>
                        </Grid>
                        <Grid display={{xs:'block' , md:'none'}}>
                            <img src={'assets/Images/AboutUS.svg'} alt={''}/>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'column'} justifyContent={{xs:'center' , md:'end'}} alignItems={{xs:'center' , md:'start'}} gap={'16px'}>
                            <Typography variant={'subtitle1'} fontWeight={500} lineHeight={'25px'} textAlign={'justify'}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                            </Typography>
                            <Grid width={{xs:'42%' , xxs:'35%' , s:'20%' , md:'31%' , l:'20%' , lg:'15%' , xl:'10%'}}><Button  variant={'outlinedTwo'}>جزئیات بیشتر</Button></Grid>
                        </Grid>
                    </Grid>
                    <Typography variant={'subtitle1'} fontWeight={500} display={'flex'} alignItems={'center'} justifyContent={'center'}  pb={'32px'}>خدمات </Typography>
                    {/*<Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>*/}
                    {/*    {*/}
                    {/*        data.map(*/}
                    {/*            item =>*/}
                    {/*                <Cards title={item.title} des={item.des} images={item.image} width={{xs:'152px' , md:'336px'}} height={{xs:'217px' , md:'480px'}} />*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}
export default Home
