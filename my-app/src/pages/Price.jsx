import React, {useState, useEffect, useRef} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
    Button, Grid, Icon, Typography,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
// import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";


const Price = () => {

    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();

    const [isFormComplete, setIsFormComplete] = useState(false);

    const [selected, setSelected] = useState('yes');

    const [activeInputId, setActiveInputId] = useState(null);

    const [hoveredItem, setHoveredItem] = useState(null);

    const dropdownRefs = useRef({});

    const [inputValues, setInputValues] = useState({});

    const [show, setShow] = useState(false)


    const formRef = useRef(null);


    const InputData = [{
        id: 1,
        title: intl.$t({id: "FirstAndLastNameInputLabel"}),
        EnTitle: 'name',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'text'
    }, {
        id: 2,
        title: intl.$t({id: "PhoneNumberInputLabel"}),
        EnTitle: 'phone',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'text'
    }, {
        id: 3,
        title: intl.$t({id: "EmailInputLabel"}),
        EnTitle: 'email',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'email'
    }, {
        id: 4,
        title: intl.$t({id: "CargoNameInputLabel"}),
        EnTitle: 'Product',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'text'
    }, {
        id: 5,
        title: intl.$t({id: "HsCodeInputLabel"}),
        EnTitle: 'code',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'text'
    }, {
        id: 6,
        title: intl.$t({id: "CargoTonnageInputLabel"}),
        EnTitle: 'tonnage',
        placeHolder: '',
        icon: '',
        DropDown: [{id: 1, title: ''}, {id: 2, title: ''}, {id: 3, title: ''}],
        drop: false,
        type: 'text'
    }, {
        id: 7,
        title: intl.$t({id: "OriginInputLabel"}),
        EnTitle: 'origin',
        placeHolder: intl.$t({id: "TehranIranTitle"}),
        icon: <KeyboardArrowDownIcon/>,
        DropDown: [{id: 1, title: intl.$t({id: "TehranIranTitle"})}, {
            id: 2,
            title: intl.$t({id: "EsfehanIranTitle"})
        }, {id: 3, title: intl.$t({id: "TabrizIranTitle"})}],
        drop: true,
        type: 'text'
    }, {
        id: 8,
        title: intl.$t({id: "DestinationInputLabel"}),
        EnTitle: 'destination',
        placeHolder: intl.$t({id: "TehranIranTitle"}),
        icon: <KeyboardArrowDownIcon/>,
        DropDown: [{id: 1, title: intl.$t({id: "TehranIranTitle"})}, {
            id: 2,
            title: intl.$t({id: "EsfehanIranTitle"})
        }, {id: 3, title: intl.$t({id: "TabrizIranTitle"})}],
        drop: true,
        type: 'text'
    }, {
        id: 9,
        title: intl.$t({id: "MultiRouteInputLabel"}),
        EnTitle: 'road',
        placeHolder: intl.$t({id: "LevelOne"}),
        icon: <KeyboardArrowDownIcon/>,
        DropDown: [{id: 1, title: intl.$t({id: "LevelOne"})}, {id: 2, title: intl.$t({id: "LevelTwo"})}, {
            id: 3,
            title: intl.$t({id: "LevelThree"})
        }],
        drop: true,
        type: 'text'
    }, {
        id: 10,
        title: intl.$t({id: "DegreeOfRiskOfTheGoodsInputLabel"}),
        EnTitle: 'grade',
        placeHolder: intl.$t({id: "LevelOne"}),
        icon: <KeyboardArrowDownIcon/>,
        DropDown: [{id: 1, title: intl.$t({id: "LevelOne"})}, {id: 2, title: intl.$t({id: "LevelTwo"})}, {
            id: 3,
            title: intl.$t({id: "LevelThree"})
        }],
        drop: true,
        type: 'text'
    }, {
        id: 11,
        title: intl.$t({id: "PackageTypeInput"}),
        EnTitle: 'type',
        placeHolder: intl.$t({id: "Carton"}),
        icon: <KeyboardArrowDownIcon/>,
        DropDown: [{id: 1, title: intl.$t({id: "Carton"})}, {id: 2, title: intl.$t({id: "CardBoard"})}, {
            id: 3,
            title: intl.$t({id: "Plastic"})
        }],
        drop: true,
        type: 'text'
    },]


    const validation = yup.object().shape({
        name: yup.string().required( intl.$t({id: "NameYup"})),
        phone: yup.string().typeError( intl.$t({id: "PhoneYupNumber"})).length(11, intl.$t({id: "PhoneYupCh"}) )
            .matches(/^[0-9]+$/,  intl.$t({id: "PhoneYupNumber"})).required( intl.$t({id: "PhoneYup"})),
        email: yup.string().email( intl.$t({id: "EmailYup"})).required( intl.$t({id: "EmailYupIN"})),
        Product: yup.string().required( intl.$t({id: "ProductYup"})),
        code: yup.string().required( intl.$t({id: "CodeYup"})),
        tonnage: yup.number().typeError( intl.$t({id: "TonnageYupNumber"})).required( intl.$t({id: "TonnageYup"})),
        origin: yup.string().required( intl.$t({id: "OriginYup"})),
        destination: yup.string().required( intl.$t({id: "DestinationYup"})),
        road: yup.string().required( intl.$t({id: "RoadYup"})),
        grade: yup.string().required(    intl.$t({id: "GradeYup"})),
        type: yup.string().required( intl.$t({id: "TypeYup"}))
    })


    const {
        register, handleSubmit, formState: {errors}, watch, setValue, reset
    } = useForm({resolver: yupResolver(validation)}) // for react-hook-form


    const watchedValues = watch();


    const CustomToast = ({closeToast, message}) => {
        return (
            <Grid display={"flex"} alignItems={'start'} justifyContent={'end'} gap={'5px'} style={{
                backgroundColor: 'white',
                color: 'green',
                fontSize: '16px',
                padding: '15px 10px',
                fontWeight: 900,
            }}>
                <CheckCircleIcon fontSize={'large'}/>
                {message}
            </Grid>
        );
    };


    const onSubmitForm = (data) => {
        if (isFormComplete) {
            toast(<CustomToast message="فرم با موفقیت ارسال شد"/>);
            // console.log('hello');
            // console.log(data);

            reset();
            setInputValues({});
            setSelected(null);
        } else {
            // console.log('Form is not complete.');
        }
    };


    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    let firstVariant = 'h5'

    let variantSecond = 'subtitle2';

    let varintThird = 'h5'

    let varintValidation = 'h5'

    if (isXs) {
        variant = 'subtitle1';
        firstVariant = 'h5'
        variantSecond = 'subtitle2'
        varintThird = 'h5'
        varintValidation = 'h5'
    } else if (isMd) {
        variant = 'h3';
        firstVariant = 'subtitle2'
        variantSecond = 'subtitle1'
        varintThird = 'subtitle1'
        varintValidation = 'subtitle2'
    }


    const handleDropdownClick = (EnTitle, value) => {

        setInputValues(prevValues => ({
            ...prevValues, [EnTitle]: value
        }));
        setValue(EnTitle, value);
        setActiveInputId(null);
    };


    const handleClick = (value) => {
        setSelected(value);
    };


    useEffect(() => {
        function handleOutsideClick(event) {
            if (activeInputId !== null && dropdownRefs.current[activeInputId] && !dropdownRefs.current[activeInputId].current.contains(event.target)) {
                setActiveInputId(null);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [activeInputId, dropdownRefs]);


    useEffect(() => {
        if (Object.keys(watchedValues).length === InputData.length) {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    }, [watchedValues]);


    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <Header DesktopId={3} MobileId={3}/>
            <Grid bgcolor={'rgba(255, 245, 224, 1)'} mt={{xs: '83px', md: '80px'}} pb={{xs: '32px', md: ''}}>
                <Grid pt={{xs: '35px', md: '80px'}} px={{xs: '40px', md: '210px'}}>
                    <Grid bgcolor={theme.palette.primary.three} display={'flex'} alignItems={'center'}
                          justifyContent={'center'} py={{xs: '20px', md: '17px'}} borderRadius={'20px 20px 0px 0px'}>
                        <Typography color={theme.palette.secondary.one} variant={variant}
                                    fontWeight={900}>{intl.$t({id: "EnterInformationToInquireAboutThePrice"})}</Typography>
                    </Grid>
                    <Grid bgcolor={'white'} px={{xs: '40px', md: '29px' , lg:'80px'}} py={{xs: '35px', md: '44px'}}
                          border={'1px solid rgba(255, 191, 63, 1)'} borderRadius={'0px 0px 20px 20px'}>
                        <form onSubmit={handleSubmit(onSubmitForm)} ref={formRef}>
                            <Grid display={'flex'} flexWrap={'wrap'} justifyContent={{md: 'space-between'}}
                                  flexDirection={{xs: 'column', md: 'row'}} gap={{xs: '24px', md:'80px' ,  lg:'112px'}}
                                  pb={{xs: '24px', md: '57px'}}>
                                {InputData.map((item, index) => (dropdownRefs.current[item.id] = dropdownRefs.current[item.id] || React.createRef(),
                                    <Grid key={index} display={'flex'} flexWrap={'wrap'}
                                          flexDirection={'column'} gap={'5px'}
                                          // ml={{
                                          //     xs: '0', md: index === InputData.length - 1 ? '42%' : '0%'
                                          // }}
                                    >
                                        <label htmlFor={item.id}>
                                            <Typography variant={variantSecond}
                                                        fontWeight={500}>{item.title}</Typography>
                                        </label>
                                        <Grid position={'relative'}>
                                            <Icon style={{
                                                position: 'absolute',
                                                left: locale === 'fa' ? '10px' : '',
                                                right: locale === 'fa' ? '' : '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)'
                                            }}>{item.icon}</Icon>
                                            <input
                                                id={item.id}
                                                name={item.EnTitle}
                                                placeholder={item.placeHolder}
                                                {...register(item.EnTitle)}
                                                type={item.type}
                                                readOnly={item.drop === true}
                                                onClick={() => {
                                                    setActiveInputId(item.drop ? item.id : null);
                                                }}

                                                onChange={(e) => {
                                                    const {name, value} = e.target;
                                                    setInputValues(prevValues => ({
                                                        ...prevValues, [name]: value
                                                    }));
                                                }}
                                                value={inputValues[item.EnTitle] || ''}


                                                style={{
                                                    backgroundColor: 'rgba(255, 245, 224, 1)',
                                                    border: '1px solid rgba(255, 191, 63, 1)',
                                                    padding: '5px',
                                                    borderRadius: '5px',
                                                    width: '100%',
                                                    cursor: item.drop === true ? 'pointer' : 'text',
                                                }}/>
                                            <Grid position={'absolute'} right={locale === 'fa' ? '0px' :''}  left={locale === 'fa' ? '' :'0px'} top={'110%'}>
                                                {errors[item.EnTitle] && (
                                                    <Typography fontWeight={700} color='#F24C3D'
                                                                variant={varintValidation}>{errors[item.EnTitle].message}</Typography>)}
                                            </Grid>
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
                                                {item.DropDown.map((drop, index) => <Grid
                                                    onClick={() => handleDropdownClick(item.EnTitle, drop.title)}
                                                    key={index}
                                                    style={{cursor: 'pointer'}}
                                                    display={item.drop === true ? 'block' : 'none'}
                                                >
                                                    <Typography
                                                        variant={firstVariant}
                                                        fontWeight={hoveredItem === index ? 900 : 500}
                                                        onMouseEnter={() => setHoveredItem(index)}
                                                        onMouseLeave={() => setHoveredItem(null)}>
                                                        {drop.title}
                                                    </Typography>

                                                </Grid>)}
                                            </Grid>
                                        </Grid>
                                    </Grid>))}
                            </Grid>

                            <Grid pb={{xs: '25px', md: '10px'}}>
                                <Typography pb={{xs: '16px'}} variant={variantSecond}
                                            fontWeight={500}>{intl.$t({id: "IsTheShipmentDeclared"})}</Typography>
                                <Grid>
                                    <Grid style={{
                                        display: 'flex', alignItems: 'center', gap: '40px'
                                    }}>
                                        <Grid onClick={() => handleClick('yes')}
                                              style={{
                                                  display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer'
                                              }}>
                                            <Typography variant={variantSecond}
                                                        fontWeight={500}>{intl.$t({id: "Yes"})}</Typography>
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
                                                  display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer'
                                              }}>
                                            <Typography variant={variantSecond}
                                                        fontWeight={500}>{intl.$t({id: "No"})}</Typography>
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
                            <Grid pb={{xs: '32px', md: '48px'}} display={'flex'}
                                  justifyContent={locale === 'fa' ? 'end' : 'flex-start'}
                                  width={{xs: '50%', md: '30%', lg: '15%'}}
                                  mr={locale === 'fa' ? {xs: '50%', md: '70%', lg: '85%'} : ''}
                                  ml={locale === 'fa' ? ''  : {xs: '50%', md: '70%', lg: '85%'}}
                            >
                                <Button onClick={() => {
                                    setShow(!show)
                                }} type={'submit'} variant={'contained'}
                                        style={{width: '100%'}}
                                        disabled={selected === 'no'}>
                                    <Typography variant={'subtitle1'}
                                                fontWeight={900}>{intl.$t({id: "SendButtonTitle"})}</Typography>
                                </Button>
                            </Grid>
                            <Typography variant={varintThird}
                                        fontWeight={500}>{intl.$t({id: "AlertPricePage"})}</Typography>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>)
}
export default Price
