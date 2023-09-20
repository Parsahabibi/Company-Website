import React, {useState} from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import ServicesAltyn from "../components/Services/ServicesAltyn";

const Services = () => {

    const [active, setActive] = useState(1)

    const train = 'assets/Images/ServicesImage.svg'

    const trainMin = 'assets/Images/ServicesMin.svg'

    const des = 'لورم ای سوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد '

    const items = ['لورم ایپسوم متن ساختگی', 'لورم ایپسوم متن ساختگی', 'لورم ایپسوم متن ساختگی', 'لورم ایپسوم متن ساختگی', 'لورم ایپسوم متن ساختگی', 'لورم ایپسوم متن ساختگی']


    const NavBar = [
        {
            id: 1,
            component: <ServicesAltyn image={train} title={'سرویس حمل و نقل ریلی آلتن'} dec={des}
                                      titleItem={'ظرفیت های سرویس حمل و نقل ریلی آلتن'} items={items}
                                      imageMin={trainMin}/>,
            title: 'حمل و نقل ریلی'
        },
        {
            id: 2,
            component: <ServicesAltyn image={train} title={'سرویس حمل و نقل جاده ای آلتن'} dec={des}
                                      titleItem={'ظرفیت های سرویس حمل و نقل جاده ای آلتن'} items={items}
                                      imageMin={trainMin}/>,
            title: 'حمل و نقل جاده ای'
        },
        {
            id: 3,
            component: <ServicesAltyn image={train} title={'سرویس حمل و نقل دریایی آلتن'} dec={des}
                                      titleItem={'ظرفیت های سرویس حمل و نقل دریایی آلتن'} items={items}
                                      imageMin={trainMin}/>,
            title: 'حمل و نقل دریایی'
        },
        {
            id: 4,
            component: <ServicesAltyn image={train} title={'سرویس حمل و نقل هوایی آلتن'} dec={des}
                                      titleItem={'ظرفیت های سرویس حمل و نقل هوایی آلتن'} items={items}
                                      imageMin={trainMin}/>,
            title: 'حمل و نقل هوایی'
        },
        {
            id: 5,
            component: <ServicesAltyn image={train} title={'واردات و صادرات آلتن'} dec={des}
                                      titleItem={'ظرفیت های واردات و صادرات آلتن'} items={items} imageMin={trainMin}/>,
            title: 'واردات و صادرات'
        },
        {
            id: 6,
            component: <ServicesAltyn image={train} title={'سرویس ترخیص کالا آلتن'} dec={des}
                                      titleItem={'ظرفیت های سرویس ترخیص کالا آلتن'} items={items} imageMin={trainMin}/>,
            title: 'ترخیص کالا'
        },
    ]

    const theme = useTheme();


    return (
        <Grid>
            <Header DesktopId={2} MobileId={2}/>
            <Grid mt={{xs: '83px'}} display={{xs: 'flex', md: 'none'}} alignItems={'center'}
                  justifyContent={'space-between'} mb={{xs: '27px', md: '0px'}} width={'100%'}
                  bgcolor={theme.palette.primary.one} style={{overflowX: 'scroll'}}
                  p={'24px 16px 0px 16px'} gap={'16px'}
                  sx={{
                      '::-webkit-scrollbar': {
                          display: 'none'
                      },
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none'
                  }}
            >
                {
                    NavBar.map(
                        item =>
                            <Grid key={item.id} onClick={() => {
                                setActive(item.id)
                            }}>
                                <Typography
                                    fontWeight={active === item.id ? 900 : 500}
                                    borderBottom={active === item.id ? '2px solid black' : '2px solid transparent'}
                                    pb={'4px'} whiteSpace={'nowrap'}>{item.title}</Typography>
                            </Grid>
                    )
                }
            </Grid>
            <Grid mt={{md: '184px'}} mb={'120px'} px={{xs: '16px', md: '50px', l: '50px', lg: '60px', xl: '108px'}}>
                <Grid display={{xs: 'none', md: 'flex'}} alignItems={'center'} justifyContent={'center'}
                      bgcolor={theme.palette.secondary.one} borderRadius={"30px"}>
                    {
                        NavBar.map(
                            item =>
                                <Grid width={'100%'} onClick={() => {
                                    setActive(item.id)
                                }} bgcolor={active === item.id ? theme.palette.primary.one : 'transparent'}
                                      borderRadius={item.id === 1 ? '0px 18px 18px 0px' : '0px' && item.id === 6 ? '18px 0px 0px 18px' : '0px'}
                                >
                                    <Typography display={'flex'} alignItems={'center'} justifyContent={'center'}
                                                borderRight={item.id === 1 ? 'none' : '1px solid white'}
                                                style={{cursor: 'pointer'}}
                                                color={active === item.id ? theme.palette.info.one : 'white'}
                                                variant={'subtitle1'} fontWeight={500}
                                                px={{
                                                    xs: '',
                                                    md: item.id === 1 || item.id === 6 ? '10px' : '0px',
                                                    l: '',
                                                    lg: item.id === 1 || item.id === 6 ? '44px' : '30px',
                                                    xl: item.id === 1 || item.id === 6 ? '62px' : '48px'
                                                }}
                                                py={{xs: '', md: '5px'}}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                        )
                    }
                </Grid>
                {NavBar.find(item => item.id === active)?.component}
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default Services


// import React, { useState } from 'react';
// import {List, ListItem, ListItemText} from "@mui/material";
// // import { List, ListItem, ListItemText } from '@material-ui/core';
//
// function Component1() {
//     return <div>محتوای کامپوننت ۱</div>;
// }
//
// function Component2() {
//     return <div>محتوای کامپوننت ۲</div>;
// }
//
// function Component3() {
//     return <div>محتوای کامپوننت ۳</div>;
// }
//
// const itemToComponentMap = {
//     'آیتم ۱': <Component1 />,
//     'آیتم ۲': <Component2 />,
//     'آیتم ۳': <Component3 />,
// };
//
// function NavBar() {
//     const [activeItem, setActiveItem] = useState(null);
//
//     const items = Object.keys(itemToComponentMap);
//     console.log(items)
//
//     return (
//         <div>
//             <List component="nav">
//                 {items.map((item, index) => (
//                     <ListItem
//                         key={index}
//                         button
//                         selected={activeItem === index}
//                         onClick={() => setActiveItem(index)}
//                     >
//                         <ListItemText primary={item} />
//                     </ListItem>
//                 ))}
//             </List>
//
//             {activeItem !== null && itemToComponentMap[items[activeItem]]}
//         </div>
//     );
// }
//
// export default NavBar;
