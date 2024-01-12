import React, {useState} from 'react'
import {Card, CardMedia, CardContent, Button, Grid, Typography} from '@mui/material';
import './Card.css';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {hover} from "@testing-library/user-event/dist/hover";
import {Link, useNavigate} from "react-router-dom";
import {useLanguage} from "../../LanguageContext";
import {useIntl} from "react-intl";
import {ReadMore} from "@mui/icons-material";
import {now} from "jalali-moment";

const Cards = ({images, moreLink =null, title, des, width, height, font, variants, state , TranslateId, addr=""}) => {

    // console.log(state ? title.props.values.title : "")
    //
    // state ? intl.$t({id: `${title.props.values.title}`}) :


    const {locale, changeLocale} = useLanguage();


    const intl = useIntl();


    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    const navigate = useNavigate();

    const [selectedInfo, setSelectedInfo] = useState({title: '', imageSrc: ''});


    const handleButtonClick = (addr) => {
        if(moreLink == null){
            const params = new URLSearchParams();
            params.append("title", title);
            params.append("imageSrc", images);
            params.append("TranslateId", TranslateId);
            navigate(addr);
        }else{
            navigate(moreLink);

        }


    };


    let variant = 'subtitle1';


    let variantSecond = 'h5';


    if (isXs) {
        variant = 'subtitle1';
        variantSecond = 'h5'
    } else if (isMd) {
        variant = variants;
        variantSecond = 'subtitle1'
    }


    return (
        <Card className="custom-card" sx={{
            borderRadius: '20px',
            width: width,
            height: height,
            '&:hover .card-description .type': {
                fontWeight: 900,
                paddingBottom: locale === 'fa' ?
                    {
                        xs: state ? '110px' : '160px',
                        md: '25px'
                    }
                    :
                    locale === 'en' ?
                        {xs: state ? '110px' : '140px', md: '25px'}
                        :
                        locale === 'ru' ?
                            {
                                xs: state ? '80px' : '140px',
                                md: '25px'
                            } : {}
            },
        }}>
            <CardMedia
                component="img"
                alt="Description"
                height="100%"
                image={images}
                title="Image title"
            />
            <Grid className="card-description"
                  sx={{
                      fontWeight: font,
                      padding: locale === 'fa' ? {
                          xs: state ? '30px 10px' : '25px 10px',
                          md: '24px'
                      } : locale === 'en' ? {
                          xs: state ? '40px 10px' : '45px 10px',
                          md: '24px'
                      } : locale === 'ru' ? {xs: state ? '60px 10px' : '45px 10px' , xxs: state ? '40px 10px' : '45px 10px' , md: '24px'} : {},
                      display: 'flex',
                      alignItems: 'center'
                  }}>
                <Typography sx={{fontWeight: font}} variant={state ? variantSecond : variant} className={'type'}
                            width={'226px'}
                            display={'flex'}>{intl.$t({id: `${title}`})}</Typography>
                <Grid className="read-more-button" pt={locale === 'fa' ? '0px' : locale === 'en' ? '45px' : locale === 'ru' ? state ? '100px' : '50px' :''}>
                    <Typography display={!state ? 'block' : 'none'} textAlign={'justify'} variant={variantSecond}
                                fontWeight={300}
                                pb={'20px'} maxHeight={locale === 'fa' ? 'auto' : locale === 'en' ? '80px' : {
                        xs: '60px',
                        xxs: '80px'
                    }}
                                style={{overflowY: 'scroll'}}> {intl.$t({id: `${des}`})}</Typography>
                    <Grid width={locale === 'fa' ? {
                        xs: state ? '87%' : '76%',
                        md: '51%',
                        l: '42%',
                        lg: '36%'
                    } : locale === 'en' ? {
                        xs: state ? '91%' : '80%',
                        md: '53%',
                        l: '44%',
                        lg: '38%'
                    } : {xs: state ? '98%' : '98%', md: '68%', l: '56%', lg: '48%'}}
                          pt={locale === 'fa' ? '0px' : '10px'}>
                        <Button variant={'outlinedTwo'}
                                onClick={handleButtonClick}
                                sx={{pt: locale === 'fa' ? "5px" : "10px"}}>{intl.$t({id: "ReadMore"})}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}
export default Cards