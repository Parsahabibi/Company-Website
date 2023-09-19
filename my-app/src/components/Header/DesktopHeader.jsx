import React, {useState} from 'react'
import {Button, Grid, Typography, useTheme} from "@mui/material";
import {textTransform} from "@mui/system";

const DesktopHeader = ({id}) => {


    const [activeButton, setActiveButton] = useState(1);


    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const buttonStyle = (buttonNumber) => ({
        backgroundColor: activeButton === buttonNumber ? 'rgba(68, 74, 93, 1)' : 'rgba(255, 191, 63, 1)',
        color: activeButton === buttonNumber ? 'white' : 'rgba(68, 74, 93, 1)',
        border: activeButton === buttonNumber ? 'none' : "1px solid rgba(68, 74, 93, 1)",
        minWidth: "14px",
        height: '14px',
        padding: '0px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: '0px',
        margin: 'auto',

    });

    const theme = useTheme()

    const variable = [
        {id: 1, title: 'صفحه اصلی'},
        {id: 2, title: 'خدمات'},
        {id: 3, title: 'استعلام قیمت'},
        {id: 4, title: 'اخبار'},
        {id: 5, title: 'درباره ما'},
        {id: 6, title: 'تماس با ما'},
    ]


    const lang = [
        {id: 1, title: 'فا'},
        {id: 2, title: 'EN'},
        {id: 3, title: 'RU'},
    ]

    return (
        <Grid position={'fixed'} top={0} left={0} right={0} zIndex={10}>
            <Grid position={'relative'} top={0} left={0} right={0} bgcolor={theme.palette.primary.one} width={'100%'}
                  py={'25px'} display={'flex'} alignItems={'center'} boxShadow={5}>
                <Grid position={'absolute'} top={0} right={{md: '48px', lg: '128px'}}
                      bgcolor={theme.palette.secondary.one} px={'43px'}
                      py={'19px'}>
                    <img src={'assets/images/AltynLogo.svg'} alt={''}/>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={'24px'}
                      pr={{md: '250px', l: '310px', lg: '400px', xl: '454'}}
                      pl={{md: '48px', l: '120px', lg: '120px', xl: '287px'}}>
                    {
                        variable.map(
                            item =>
                                <Grid key={item.id}>
                                    {
                                        item.id === id ?
                                            <Typography style={{cursor:'pointer'}} variant={'h3'} color={theme.palette.secondary.one}
                                                        fontWeight={900}>{item.title}</Typography>
                                            :
                                            <Typography style={{cursor:'pointer'}} variant={'h3'} color={theme.palette.secondary.one}
                                                        fontWeight={500}>{item.title}</Typography>
                                    }
                                </Grid>
                        )
                    }
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={'8px'}>
                    <Button style={buttonStyle(1)} onClick={() => handleButtonClick(1)}>
                        فا
                    </Button>
                    <Button style={buttonStyle(2)} onClick={() => handleButtonClick(2)}>
                        EN
                    </Button>
                    <Button style={buttonStyle(3)} onClick={() => handleButtonClick(3)}>
                        RU
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default DesktopHeader
