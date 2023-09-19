import React, {useState} from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";

const Services = () => {

    const [active, setActive] = useState(1)

    const NavBar = [
        {id: 1, component: '', title: 'حمل و نقل ریلی'},
        {id: 2, component: '', title: 'حمل و نقل جاده ای'},
        {id: 3, component: '', title: 'حمل و نقل دریایی'},
        {id: 4, component: '', title: 'حمل و نقل هوایی'},
        {id: 5, component: '', title: 'واردات و صادرات'},
        {id: 6, component: '', title: 'ترخیص کالا'},
    ]


    const theme = useTheme();


    return (
        <Grid>
            <Header DesktopId={2} MobileId={2}/>
            <Grid mt={{xs: '', md: '184px'}} mb={'120px'} px={{xs: '', md: '108px'}}>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}
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
                                                px={{xs: '', md: item.id === 1 || item.id === 6 ? '62px' : '48px'}}
                                                py={{xs: '', md: '5px'}}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                        )
                    }
                </Grid>
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
