import React, {useState} from 'react'
import {Grid, Typography} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material/styles";
import ServicesAltyn from "../components/Services/ServicesAltyn";
import {useLanguage} from "../LanguageContext";
import {useIntl} from "react-intl";
import ServicesAltynRail from "../components/Services/ServicesAltynRail";
import ServicesAltynImportExport from "../components/Services/ServicesAltynImportExport";
import ServicesAltynFree from "../components/Services/ServicesAltynFree";

const Services = () => {

    const {locale, changeLocale} = useLanguage();

    // console.log(locale)

    const intl = useIntl();


    const [active, setActive] = useState(1)

    const train = 'assets/images/ServicesImage.svg'

    const trainMin = 'assets/images/ServicesMin.svg'

    const des = intl.$t({id: "Lorem100"})

    const items = [intl.$t({id: "LoremTitle"}), intl.$t({id: "LoremTitle"}), intl.$t({id: "LoremTitle"}), intl.$t({id: "LoremTitle"}), intl.$t({id: "LoremTitle"}), intl.$t({id: "LoremTitle"})]


    const NavBar = [
        {
            id: 1,
            component: <ServicesAltynRail
                image={train}
                title={intl.$t({id: "RailroadTransportationCardTitle"})}
                dec={des}
                titleItem={intl.$t({id: "AltynRailTransportServiceCapacities"})}
                items={items}
                imageMin={trainMin}/>,
            title: intl.$t({id: "RailroadTransportationCardTitle"})
        },
        // {
        //     id: 2,
        //     component: <ServicesAltyn image={train} title={intl.$t({id: "RoadTransportationCardTitle"})} dec={des}
        //                               titleItem={intl.$t({id: "AltenRoadTransportServiceCapacities"})} items={items}
        //                               imageMin={trainMin}/>,
        //     title: intl.$t({id: "RoadTransportationCardTitle"})
        // },
        // {
        //     id: 3,
        //     component: <ServicesAltyn image={train} title={intl.$t({id: "MaritimeTransportationCardTitle"})} dec={des}
        //                               titleItem={intl.$t({id: "CapacitiesofAltenSeaTransportationService"})}
        //                               items={items}
        //                               imageMin={trainMin}/>,
        //     title: intl.$t({id: "MaritimeTransportationCardTitle"})
        // },
        // {
        //     id: 4,
        //     component: <ServicesAltyn image={train} title={intl.$t({id: "AirTransportationTitleServices"})} dec={des}
        //                               titleItem={intl.$t({id: "CapacitiesOfAltenAirTransportService"})} items={items}
        //                               imageMin={trainMin}/>,
        //     title: intl.$t({id: "AirTransportationTitleServices"})
        // },
        {
            id: 5,
            component: <ServicesAltynImportExport image={train} title={intl.$t({id: "ImportsAndExportsTitleServices"})} dec={des}
                                      titleItem={intl.$t({id: "AltenImportAndExportServiceCapacities"})} items={items}
                                      imageMin={trainMin}/>,
            title: intl.$t({id: "ImportsAndExportsTitleServices"})
        },
        {
            id: 6,
            component: <ServicesAltynFree image={train} title={intl.$t({id: "ClearanceTitleServices"})} dec={des}
                                      titleItem={intl.$t({id: "AltenClearanceServiceCapacities"})} items={items}
                                      imageMin={trainMin}/>,
            title: intl.$t({id: "ClearanceTitleServices"})
        },
    ]

    const theme = useTheme();


    return (
        <Grid dir={locale === 'fa' ? 'rtl' : 'ltr'}>
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
                                      borderRadius={locale === 'fa' ? item.id === 1 ? '0px 30px 30px 0px' : '0px' && item.id === 6 ? '30px 0px 0px 30px' : '0px' :
                                          item.id === 1 ? '30px 0px 0px 30px' : '0px' && item.id === 6 ? '0px 30px 30px 0px' : '0px'}
                                      py={locale === 'fa' ? '0px' : '5px'}
                                >
                                    <Typography display={locale === 'fa' ? 'flex' : 'none'} alignItems={'center'}
                                                justifyContent={'center'}
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
                                        {intl.$t({id: item.title})}
                                    </Typography>
                                    <Typography display={locale === 'fa' ? 'none' : 'flex'} alignItems={'center'}
                                                justifyContent={'center'}
                                                borderRight={item.id === 1 ? '1px solid white' : '1px solid white'}
                                                style={{cursor: 'pointer'}}
                                                color={active === item.id ? theme.palette.info.one : 'white'}
                                                variant={'subtitle2'} fontWeight={500}
                                                whiteSpace={locale === 'en' ? 'nowrap' : 'wrap'}
                                                px={{
                                                    xs: '',
                                                    md: item.id === 1 || item.id === 6 ? '10px' : '10px',
                                                    l: '',
                                                    lg: item.id === 1 || item.id === 6 ? '40px' : '23px',
                                                    xl: item.id === 1 || item.id === 6 ? '62px' : '48px'
                                                }}
                                                pl={{md:locale === 'ru' ? item.id === 1 ? '25px' :'10px' : '10px' , lg:locale === 'ru'? item.id === 1 || item.id === 6 ? '40px' : '23px':locale === 'en'? item.id === 1 || item.id === 6 ? '40px' : '23px' :''}}
                                                py={locale === 'en' ? {
                                                    xs: '',
                                                    md: '5px'
                                                } : locale === 'ru' ? item.id === 4 || item.id === 5 ? {
                                                    xs: '',
                                                    md: '19px'
                                                } :{
                                                    xs: '',
                                                    md: '8px'
                                                } : ''}>
                                        {intl.$t({id: item.title})}
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

