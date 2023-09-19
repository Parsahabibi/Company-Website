import React from 'react'
import {Card, CardMedia, CardContent, Button, Grid, Typography} from '@mui/material';
import './Card.css';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {hover} from "@testing-library/user-event/dist/hover";

const Cards = ({images, title, des, width, height, font, variants, state}) => {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


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
                paddingBottom:{xs:state ? '110px' : '160px' , md:'25px'}
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
                         sx={{fontWeight: font, padding: {xs: state ? '30px 10px' : '25px 10px', md: '24px'} , display:'flex' , alignItems:'center'}}>
                <Typography sx={{fontWeight: font}} variant={state ? variantSecond : variant} className={'type'}
                            width={'226px'} display={'flex'}>{title}</Typography>
                <Grid className="read-more-button">
                    <Typography textAlign={'justify'} variant={variantSecond} fontWeight={300}
                                pb={'20px'}>{des}</Typography>
                    <Grid width={{xs: state ? '87%' : '76%', md: '51%', l: '42%', lg: '36%'}}>
                        <Button variant={'outlinedTwo'}>بیشتر بخوانید</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}
export default Cards

