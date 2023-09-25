import React, {useState, useEffect, useRef} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
    Button,
    Grid,
    Icon,
    Typography,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Price = () => {

    const [selected, setSelected] = useState(null);

    const [activeInputId, setActiveInputId] = useState(null);

    const [hoveredItem, setHoveredItem] = useState(null);


    const dropdownRefs = useRef({});


    const [inputValues, setInputValues] = useState({});


    const handleDropdownClick = (id, value) => {
        console.log(id, value)

        setInputValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
        setActiveInputId(null);
    };


    const handleClick = (value) => {
        setSelected(value);
    };


    const InputData = [
        {
            id: 1,
            title: 'نام و نام خانوادگی',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 2,
            title: 'شماره تماس',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 3,
            title: 'ایمیل',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 4,
            title: 'نام محموله',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 5,
            title: 'HS Code',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 6,
            title: 'تناژ محموله',
            placeHolder: '',
            icon: '',
            DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
            drop: false,

        },
        {
            id: 7,
            title: 'مبدا',
            placeHolder: '(تهران-ایران)',
            icon: <KeyboardArrowDownIcon/>,
            DropDown: [{id: 1, title: 'تهران-ایران'}, {id: 2, title: 'اصفهان-ایران'}, {id: 3, title: 'تبریز-ایران'}],
            drop: true,

        },
        {
            id: 8,
            title: 'مقصد',
            placeHolder: '(تهران-ایران)',
            icon: <KeyboardArrowDownIcon/>,
            DropDown: [{id: 1, title: 'تهران-ایران'}, {id: 2, title: 'اصفهان-ایران'}, {id: 3, title: 'تبریز-ایران'}],
            drop: true,

        },
        {
            id: 9,
            title: 'محموله چند مسیره است؟',
            placeHolder: 'تک مسیر',
            icon: <KeyboardArrowDownIcon/>,
            DropDown: [{id: 1, title: 'تک مسیر'}, {id: 2, title: 'دو مسیر'}, {id: 3, title: 'سه مسیر'}],
            drop: true,

        },
        {
            id: 10,
            title: 'درجه خطرپذیری کالا',
            placeHolder: '(سطح یک)',
            icon: <KeyboardArrowDownIcon/>,
            DropDown: [{id: 1, title: 'سطح یک'}, {id: 2, title: 'سطح دو'}, {id: 3, title: 'سطح سه'}],
            drop: true,

        },
        {
            id: 11,
            title: 'نوع بسته بندی',
            placeHolder: '(کارتن)',
            icon: <KeyboardArrowDownIcon/>,
            DropDown: [{id: 1, title: 'کارتن'}, {id: 2, title: 'مقوا'}, {id: 3, title: 'پلاستیک'}],
            drop: true,
        },
    ]


    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    let firstVariant = 'h5'

    let variantSecond = 'subtitle2';

    let varintThird = 'h5'

    if (isXs) {
        variant = 'subtitle1';
        firstVariant = 'h5'
        variantSecond = 'subtitle2'
        varintThird = 'h5'
    } else if (isMd) {
        variant = 'h3';
        firstVariant = 'subtitle2'
        variantSecond = 'subtitle1'
        varintThird = 'subtitle1'
    }


    useEffect(() => {
        function handleOutsideClick(event) {
            if (activeInputId !== null &&
                dropdownRefs.current[activeInputId] &&
                !dropdownRefs.current[activeInputId].current.contains(event.target))
            {
                setActiveInputId(null);  // اگر کلیک خارج از Grid اتفاق افتاد، Grid را مخفی کنید
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);  // اضافه کردن event listener به document

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);  // پاک کردن event listener زمانی که کامپوننت unmount می‌شود
        };
    }, []);


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
                        <form style={{paddingBottom: '57px'}}>
                            <Grid display={'flex'} flexWrap={'wrap'} justifyContent={{md: 'space-between'}}
                                  flexDirection={{xs: 'column', md: 'row'}} gap={{xs: '24px', md: '112px'}}>
                                {
                                    InputData.map(
                                        (item, index) =>
                                            (
                                                dropdownRefs.current[item.id] = dropdownRefs.current[item.id] || React.createRef(),
                                                    <Grid key={index} display={'flex'} flexWrap={'wrap'}
                                                          flexDirection={'column'} gap={'5px'}
                                                          ml={{
                                                              xs: '0',
                                                              md: index === InputData.length - 1 ? '42%' : '0%'
                                                          }}>
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

                                                            {/*{*/}
                                                            {/*    item.drop ? (*/}
                                                            {/*            <Select*/}
                                                            {/*                placeholder={item.placeHolder}*/}
                                                            {/*                options={item.DropDown.map(drop => ({ value: drop.title, label: drop.title }))}*/}
                                                            {/*                isSearchable={true}*/}
                                                            {/*                onChange={selectedOption => setValue(selectedOption.label)}*/}
                                                            {/*                styles={{*/}
                                                            {/*                    control: (provided) => ({*/}
                                                            {/*                        ...provided,*/}
                                                            {/*                        backgroundColor: 'rgba(255, 245, 224, 1)',*/}
                                                            {/*                        border: '1px solid rgba(255, 191, 63, 1)',*/}
                                                            {/*                        paddingLeft:'10px',*/}
                                                            {/*                        borderRadius: '5px',*/}
                                                            {/*                        width: '100%',*/}
                                                            {/*                        cursor: 'pointer',*/}
                                                            {/*                    }),*/}
                                                            {/*                    indicatorSeparator: () => ({}),*/}
                                                            {/*                }}*/}
                                                            {/*            />*/}
                                                            {/*    ):*/}
                                                            {/*        (*/}
                                                            {/*            <input id={item.id} placeholder={item.placeHolder}*/}
                                                            {/*                   readOnly={item.drop === true} onClick={() => {*/}
                                                            {/*                if (activeInputId === item.id) {*/}
                                                            {/*                    setActiveInputId(null);  // Close the dropdown if it's already open*/}
                                                            {/*                } else {*/}
                                                            {/*                    setActiveInputId(item.id);  // Set the active input's ID*/}
                                                            {/*                }*/}
                                                            {/*            }} style={{*/}
                                                            {/*                backgroundColor: 'rgba(255, 245, 224, 1)',*/}
                                                            {/*                border: '1px solid rgba(255, 191, 63, 1)',*/}
                                                            {/*                padding: '5px',*/}
                                                            {/*                borderRadius: '5px',*/}
                                                            {/*                width: '100%',*/}
                                                            {/*                cursor: item.drop === true ? 'pointer' : 'text',*/}
                                                            {/*            }}/>*/}
                                                            {/*        )*/}
                                                            {/*}*/}

                                                            <input id={item.id} placeholder={item.placeHolder}
                                                                   value={inputValues[item.id] || ''}
                                                                   readOnly={item.drop === true} onClick={() => {
                                                                setActiveInputId(item.drop ? item.id : null);
                                                            }} style={{
                                                                backgroundColor: 'rgba(255, 245, 224, 1)',
                                                                border: '1px solid rgba(255, 191, 63, 1)',
                                                                padding: '5px',
                                                                borderRadius: '5px',
                                                                width: '100%',
                                                                cursor: item.drop === true ? 'pointer' : 'text',
                                                            }}/>

                                                            <Grid position={'absolute'} zIndex={10}
                                                                  ref={dropdownRefs.current[item.id]}
                                                                  bgcolor={'rgb(255, 245, 224)'}
                                                                  border={item.drop === true ? '1px solid rgb(255, 191, 63)' : ''}
                                                                  top={32} right={0}
                                                                  width={'100%'} borderRadius={' 5px'}
                                                                  display={activeInputId === item.id ? 'flex' : 'none'}
                                                                  flexDirection={'column'} gap={'10px'}
                                                                  p={item.drop === true ? '10px' : '0px'}
                                                            >
                                                                {
                                                                    item.DropDown.map(
                                                                        (drop, index) =>
                                                                            <Grid
                                                                                onClick={() => handleDropdownClick(item.id, drop.title)}
                                                                                key={index}
                                                                                style={{cursor: 'pointer'}}
                                                                                display={item.drop === true ? 'block' : 'none'}
                                                                            >
                                                                                <Typography variant={firstVariant}
                                                                                            fontWeight={hoveredItem === index ? 900 : 500}
                                                                                            onMouseEnter={() => setHoveredItem(index)}
                                                                                            onMouseLeave={() => setHoveredItem(null)}>
                                                                                    {drop.title}
                                                                                </Typography>

                                                                            </Grid>
                                                                    )
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                            )
                                    )
                                }
                            </Grid>
                        </form>
                        <Grid pb={{xs: '25px', md: '10px'}}>
                            <Typography pb={{xs: '16px'}} variant={variantSecond} fontWeight={500}>آیا محموله اظهار شده
                                است؟</Typography>
                            <Grid>
                                <Grid style={{display: 'flex', alignItems: 'center', gap: '40px'}}>
                                    <Grid onClick={() => handleClick('yes')}
                                          style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '4px',
                                              cursor: 'pointer'
                                          }}>
                                        <Typography variant={variantSecond} fontWeight={500}>بلی</Typography>
                                        <Grid style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: selected === 'yes' ? 'rgba(255, 191, 63, 1)' : 'white',
                                            border: '1px solid rgba(255, 191, 63, 1)',
                                            borderRadius: '3px'
                                        }}></Grid>
                                    </Grid>
                                    <Grid onClick={() => handleClick('no')}
                                          style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '4px',
                                              cursor: 'pointer'
                                          }}>
                                        <Typography variant={variantSecond} fontWeight={500}>خیر</Typography>
                                        <Grid style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: selected === 'no' ? 'rgba(255, 191, 63, 1)' : 'white',
                                            border: '1px solid rgba(255, 191, 63, 1)',
                                            borderRadius: '3px'
                                        }}></Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid pb={{xs: '32px', md: '48px'}} display={'flex'} justifyContent={'end'}
                              width={{xs: '50%', md: '30%', lg: '15%'}} mr={{xs: '50%', md: '70%', lg: '85%'}}>
                            <Button variant={'contained'} style={{width: '100%'}} disabled={selected === 'no'}>
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
