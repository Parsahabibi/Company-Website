import React from 'react'
import {Card, CardMedia, CardContent, Button, Grid, Typography} from '@mui/material';
import './Card.css';
import {hover} from "@testing-library/user-event/dist/hover";

const Cards = ({images, title , des  , width , height}) => {
    return (
        <Card className="custom-card" sx={{
            borderRadius:'20px',
            width:width,
            height:height,
            '&:hover .card-description .type': {
                fontWeight: 900
            }
        }}>
            <CardMedia
                component="img"
                alt="Description"
                height="100%"
                image={images}
                title="Image title"
            />
            <CardContent className="card-description" sx={{ fontWeight: 500 }}>
                <Typography variant={'h3'} className={'type'} width={'212px'} lineHeight={'30px'} >{title}</Typography>
                <Grid className="read-more-button">
                    <Typography variant={'subtitle1'} fontWeight={300}>{des}</Typography>
                    <Button variant={'outlinedTwo'}>بیشتر بخوانید</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Cards

