import React, {useState} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    Icon,
    InputAdornment,
    Radio,
    TextField,
    Typography,
    withStyles
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Price = () => {

    const [selected, setSelected] = useState(null);

    const handleClick = (value) => {
        setSelected(value);
    };

    const InputData = [
        {id: 1, title: 'نام و نام خانوادگی', placeHolder: '', icon: ''},
        {id: 2, title: 'شماره تماس', placeHolder: '', icon: ''},
        {id: 3, title: 'ایمیل', placeHolder: '', icon: ''},
        {id: 4, title: 'نام محموله', placeHolder: '', icon: ''},
        {id: 5, title: 'HS Code', placeHolder: '', icon: ''},
        {id: 6, title: 'تناژ محموله', placeHolder: '', icon: ''},
        {id: 7, title: 'مبدا', placeHolder: '(تهران-ایران)', icon: <KeyboardArrowDownIcon/>},
        {id: 8, title: 'مقصد', placeHolder: '(تهران-ایران)', icon: <KeyboardArrowDownIcon/>},
        {id: 9, title: 'محموله چند مسیره است؟', placeHolder: 'تک مسیر', icon: <KeyboardArrowDownIcon/>},
        {id: 10, title: 'درجه خطرپذیری کالا', placeHolder: '(سطح یک)', icon: <KeyboardArrowDownIcon/>},
        {id: 11, title: 'نوع بسته بندی', placeHolder: '(کارتن)', icon: <KeyboardArrowDownIcon/>},
    ]


    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    let variantSecond = 'subtitle2';

    let varintThird = 'h5'

    if (isXs) {
        variant = 'subtitle1';
        variantSecond = 'subtitle2'
        varintThird = 'h5'
    } else if (isMd) {
        variant = 'h3';
        variantSecond = 'subtitle1'
        varintThird = 'subtitle1'
    }

    return (
        <Grid>
            <Header DesktopId={3} MobileId={3}/>
            <Grid bgcolor={'rgba(255, 245, 224, 1)'} mt={{xs: '83px', md: '80px'}} pb={{xs: '32px', md: ''}}>
                <Grid pt={{xs: '35px', md: '80px'}} px={{xs: '40px', md: '210px'}}>
                    <Grid bgcolor={theme.palette.primary.three} display={'flex'} alignItems={'center'}
                          justifyContent={'center'} py={{xs: '20px', md: '17px'}} borderRadius={'20px 20px 0px 0px'}>
                        <Typography color={theme.palette.secondary.one} variant={variant} fontWeight={900}>ورود اطلاعات
                            جهت استعلام قیمت </Typography>
                    </Grid>
                    <Grid bgcolor={'white'} px={{xs: '40px', md: '80px'}} py={{xs: '35px', md: '44px'}}
                          border={'1px solid rgba(255, 191, 63, 1)'} borderRadius={'0px 0px 20px 20px'}>
                        <form style={{paddingBottom: '24px'}}>
                            <Grid display={'flex'} flexWrap={'wrap'} justifyContent={{md: 'space-between'}}
                                  flexDirection={{xs: 'column', md: 'row'}} gap={{xs: '24px', md: '112px'}}>
                                {
                                    InputData.map(
                                        (item, index) =>
                                            <Grid key={item.id} display={'flex'} flexWrap={'wrap'}
                                                  flexDirection={'column'} gap={'5px'}
                                                  ml={{xs: '0', md: index === InputData.length - 1 ? '42%' : '0%'}}>
                                                <label htmlFor={item.id}>
                                                    <Typography variant={variantSecond}
                                                                fontWeight={500}>{item.title}</Typography>
                                                </label>
                                                <Grid position={'relative'}>
                                                    <Icon style={{
                                                        position: 'absolute',
                                                        left: '15px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)'
                                                    }}>{item.icon}</Icon>
                                                    <input id={item.id} placeholder={item.placeHolder} style={{
                                                        backgroundColor: 'rgba(255, 245, 224, 1)',
                                                        border: '1px solid rgba(255, 191, 63, 1)',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        width: '100%'
                                                    }}/>
                                                </Grid>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </form>
                        <Grid pb={{xs: '25px', md: '10px'}}>
                            <Typography pb={{xs: '16px'}} variant={variantSecond} fontWeight={500}>آیا محموله اظهار شده
                                است؟</Typography>
                            <Grid>
                                {/*<form style={{display: 'flex', alignItems: 'center', gap: '40px'}}>*/}
                                {/*    <Grid style={{display: 'flex', alignItems: 'center', gap: '4px'}}>*/}
                                {/*        <label htmlFor={"yes"}>*/}
                                {/*            <Typography variant={variantSecond} fontWeight={500}>بلی</Typography>*/}
                                {/*        </label>*/}
                                {/*        <input type={'radio'} id="yes" name="fav_language" value="بله"/>*/}
                                {/*    </Grid>*/}
                                {/*    <Grid style={{display: 'flex', alignItems: 'center', gap: '4px'}}>*/}
                                {/*        <label htmlFor={'no'}>*/}
                                {/*            <Typography variant={variantSecond} fontWeight={500}>خیر</Typography>*/}
                                {/*        </label>*/}
                                {/*        <input type={'radio'} id="no" name="fav_language" value="خیر"/>*/}
                                {/*    </Grid>*/}
                                {/*</form>*/}

                                <div style={{display: 'flex', alignItems: 'center', gap: '40px'}}>
                                    <div onClick={() => handleClick('yes')}
                                         style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer'}}>
                                        <Typography variant={variantSecond} fontWeight={500}>بلی</Typography>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: selected === 'yes' ? 'rgba(255, 191, 63, 1)' : 'white',
                                            border: '1px solid rgba(255, 191, 63, 1)',
                                            borderRadius:'3px'
                                        }}></div>
                                    </div>
                                    <div onClick={() => handleClick('no')}
                                         style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer'}}>
                                        <Typography variant={variantSecond} fontWeight={500}>خیر</Typography>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: selected === 'no' ? 'rgba(255, 191, 63, 1)' : 'white',
                                            border: '1px solid rgba(255, 191, 63, 1)',
                                            borderRadius:'3px'
                                        }}></div>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                        <Grid pb={{xs: '32px', md: '48px'}} display={'flex'} justifyContent={'end'}
                              width={{xs: '50%', md: '30%', lg: '15%'}} mr={{xs: '50%', md: '70%', lg: '85%'}}>
                            <Button variant={'contained'} style={{width: '100%'}}>
                                <Typography variant={'subtitle1'} fontWeight={900}>ارسال</Typography>
                            </Button>
                        </Grid>
                        <Typography variant={varintThird} fontWeight={500}>کارشناسان ما پس از بررسی های لازم با شما تماس
                            خواهند گرفت </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
export default Price
